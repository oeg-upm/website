const bcrypt = require('bcrypt');
const saltRounds  = 10;

exports.generate = function(plainData){
	return new Promise((resolve, reject) => {
		bcrypt.hash(plainData, saltRounds, (err, hash) => {
			if(err) reject(err);
			resolve(hash);
		});
	});
}

