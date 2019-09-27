<template>
  <div class="mt-5 container fill">
      <h1>{{sectionName}}</h1>
      <p>{{sectionDescription}}</p>
      <div class="mt-5" v-for="element in elements" :key="element.name">
        <b-button v-b-toggle="element.name" block variant="primary" class="mt-5 p-3 text-left  dropdown-toggle">{{element.name}}</b-button>
        <b-collapse visible :id="element.name" class="mt-2">
            <b-list-group>
                <b-list-group-item v-for="mod in element.modules" :key="mod.uri">
                    <div class="row">
                        <h5 class="col-sm-6 col-lg-6">{{mod.name}}</h5>
                        <h6 class="col-sm-6 col-lg-6 text-right">Duration: {{mod.duration}} hours</h6>
                    </div>
                    <p class="mt-3 text-muted">{{mod.description}}</p>
                </b-list-group-item>
                <div  class="text-right mt-3"><b-button variant="info" v-on:click="takeCourse(element.uri)">Take Course</b-button></div>
            </b-list-group>
        </b-collapse>
      </div>
  </div>
</template>

<script>
export default {
    name:'educationcomponent',
    data(){
        return{
            sectionDescription:String,
            sectionName:String,
            elements:[],
            moocs:[],
            official:[],
            profissional:[]
        }
    },
    methods:{
        loadMoocs(){
            console.log("Loading MOOC'S")
            this.sectionName = "MOOC'S"
            this.sectionDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. "
            this.elements = this.moocs.slice();
        },
        loadOfficial(){
            console.log("Loading oficial")
            this.sectionName = "Official Courses"
            this.sectionDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. "
            this.elements = this.official.slice();
        },
        loadProfissional(){
            console.log("Loading Profissional")
            this.sectionName = "Profissional Courses"
            this.sectionDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. "
            this.elements = this.profissional.slice();            
        },
        takeCourse(uri){
            console.log("Taking the course: " + uri)
        }
    },
    mounted(){
        let url = window.location.href.split("/");
        this.official = [
            {
                name:'Semantics and data',
                uri:'uriExample1',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,

                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,

                    }
                ]
            },
            {
                name:'Semantics and data 2',
                uri:'uriExample2',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    }
                ]
            },
            {
                name:'Semantics and data 3',
                uri:'uriExample 3',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    }
                ]
            }            
        ]
        this.profissional = [
            {
                name:'Semantics and data',
                uri:'uriExample1',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,

                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,

                    }
                ]
            },
            {
                name:'Semantics and data 2',
                uri:'uriExample2',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    }
                ]
            },
            {
                name:'Semantics and data 3',
                uri:'uriExample 3',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    }
                ]
            }            
        ]
        this.moocs = [
            {
                name:'Semantics and data',
                uri:'uriExample1',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,

                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,

                    }
                ]
            },
            {
                name:'Semantics and data 2',
                uri:'uriExample2',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    }
                ]
            },
            {
                name:'Semantics and data 3',
                uri:'uriExample 3',
                modules:[
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    },
                    {
                        name:'Name of the module',
                        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum.',
                        duration:6,
                    }
                ]
            }            
        ]                
        console.log("URL: " + window.location.href)
        if(url[url.length -1] == "oficial"){
            console.log(url[url.length -1])
            this.loadOfficial();
        }else if(url[url.length -1] == "mooc"){
            this.loadMoocs();
            console.log(url[url.length -1])
        }else{
            this.loadProfissional();
            console.log(url[url.length -1])

        }
    }
}
</script>

<style>

</style>