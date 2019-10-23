const fs = require('file-system');
const newsFilePath = "./data/news.csv";
const tempFiles = "./tempFiles";
const imagePath = "./iamges/news/"
const idGenerator  = require('../middlewares/idGenerator.js');
const fsExtra = require('fs-extra');
const multer = require('multer');

//HELPERS

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './temp_files')
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.')[1];

    cb(null, file.fieldname +'.'+ ext)
  }
});

let upload = multer({ storage: storage, preservePath: true }).single('image');
//FUNCTIONS

function checkFields(body){
	return new Promise((resolve, reject) => {
		if(body.title != "" && body.title != undefined && 
		body.author != "" && body.author != undefined &&
		body.article != "" && body.article != undefined  &&
		body.tags != "" && body.tags != undefined &&
		body.headline != "" && body.headline != undefined){
			resolve();
		}else{
			reject();
		}
	});
}
function transformData(news_id, data){
	return new Promise((resolve, reject) => {
		let date = Date.now();
		if(news_id == "") reject("News Id was empty");
		//news_id,title,author,img,preview,date,article
		let result  =	news_id + "," + "'" + data.title.toString() + "'" + "," + "'" + data.author.toString() + "'" + ",imgExample" + "," + "'" + data.headline.toString() 
		 	+ "'" + "," + date.toString() + "," + "'" + data.article.toString() + "'\n";
		resolve(result);
		
	});
}
function saveNew(data){
	return new Promise((resolve, reject) => {
		fsExtra.emptyDirSync(newsFilePath);
		fs.appendFile(newsFilePath, data, (err) => {
			if(err) reject("Fallo appendLine: " + err);
			resolve("Line Appended");
		});
	});
}
function generateId(title, author){
	return new Promise((resolve, reject) => {
		let date = Date.now() + "";
		idGenerator.generate(title+author+date).then((result) => {
			resolve(result);
		}).catch((error) => {
			reject("Falla idGenerator: " + error);
		});

	});
}

/*
function checkTempDir(){
	return new Promise((resolve, reject) => {
		fsExtra.emptyDir(temDir, (err) => {
			
		});
	});
}
*/

function uploadImageToNewsImageDir(req){
	return new Promise((resolve, reject) => {
		upload(req, (err) => {
			if(err) reject(err);
			resolve("Image Uploaded");
		});
	});
}

//MODULE EXPORTS

exports.create = function createNew(req, res, next){
	/*
	 * Falta Pensar como manejar las IMG.
	 */
	checkFields(req.body).then((result) => {
		return generateId(req.body.title,req.body.author);
	}).then((result) => {
		return transformData(result, req.body);
	}).then((result) => {
		return 	saveNew(result);
	}).then((result) => {
		console.log("Success");
		return res.status(200).send("Sucess");
	}).catch((error) =>{
		console.log("Reject: " +  error);
		return res.status(500).send("Internal Server Error.");
	});
}

exports.upload = function uploadImage(req, res, next){
	if(req.file.destination != "./")
		return res.status(500).send("Invalid Destination Path.");
	uploadFileToNewsImageDir((result) => {
		return res.status(200).send(true);
	}).catch((error) => {
		console.log(error);
		return res.status(500).send("Internal Server Error.");
	});

}
