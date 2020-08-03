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
 
router.get('', checkAuth, async(req,res,next) => {
  
  // const client = getAuthenticatedClient(req.userData.accessToken);
 
  // const result = await client.api('/security/alerts')
  // .top(100)
  // .get();
  
  // res.status(200).json({
  //   alerts: result
  // })
  request.get({
    url: 'https://graph.microsoft.com/v1.0/security/alerts',
    headers: {
        "Authorization": req.userData.accessToken
      }  
}, (err, response, body) => {
  console.log(JSON.parse(body));
    res.status(200).json({
        message: 'Alerts Fetched Successfully',
        result: JSON.parse(body)
    })
})

});
 
router.get('/:id',checkAuth, async(req,res,next) =>{
  const client = getAuthenticatedClient(req.userData.accessToken);
 
  const result = await client.api(`/security/alerts/${req.params.id}`)
  .get();
 
  
  res.status(200).json({
    alerts: result
  })
});
 
// router.update('/update', checkAuth, async(req,res,next) => {
  
//   const client = getAuthenticatedClient(req.userData.accessToken);
 
//   const result = await client.api('/security/alerts/')
//  .update(alert);
 
  
//   res.status(200).json({
//     alerts: result
//   })
// });
 
module.exports = router;