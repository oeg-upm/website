<template>
  <div class="container fill">
      <h1 class="mt-5">Awards</h1>
      <div v-for="element in elements" :key="element.year">
        <b-button v-b-toggle="element.year" block variant="primary" class="mt-5 p-3 text-left  dropdown-toggle">{{element.year}}</b-button>
        <b-collapse visible :id="element.year" class="mt-2">
            <b-list-group>
                <b-list-group-item v-for="award in element.awards" :key="award.name">
                    <b-link><span class="text-dark">{{award.name}}</span></b-link>
                </b-list-group-item>
            </b-list-group>
        </b-collapse>
      </div>
  </div>
</template>

<script>
export default {
name:'awardcomponent',
data(){
    return {
        elements:[]

    }
},
mounted(){
    this.elements = [
        {
            year:'2019',
            awards:[
                {
                    name:'example',
                    id:'0'
                },
                {
                    name:'award',
                    id:'1'
                }                
            ]
        },
                {
            year:'2018',
            awards:[
                {
                    name:'AAAA',
                    id:'2'
                },
                {
                    name:'BBBB',
                    id:'3'
                }                
            ]
        },
                {
            year:'2017',
            awards:[
                {
                    name:'CCCC',
                    id:'4'
                },
                {
                    name:'DDDD',
                    id:'4'
                },
                {
                    name:'EEEE',
                    id:'5'
                }                        
            ]
        }



    ]
}
}
</script>

<style>

</style>