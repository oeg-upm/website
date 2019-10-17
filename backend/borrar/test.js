const {Client} = require("graphql-ld");
const {QueryEngineSparqlEndpoint} = require("graphql-ld-sparqlendpoint");
const context = {
  "@context": {
	  "label": "http://www.w3.org/2000/01/rdf-schema#label",
	  "employed": "https://w3id.org/transmodel/employeds",
	  "employedname": {"@id": "http://schema.org/employed_name" },
	  "employedrole": {"@id": "http://schema.org/employed_role"}, 
	  "newTitle":{"@id": "http://schema.org/new_title"},
	  "newText":{"@id":"http://schema.org/new_text"}
  }
};

// Create a GraphQL-LD client based on a SPARQL endpoint
const endpoint = 'http://localhost:8890/sparql';
const client = new Client({ context, queryEngine: new QueryEngineSparqlEndpoint(endpoint) });
// Define a query
const employeds = `
  query {
  	<https://w3id.org/transmodel/employeds/0>
		employedname
		employedrole

	  
  }`;
const news = `
  {
	id
	newTitle
	newText

  }`;
const query = employeds;
// Execute the query
let p = new Promise((resolve, reject) => {
	resolve(client.query({query}));
});
p.then((result) => {
//	console.log(result.data[0].employed[0].name);
//	console.log(result.data[0].employed[0].role)
	console.log(result.data)
}).catch((e) =>{
	console.log(e);
});

