const express = require('express');
const checkAuth = require('../middleware/check-auth');
const router = express.Router();
const request = require('request');

const APP_ID = '120165c2-bd77-478e-86d3-36f9f74b8e11';
const APP_SECERET = 'TFt-:fuRKk/bzI7:69nf9?jGJ]WHe-P?';
const TOKEN_ENDPOINT ='https://login.microsoftonline.com/83a8ed06-53b4-4ea7-95e7-1fcfb93f84bc/oauth2/v2.0/token';
const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';

const axios = require('axios');
const qs = require('qs');

const postData = {
  client_id: APP_ID,
  scope: MS_GRAPH_SCOPE,
  client_secret: APP_SECERET,
  grant_type: 'client_credentials'
};

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

let token = '';

axios
  .post(TOKEN_ENDPOINT, qs.stringify(postData))
  .then(response => {
    // console.log(response.data.access_token);
    token = response.data.access_token;
  })
  .catch(error => {
    console.log(error);
});

router.get('', (req, res, next) => {
  console.log(token);
    res.status(200).json({
        message: 'Access Token',
        accessToken: token
    })
});

module.exports = router;