const {Client} = require('virtuoso-sparql-client');
const oegGraph = new Client('http://localhost:8890/sparql');
oegGraph.setQueryGraph('http://localhost:8890/test2');
oegGraph.query('SELECT * where {?s ?p ?o.} LIMIT 100')
	.then((result) => {
		console.log(result);
	}).catch((err) => {
		console.log(err);
	});
/*
DbPediaClient.query('')
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.log(err);
  });*/
