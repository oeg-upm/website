<template>
  <div class="container fill">
      <h2 class="mt-5">{{name}}</h2>
    <div class="row mt-5 ">
      <div class="col-sm-12 col-md-8">
        <img :src="image" alt="" rounded class="img-fluid">
        <b-card
        class="mt-3"
        header-bg-variant="primary"
        header="DESCRIPTION"
        header-text-variant="light"
        >
        <b-card-body>
            <p>{{description}}</p>
        </b-card-body>
        </b-card>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="">
          <b-card
            header-bg-variant="primary"
            header="RESEARCHERS"
            header-text-variant="light"
          >
          <b-list-group flush>
            <b-list-group-item>
                <h6><b>Main Researchers</b></h6>
                <h6><span v-for="(item, index) in mResearchers" :key="item.uri">{{item.name}}<span v-if="mResearchers.length > 1 && index < mResearchers.length - 1">, </span> </span></h6>
            </b-list-group-item>
            <b-list-group-item>
                <h6><b>Researchers</b></h6>
                <h6><span v-for="(item, index) in researchers" :key="item.uri">{{item.name}}<span v-if="researchers.length > 1 && index < researchers.length - 1">, </span>  </span></h6>
            </b-list-group-item>
            <b-list-group-item>
                <h6><b>PhD Students</b></h6>
                <h6><span v-for="(item, index) in students" :key="item.uri">{{item.name}}<span v-if="students.length > 1 && index < students.length - 1">, </span>  </span></h6>
            </b-list-group-item>            
          </b-list-group>
          </b-card>
        </div>
        <div class="mt-3">
          <b-card
            header-bg-variant="primary"
            header="PROJECTS"
            header-text-variant="light"        
          >
          <b-list-group flush>
            <b-list-group-item v-for="item in projects" :key="item.name"><b-link v-on:click="goToProject(item.uri)" class=""><b>{{item.name}}</b></b-link></b-list-group-item>
          </b-list-group>
          <b-button block class="mt-3" variant="info">View All</b-button>          
          </b-card>
        </div>
        <div class="mt-3">
          <b-card
            header-bg-variant="primary"
            header="RESULTS"
            header-text-variant="light"        
          >
          <b-list-group flush>
            <b-list-group-item v-for="item in results" :key="item.name"><b-link v-on:click="goToResult(item.uri)" class=""><b>{{item.name}}</b></b-link></b-list-group-item>
          </b-list-group>
          <b-button block class="mt-3" variant="info">View All</b-button>       
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'areacomponent', 
    data(){
        return{
            image:String,
            name:String,
            description:String,
            researchers:[],
            mResearchers:[],
            students:[],
            projects:[],
            results:[]
        }
    }, 
    methods:{
        loadValues(){
            this.name = "Ontological Engineering";
            this.description = "Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus quis. Dolor sit amet consectetur adipiscing elit. In mollis nunc sed id semper risus in. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Tempor id eu nisl nunc mi. Id velit ut tortor pretium viverra suspendisse. Vitae nunc sed velit dignissim sodales ut. Purus faucibus ornare suspendisse sed nisi lacus. Ante in nibh mauris cursus mattis molestie. Sit amet porttitor eget dolor morbi non arcu risus quis. Vitae justo eget magna fermentum iaculis eu non."
            this.researchers = [
                {
                    name:'Mari Carmen Suárez-Figueroa',
                    uri:'uriexample1'
                }
            ],
            this.students = [
                {
                    name:'Maria Poveda',
                    uri:'uriexample2'
                }, 
                {
                    name:'Luis Pozo', 
                    uri:'uriexample4'
                }
            ]
            this.mResearchers = [
                {
                    name:'Asuncion Gomez-Perez',
                    uri:'uriExample3'
                }
            ]
            this.image = "https://picsum.photos/id/385/800/500?grayscale"
            this.projects = [
                {
                name:'STARS4ALL',
                uri:'https://w3.org/oeg-upm/projects/example5'
                },
                {
                name:'Mobile Age',
                uri:'https://w3.org/oeg-upm/projects/example6'
                },
                {
                name:'Clarity',
                uri:'https://w3.org/oeg-upm/projects/example7'
                },
                {
                name:'TransformingTransport',
                uri:'https://w3.org/oeg-upm/projects/example8'
                }
            ]
            this.results = [
                {
                name:'Result Example',
                uri:'https://w3.org/oeg-upm/projects/example9'
                },
                {
                name:'Result Example 2',
                uri:'https://w3.org/oeg-upm/projects/example10'
                }
            ]      
        },
      goToProject(uri){
        console.log("Project: " + uri);
      },
      goToResult(uri){
        console.log("Result: " + uri)
      }        
    },
    mounted(){
        this.loadValues();
    }
}
</script>

<style>

</style>