const Sequelize = require('sequelize');
const { Pool, Client } = require('pg');
const client = new Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: 'postgres'
});

client.connect();
client.query("SELECT 'CREATE DATABASE " + process.env.PG_DB + "' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '" + process.env.PG_DB + "')");
sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = {
    connector: sequelize,
    adapter: Sequelize,
    source: require('./models/source')
};
