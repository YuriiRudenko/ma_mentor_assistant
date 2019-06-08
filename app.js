var constants = require('./constants');
var app = constants.app;

app.use(constants.bodyParser.json());

app.post('/', (req, res) => {
    if (req.body.message) {
        const chatId = req.body.message.chat.id;
        const sentMessage = req.body.message.text;

        if (sentMessage.match(/hello/)) {
            constants.axios.post(`${constants.url}${constants.apiToken}/sendMessage`,
                {
                    chat_id: chatId,
                    text: 'hello back 👋'
                })
                .then((response) => {
                    res.status(200).send(response);
                }).catch((error) => {
                res.send(error);
            });
        } else {
            res.status(200).send({});
        }
    }
});

app.listen(constants.port, () => {
    console.log(`Listening on port ${constants.port}`);
});
