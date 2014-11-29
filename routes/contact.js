var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var api_key = process.env.MAILGUN_APIKEY;
var domain = process.env.MAILGUN_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

router.post('/', function(req, res){

	var data = {
	  from: req.body.name + ' <' + req.body.email + '>',
	  to: 'serino.marghe@gmail.com',
	  subject: 'Nuovo messaggio di posta elettronica da: ' + req.body.name,
	  text: req.body.message
	};

	mailgun.messages().send(data, function (error, body) {
		if(error){
			console.log('Error: ' + error);
			res.render('/', {title: 'Contact', msg: 'Error occurred: ' + error, err: true})
		} else {
	  	console.log(body);
	  	res.render('/', {title: 'Contact', msg: 'Message sent!', err: false})
		}
	});

});

module.exports = router;