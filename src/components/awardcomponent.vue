<template>
  <div class="container fill">
      <div class="mt-5">
          <b-button v-for="tag in tags" :key="tag" pill variant="info" class="mr-2">#{{tag}}</b-button>
      </div>
      <div class="row mt-3" v-if="img != ''">
          <div class="col-sm-12 col-lg-4">
              <img :src="img" alt="" class="img-fluid">
          </div>
          <div class="col-sm-12 col-lg-8">
            <h2 class="">{{title}} </h2>
            <h5 class="mt-3">Winner: {{winner}}</h5>
          </div>
      </div>
      <div v-else class="mt-5">
        <h2 class="">{{title}}</h2>
        <h5 class="mt-3">Winner: {{winner}}</h5>
      </div>

      <p class="mt-5 text-justify">{{description}}</p>
      <hr>
      <p class="text-right">{{date}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title:String,
            description:String, 
            winner:String,
            date:String,
            img:String,
            tags:[]
        }
    },
    mounted(){
        this.title = 'Award Example';
        this.description = 'Asunción Gómez-Pérez has been awarded with Ada Byron award to technologist woman 2015 awarded by the Faculty of Engineering at Deusto University. The award seeks to highlight the work of professionals in the technology sector that quietly and increasingly are providing significant progress in many areas. The name of the award is a tribute to Ada Byron (Ada Lovelace), one of the most important in the history of engineering, recognized as the first computer programmer women. The aim is to give visibility to real women (often unnoticed by the media) to serve as models and encouragement for girls and young people today. '
        this.winner = 'Asunción Gómez-Pérez'
        this.date = '12-03-2018'
        this.img = 'https://picsum.photos/300/200';
        this.tags = ['Technology', 'Ontology', 'Data']
    }
}
</script>

<style>

</style>