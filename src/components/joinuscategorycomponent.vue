<template>
  <div class="fill container mt-5">
      <h1>{{categoryName}}</h1>
    <div v-for="element in elements" :key="element.name">
        <b-button v-b-toggle="element.name" block variant="primary" class="mt-5 p-3 text-left  dropdown-toggle">{{element.name}}</b-button>
        <b-collapse visible :id="element.name" class="mt-2">
            <b-list-group class="text-muted">
                <b-list-group-item>
                    <h6 class="text-muted"><b>DEADLINE: {{element.deadline}}</b></h6>
                    <p class="text-muted mt-3">{{element.description}}</p>
                </b-list-group-item>
                <b-list-group-item>
                    <h6 class=""><b>Monthly Gross</b></h6>
                    <p class="mt-3">{{element.mGross}}€</p>
                </b-list-group-item>
                <b-list-group-item>
                    <h6><b>Task to be developed</b></h6>
                    <ul>
                        <li v-for="task in element.tasks" :key="task">{{task}}</li>
                    </ul>
                </b-list-group-item>
            </b-list-group>
        </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
    name:'joinuscategorycomponent',
    data(){
        return{
            elements:[],
            job:[],
            students:[],
            postdoc:[],
            categoryName:String
        }
    },
    methods:{
        loadJob(){
            console.log("Loading Job")
            this.categoryName ="Job Opportunities"
            this.elements = this.job.slice()
        },
        loadStudents(){
            console.log("Loading Students")
            this.categoryName ="Students Opportunities"
            this.elements = this.students.slice()
        },
        loadPostDoc(){
            console.log("Loading PostDoc")
            this.categoryName ="PostDoc Opportunities"
            this.elements = this.postdoc.slice()
        }
    },
    mounted(){
        this.job = [
            {
                name:'Grant for generation of RDB2RDF mappings',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            },
            {
                name:'Grant for generation of RDB2RDF mappings 2',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            },
            {
                name:'Grant for generation of RDB2RDF mappings 3',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            }                        
        ]
        this.students = [
            {
                name:'Grant for generation of RDB2RDF mappings',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            },
            {
                name:'Grant for generation of RDB2RDF mappings 2',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            },
            {
                name:'Grant for generation of RDB2RDF mappings 3',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            }                        
        ]
        this.postdoc = [
            {
                name:'Grant for generation of RDB2RDF mappings',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            },
            {
                name:'Grant for generation of RDB2RDF mappings 2',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            },
            {
                name:'Grant for generation of RDB2RDF mappings 3',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Fames ac turpis egestas sed tempus urna et. Augue neque gravida in fermentum et sollicitudin. Neque volutpat ac tincidunt vitae semper quis. Sed cras ornare arcu dui vivamus arcu felis bibendum. ',
                deadline:'12-3-2020',
                mGross:600,
                duration:'4 months',
                tasks:[
                    'Task Example 1',
                    'Task Example 2',
                    'Task Example 3',
                    'Task Example 4',

                ]
            }                        
        ]            

        this.loadStudents()
    }
}
</script>

<style>

</style>