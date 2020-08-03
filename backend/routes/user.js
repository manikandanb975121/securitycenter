const express = require('express');
const router = express.Router();
var graph = require('@microsoft/microsoft-graph-client');
const checkAuth = require('../middleware/check-auth');
require('isomorphic-fetch');
const request = require('request');

function getAuthenticatedClient(accessToken) {
    const client = graph.Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      }
    });
   
    return client;
}


router.get('', checkAuth, async(req, res, next) => {

    request.get({
        url: 'https://graph.microsoft.com/v1.0/me',
        headers: {
            "Authorization": req.userData.accessToken
          }  
    }, (err, response, body) => {
        res.status(200).json({
            message: 'Data Fetched Successfully',
            result: JSON.parse(body)
        })
    })
    // const client = getAuthenticatedClient(req.userData.accessToken);
    // const user = await client.api('/me').get();
    // console.log(user);
    // res.status(200).json({
    //   users: user
    // })

});

module.exports = router;