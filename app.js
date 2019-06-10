let constants = require('./constants');
let app       = constants.app;
let url       = `${constants.url}${constants.apiToken}/sendMessage`;

app.use(constants.bodyParser.json());

app.post('/', (req, res) => {
    if (!req.body.message) return;

    const chatId      = req.body.message.chat.id;
    const sentMessage = req.body.message.text;
    let   params      = { chat_id: chatId, text: 'hello back' };

    if (!sentMessage.match(/hello/)) return res.status(200).send(null);

    constants.axios
        .post(url, params)
        .then((res) => res.status(200).send(res))
        .catch((err) => res.send(err));
});

app.listen(constants.port, () => {
    console.log(`Listening on port ${constants.port}`);
});
