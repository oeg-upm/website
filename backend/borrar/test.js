const {Client} = require("graphql-ld");
const {QueryEngineSparqlEndpoint} = require("graphql-ld-sparqlendpoint");
const context = {
  "@context": {
	  "label": "http://www.w3.org/2000/01/rdf-schema#label",
	  "Person":"http://www.schema.org/Person",
	  "name":{"@id":"http://www.schema.org/name"}, 
	  "role":{"@id":"http://www.schema.org/jobTitle"}
  }
};

// Create a GraphQL-LD client based on a SPARQL endpoint
const endpoint = 'http://localhost:8890/sparql';
const client = new Client({ context, queryEngine: new QueryEngineSparqlEndpoint(endpoint) });
// Define a query
const query = `
  query {
  	... on Person{
		id	
		name
	}
  }`;
const news = `
  {
	id
	newTitle
	newText

  }`;
// Execute the query
let p = new Promise((resolve, reject) => {
	resolve(client.query({query}));
});
p.then((result) => {
//	console.log(result.data[0].employed[0].name);
//	console.log(result.data[0].employed[0].role)
	console.log(result)
}).catch((e) =>{
	console.log(e);
});

