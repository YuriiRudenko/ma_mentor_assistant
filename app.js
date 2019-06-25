let constants = require('./constants');
let app       = constants.app;
let url       = `${constants.url}${constants.apiToken}/sendMessage`;
let db        = require('./db');
// let google = require('./google');


const Source = db.source(db.connector, db.adapter);

app.use(constants.bodyParser.json());


// sheet_id = '1g_fmYBreEfglD_Qi2p0ue5JQYpWGbRUP2TIOX-HKVwc';
// processor = (err, res) => {
//     if (err) return console.log('The API returned an error: ' + err);
//     const rows = res.data.values;
//     if (rows.length) {
//         console.log('Name, Major:');
//         // Print columns A and E, which correspond to indices 0 and 4.
//         rows.map((row) => {
//
//             console.log(`${row}`);
//         });
//     } else {
//         console.log('No data found.');
//     }
// };
//
// google.readSheet();

findOrCreateSourceByKind = (kind, token) => {
    Source.findOne({where: { kind: kind }}).then((record) => {
        if (!record) record = Source.build({ kind: kind });
        record.token = token;
        record.save();
    });
    return kind;
};

app.post('/', (req, res) => {
    if (!req.body.message) return;

    const chatId      = req.body.message.chat.id;
    const sentMessage = req.body.message.text;
    let   params      = { chat_id: chatId };

    if (sentMessage.match(/\/source.+/)){
        let data = sentMessage.split(' ');
        let kind = findOrCreateSourceByKind(data[1], data[2]);

        params['text'] = `Successfully saved source for ${kind}`;

        constants.axios
            .post(url, params)
            .then((res) => res.status(200).send(res))
            .catch((err) => res.send(err));
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
