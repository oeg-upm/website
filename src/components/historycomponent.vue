<template>
  <div class="container fill">
    <h1 class="mt-5">History</h1>
    <p class="mt-5">{{history}}</p>
    <div class="row mt-5">
        <div class="col-sm-12 col-lg-4">
            <h4>Directors:</h4>
            <b-list-group flush>
                <b-list-group-item v-for="director in directors" :key="director">{{director}}</b-list-group-item>
            </b-list-group>
        </div>
        <div class="col-sm-12 col-lg-4">
            <h4>Researchers: +{{researchers}}</h4>
        </div>
        <div class="col-sm-12 col-lg-4">
            <h4>Collaborators: +{{collaborators}}</h4>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'historycomponent',
    data(){
        return{
            history:String,
            directors:[],
            researchers:Number,
            collaborators:Number,
            data:{}
        }
    },
    methods:{
        filter(){
            this.history = this.data["history"];
            this.directors = this.data["directors"]
            this.researchers = this.data["researchers"]
            this.collaborators = this.data["collaborators"]
        }
    },
    mounted(){
        this.data = {
            history:"Qui at commune signiferumque. In mel labores moderatius, tantas saperet facilisi quo ut. Vero wisi civibus ea vim. An tota nostro sit, mel ei utinam ancillae, mutat dolores mea et. Homero iriure imperdiet eu mel. Ei enim viderer pri. Sed in eros nobis, te cum invidunt probatus. Mel an aeque efficiendi. Te populo ocurreret reprehendunt usu, sit at purto iudicabit.",
            directors:['Asunción Gómez Pérez', 'Oscar Corcho'],
            researchers:30,
            collaborators:150
        }
        this.filter();
    }
}
</script>

<style>

</style>