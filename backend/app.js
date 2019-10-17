const express = require('express');
const expressGraphQl = require('express-graphql');
const {buildSchema} = require('graphql')
const app = express();
const PORT = 3333;
const test = require('./routes/test.route.js')
app.use("/test", test);
app.get("/", (req,res) => {
	res.send("Working");
})
app.listen(PORT, function(){
console.log("App listening in port " + PORT);
});
