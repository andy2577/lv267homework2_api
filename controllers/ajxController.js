var https = require('https');
var Eneida = require('../models/book');

module.exports = (req, res, next) => {
    var data = '';

    const options = {
      hostname: 'lv267homework2-api.herokuapp.com',
      port: 443,
      path: '/',
      method: 'GET'
    };
  
    const ajxreq = https.request(options, (ajxres) => {
      // console.log('statusCode:', ajxres.statusCode);
      // console.log('headers:', ajxres.headers);
  
      ajxres.on('data', (d) => {
        // process.stdout.write(d);
        data = JSON.parse(d);
        // console.log(req.params.student);
        res.render('index', {
          title: 'ЕнеЇда',
          quotes: data,
          show: req.params.student
        });
  
      });
    });
  
    ajxreq.on('error', (e) => {
      console.error(e);
    });
  
    ajxreq.end();
  }