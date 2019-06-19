let constants = require('./constants');
//
let app       = constants.app;
let url       = `${constants.url}${constants.apiToken}/sendMessage`;
let db = require('./db');

const Source = db.source(db.connector, db.adapter);

app.use(constants.bodyParser.json());

app.post('/', (req, res) => {
    if (!req.body.message) return;

    const chatId      = req.body.message.chat.id;
    const sentMessage = req.body.message.text;
    let   params      = { chat_id: chatId, text: 'hello back' };

    if (sentMessage.match(/\\source/)){
        console.log(123);
        Source.findAll().then((sources => {
                if (sources.length) console.log(sources[0].dataValues.token);
            })
        );
    }
    else if (sentMessage.match(/hello/)){
        constants.axios
            .post(url, params)
            .then((res) => res.status(200).send(res))
            .catch((err) => res.send(err));
    }
    else return res.status(200).send(null)

});

app.listen(constants.port, () => {
    console.log(`Listening on port ${constants.port}`);
});
