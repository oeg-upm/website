<template>
  <div class="container fill">
    <div class="row mt-5">
      <b-button class="col-sm-3 col-lg-1 ml-3"  v-on:click="showAll()" variant="outline-primary">ALL</b-button>
      <b-button class="col-sm-3 col-lg-1 ml-3" v-on:click="showNews()" variant="outline-primary">NEWS</b-button>
      <b-button class="col-sm-3 col-lg-1 ml-3" v-on:click="showEvents()" variant="outline-primary">EVENTS</b-button>

    </div>
    <div v-for="(year, index) in years" :key="year">
      <b-button v-b-toggle="year" block variant="primary" class="mt-5 p-3 text-left  dropdown-toggle">{{year}}</b-button>
      <b-collapse visible :id="year" class="mt-3">
          <b-table hover responsive striped :items="items[index]"  thead-class="hidden_header"></b-table>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
    name:'archivecomponent',
    data(){
      return {
        elements:[],
        items:[],
        years:[],
        archives:[],
        events:[],
        news:[]
      }
    },
    methods:{
      filter(){
        for(let year in this.archives){
          this.years.push(this.archives[year]["year"])
          this.items.push([])
          this.news.push([])
          this.events.push([])
          this.elements.push([])
          for(let archive in this.archives[year]["archives"] ){
            console.log(this.archives[year]["archives"])
            this.elements[year].push({date:this.archives[year]["archives"][archive]["date"], title:this.archives[year]["archives"][archive]["title"], description:this.archives[year]["archives"][archive]["description"]})            
            if(this.archives[year]["archives"][archive]["type"] == 'new'){
              this.news[year].push({date:this.archives[year]["archives"][archive]["date"], title:this.archives[year]["archives"][archive]["title"], description:this.archives[year]["archives"][archive]["description"]})
            }else{
              this.events[year].push({date:this.archives[year]["archives"][archive]["date"], title:this.archives[year]["archives"][archive]["title"], description:this.archives[year]["archives"][archive]["description"]})
            }
          }
        }
      },
      select(option){
        if(option == 'new'){
        }else if(option == 'event'){
        }else{
          console.log(this.items)
        }
      },
      showNews(){
        this.items = this.news.slice();
      },
      showEvents(){
        this.items = this.events.slice();
      },
      showAll(){
        this.items = this.elements.slice();
      }
    },
    mounted(){
      this.archives = [
        {
          year:'2019',
          archives:[
            {
              title:'new Example',
              description:'new Description',
              date:'12-4-2012',
              type:'new',
              id:'0'
            },
                        {
              title:'event Example',
              description:'event Description',
              date:'12-4-2012',
              type:'event',
              id:'1'
            },
            {
              title:'new Example',
              description:'new Description',
              date:'12-4-2012',
              type:'new',
              id:'2'
            }
          ]
        },
        {
          year:'2018',
          archives:[
            {
              title:'event Example',
              description:'event Description',
              date:'12-4-2012',
              type:'event',
              id:'3'
            },
                        {
              title:'event Example',
              description:'event Description',
              date:'12-4-2012',
              type:'event',
              id:'4'
            },
            {
              title:'new Example',
              description:'new Description',
              date:'12-4-2012',
              type:'new',
              id:'5'
            }
          ]
        },
        {
          year:'2017',
          archives:[
            {
              title:'event Example',
              description:'event Description',
              date:'12-4-2012',
              type:'event',
              id:'6'
            },
            {
              title:'new Example',
              description:'new Description',
              date:'12-4-2012',
              type:'new',
              id:'7'
            },
            {
              title:'event Example',
              description:'event Description',
              date:'12-4-2012',
              type:'event',
              id:'8'
            }
          ]
        }
      ]
      this.filter()
      this.showAll();
    }
}
</script>

<style>
 .hidden_header{
   display: none;
 }
</style>