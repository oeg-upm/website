<template>
  <div class="container fill mt-5">
    <h1>Research Areas</h1>
    <div class="row">
      <div class="col-sm-12 col-lg-6 mt-3" v-for="element in elements" :key="element.uri">
        <h5 class="text-primary">{{element.name}}</h5>
        <img :src="element.img" class="img-fluid" alt="">
        <p class="mt-2">{{element.description}}</p>
        <b-button variant="danger" v-on:click="goToArea(element.uri)">Read More</b-button>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
    name:'researchareascomponent', 
    data(){
      return{
        elements:[]
      }
    },
    methods:{
      goToArea(uri){
        console.log("Area: " + uri)
      }
    },
    mounted(){
      this.elements = [
        {
          name:'Ontological Engineering',
          img:'https://picsum.photos/id/385/600/300?grayscale',
          description:'Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus ',
          uri:'uriExample 1'
        },
        {
          name:'Ontological Engineering',
          img:'https://picsum.photos/id/385/600/300?grayscale',
          description:'Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus ',
          uri:'uriExample 2'
        },
        {
          name:'Ontological Engineering',
          img:'https://picsum.photos/id/385/600/300?grayscale',
          description:'Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus ',
          uri:'uriExample '
        },
        {
          name:'Ontological Engineering',
          img:'https://picsum.photos/id/385/600/300?grayscale',
          description:'Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus ',
          uri:'uriExample 3'
        },
        {
          name:'Ontological Engineering',
          img:'https://picsum.photos/id/385/600/300?grayscale',
          description:'Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus ',
          uri:'uriExample 4'
        },                                
        {
          name:'Ontological Engineering',
          img:'https://picsum.photos/id/385/600/300?grayscale',
          description:'Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus ',
          uri:'uriExample 5'
        }        
      ]
    }
}
</script>

<style>

</style>