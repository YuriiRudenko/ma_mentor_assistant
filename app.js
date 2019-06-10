let constants = require('./constants');
let app = constants.app;
let url = `${constants.url}${constants.apiToken}/sendMessage`;

app.use(constants.bodyParser.json());

app.post('/', (req, res) => {
    if (req.body.message) {
        const chatId = req.body.message.chat.id;
        const sentMessage = req.body.message.text;

        if (!sentMessage.match(/hello/)) return res.status(200).send({});
        constants.axios
            .post(url, {
                chat_id: chatId,
                text: 'hello back 👋'
            })
            .then((response) => {
                res.status(200).send(response);
            })
            .catch((error) => {
                res.send(error);
            });
    }
});

app.listen(constants.port, () => {
    console.log(`Listening on port ${constants.port}`);
});
