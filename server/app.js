var express = require('express');
var app = express();

app.get('/send',function(req,res){

	// These vars are your accountSid and authToken from twilio.com/user/account

	var accountSid = 'AC7f68e564da4418868e422ab44588b49f';
	var authToken = "66dfc254a5079bbed9b2f574c752e3e4";

	var client = require('twilio')(accountSid, authToken);
	
	var args = req.query;

	client.messages.create({
	    body: args.message,
	    to: "+14088322144",
	    from: "+16503766941",
	}, function(err, message) {
		if (err) {
			console.log(err);
			res.send(err);

		}
	    console.log(message.sid);
	    res.send(message.sid);
	});
});

app.listen(3008);