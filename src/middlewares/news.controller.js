/* eslint-disable */
const axios =  require('axios');
const qs = require('querystring')
const ENDPOINT = 'http://localhost:3333/new';
function sendNew(form){
    return new Promise((resolve, reject) => {
        axios.post(`${ENDPOINT}/create`, qs.stringify(form), { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((res) => {
            if(res.status == 200){
                resolve(true);
            }else{
                reject(false);
            }
        });
    });
}
function sendImage(img, name){
    return new Promise((resolve, reject) => {
        let file = new FormData();
        file.append('file', img, name);
        axios.post(`${ENDPOINT}/upload`, file,{ headers: {'Content-Type': 'multipart/form-data' }}).then((res) => {
            if(res.status == 200) resolve(true);
            else reject(false);
        });
    });
}
module.exports = {
    createNew(form){

    }
}