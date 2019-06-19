// const db = require('./db');
//
// class Source extends db.adapter.Model {}
// let fields = {
//     token: db.adapter.STRING,
//     kind: db.adapter.STRING
// };
// let config = { db.connector, modelName: 'source' };
//
// Source.init(fields, config);
//
// db.connector.sync()
//     .then(() => Source.create({
//         token: '123',
//         kind: 'schedule'
//     }))
//     .then(jane => {
//         console.log(jane.toJSON());
//     });
//
// module.exports = {
//     source: Source
// };
'use strict';

module.exports = (connector, adapter) => {
    let Source = connector.define('source', {
        token: adapter.STRING,
        kind:  adapter.STRING
    });

    // Source.associate = function (models) {
        // models.Source.belongsTo(models.User, {
        //     onDelete: "CASCADE",
        //     foreignKey: {
        //         allowNull: false
        //     }
        // });
    // };

    return Source;
};
