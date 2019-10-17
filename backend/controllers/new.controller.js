const fs = require('file-system');
const newsFilePath = "";
function checkFields(body){
	return (body.title != "" && body.title != undefined && body.author != "" && body.author != undefined && body.article != "" && body.article != undefined  && body.tags != "" && body.tags != undefined && body.headline != "" && body.headline != undefined);
}
function transformData(data){
	//news_id,title,author,img,preview,date,article
	let result  =	data.title.toString() + "," + data.author.toString() + "," + "'" + data.headline.toString 
		 	+ "'" + "," + data.date.toString() + "," + "'" + data.article + "'";
	return result;
}
function saveNew(data){
	return new Promise((resolve, reject) => {
		fs.appendFile(newsFilePath, data, (err) => {
			if(err) reject("Fallo appenLine: " + err);
			resolve("Line Appended");
		});
	});
}
exports.create = function createNew(req, res, next){
	if(!checkFields(req.body)){
		return res.status(500).send("Wrong Fields.");
	}
	/*
	 * Falta Pensar como manejar las IMG.
	 * Falta crear un ID unico ¿HASH(author + date + title)?.
	 * Especificar un formato para la Fecha.
	 */
	let data = transformData(req.body);

}
