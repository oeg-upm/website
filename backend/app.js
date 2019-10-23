const express = require('express');
const expressGraphQl = require('express-graphql');
const {buildSchema} = require('graphql')
const cors = require('cors');

const bodyParser = require('body-parser');
const app = express();
const PORT = 3333;
const TestRouter = require('./routes/test.route.js')
const NewRouter = require('./routes/new.route.js');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/test", TestRouter);
app.use("/new", NewRouter)
app.listen(PORT, function(){
console.log("App listening in port " + PORT);
});
