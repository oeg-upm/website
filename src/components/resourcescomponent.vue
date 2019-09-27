<template>
  <div class="fill container mt-5">
      <div>
          <h1>{{pageName}}</h1>
          <p>{{pageDescription}}</p>
      </div>
      <div class="row ">
          <div class="col-sm-12 col-lg-4 mt-3" v-for="element in elements" :key="element.uri">
              <b-card
                :header="element.name"
                header-bg-variant="primary"
                header-border-variant="primary"
                border-variant="primary"
                header-text-variant="light"
              >
              <b-card-body>
                  <p>{{element.description}}</p>
              </b-card-body>
              <b-card-footer class="text-right" footer-bg-variant="transparent">
                <b-button v-on:click="goTo(element.uri)" size="sm" variant="info">Read More</b-button>
              </b-card-footer>
              </b-card>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'resourcescomponent',
    data(){
        return{
            elements:[],
            ontologies:[],
            ld:[],
            technologies:[],
            services:[],
            pageDescription:String, 
            pageName:String
        }
    },
    methods:{
        loadOntologies(){
            this.pageName = 'Ontologies' 
            this.pageDescription = 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Hac habitasse platea dictumst quisque sagittis purus sit amet. Urna id volutpat lacus laoreet non curabitur gravida arcu. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.'
            this.elements = this.ontologies.slice()
        },
        loadLd(){
            this.pageName = 'Linked Data' 
            this.pageDescription = 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Hac habitasse platea dictumst quisque sagittis purus sit amet. Urna id volutpat lacus laoreet non curabitur gravida arcu. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.'
            this.elements = this.ld.slice()

        },
        loadTechnologies(){
            this.pageName = 'Technologies' 
            this.pageDescription = 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Hac habitasse platea dictumst quisque sagittis purus sit amet. Urna id volutpat lacus laoreet non curabitur gravida arcu. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.'
            this.elements = this.technologies.slice()

        },
        loadServices(){
            this.pageName = 'Services' 
            this.pageDescription = 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Hac habitasse platea dictumst quisque sagittis purus sit amet. Urna id volutpat lacus laoreet non curabitur gravida arcu. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.'
            this.elements = this.services.slice()

        },
        chooseTemplate(){
            let url = window.location.href.split("/")
            let key = url[url.length - 1];
            if(key == "ontologies"){
                this.loadOntologies();
            }else if(key == "linkedData"){
                this.loadLd();
            }else if(key =="technology"){
                this.loadTechnologies();
            }else{
                this.loadServices();
            }
        },
        goTo(uri){
            console.log("Go to: " + uri)
        }
    },
    mounted(){
        this.ontologies = [
            {
                name:'Ontology 1',
                uri:'ontologyUriExample',
                description:'This is the Ontology Description'
            },
            {
                name:'Ontology 2',
                uri:'ontologyUriExample 2',
                description:'This is the Ontology Description'
            },
            {
                name:'Ontology 3',
                uri:'ontologyUriExample 3',
                description:'This is the Ontology Description'
            },
            {
                name:'Ontology 4',
                uri:'ontologyUriExample 4',
                description:'This is the Ontology Description'
            },
            {
                name:'Ontology 5',
                uri:'ontologyUriExample 5',
                description:'This is the Ontology Description'
            },
            {
                name:'Ontology 6',
                uri:'ontologyUriExample 6',
                description:'This is the Ontology Description'
            }                                                            
        ]
        this.ld = [
            {
                name:'Linked Data 1',
                uri:'ontologyUriExample',
                description:'This is the Linked Data Description'
            },
            {
                name:'Linked Data 2',
                uri:'ontologyUriExample 2',
                description:'This is the Linked Data Description'
            },
            {
                name:'Linked Data 3',
                uri:'ontologyUriExample 3',
                description:'This is the Linked Data Description'
            },
            {
                name:'Linked Data 4',
                uri:'ontologyUriExample 4',
                description:'This is the Linked Data Description'
            },
            {
                name:'Linked Data 5',
                uri:'ontologyUriExample 5',
                description:'This is the Linked Data Description'
            },
            {
                name:'Linked Data 6',
                uri:'ontologyUriExample 6',
                description:'This is the Linked Data Description'
            }                                                            
        ]   
        this.technologies = [
            {
                name:'Technology 1',
                uri:'ontologyUriExample',
                description:'This is the Technology Description'
            },
            {
                name:'Technology 2',
                uri:'ontologyUriExample 2',
                description:'This is the Technology Description'
            },
            {
                name:'Technology 3',
                uri:'ontologyUriExample 3',
                description:'This is the Technology Description'
            },
            {
                name:'Technology 4',
                uri:'ontologyUriExample 4',
                description:'This is the Technology Description'
            },
            {
                name:'Technology 5',
                uri:'ontologyUriExample 5',
                description:'This is the Technology Description'
            },
            {
                name:'Technology 6',
                uri:'ontologyUriExample 6',
                description:'This is the Technology Description'
            }                                                            
        ]    
        this.services = [
            {
                name:'Services 1',
                uri:'ontologyUriExample',
                description:'This is the Services Description'
            },
            {
                name:'Services 2',
                uri:'ontologyUriExample 2',
                description:'This is the Services Description'
            },
            {
                name:'Services 3',
                uri:'ontologyUriExample 3',
                description:'This is the Services Description'
            },
            {
                name:'Services 4',
                uri:'ontologyUriExample 4',
                description:'This is the Services Description'
            },
            {
                name:'Services 5',
                uri:'ontologyUriExample 5',
                description:'This is the Services Description'
            },
            {
                name:'Services 6',
                uri:'ontologyUriExample 6',
                description:'This is the Services Description'
            }                                                            
        ]  
                    
        this.chooseTemplate();
    }
}
</script>

<style>

</style>