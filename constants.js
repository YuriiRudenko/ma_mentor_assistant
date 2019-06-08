const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const port = 8080;
const url = 'https://api.telegram.org/bot';
const apiToken = process.env.TELEGRAM_TOKEN;

module.exports = {
    app: app,
    axios: axios,
    bodyParser: bodyParser,
    port: port,
    url: url,
    apiToken: apiToken
};