/* eslint-disable */
const axios =  require('axios');
const ENDPOINT = 'http://localhost:3333/new/create'
module.exports = {
    createNew(){
        console.log("Click Fuera");
        let data = {Title:'Example'};
        return new Promise((resolve, reject) => {
            axios.post(ENDPOINT, data, { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((res) => {
                if(res.status == 200){
                    resolve(true);
                }else{
                    reject(false);
                }
            });
        });
    }
}