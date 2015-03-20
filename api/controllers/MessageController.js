/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	send: function(req, res) {
		console.log('Message sending...');

		var accountSid = 'AC7ba7f3d13644b5ffe86e6cdbae4e2d76';
		var authToken = "332cc9acb0abbf8a01ba066dc414c2cb";
		var client = require('twilio')(accountSid, authToken);

		if(!req.user) {
			res.jsonx({error: 'user not logged in'});
		}
		else { 
			client.messages.create({
			    body: "You've been signed up for live election updates",
			    to: req.user.phone,
			    from: "+13143120866"
			}, function(err, message) {
			    // process.stdout.write(message.sid);
			    if(message) {
			    	res.jsonx({error: 'Success'});
			    }
			    else if(err) {
			    	res.jsonx({error: 'Unsuccessful'});
			    	console.log(err);
			    }
			});
		}
	}
};
