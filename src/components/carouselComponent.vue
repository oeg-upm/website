<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12 col-lg-8">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide v-for="element in elements" :key="element.id"
            :caption="element.caption"
            :img-src="element.img"
          ></b-carousel-slide>
        </b-carousel>
        </div>
        <div class="col-sm-12 col-lg-4">
          <h1>AQUI VA EL TIMELINE DE TWITTER</h1>
        </div>
        <!-- <div class="col-4 h-100 " style="max-height: 100px">
        <Timeline class="overflow-auto" id="oeg_upm" sourceType="profile" :options="{  }"/>
        </div> -->
      </div>
</div>
</template>

<script>
//import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
    name:'carouselcomponent',
//    components:{Timeline},
    data(){
        return {
            elements:[]
        }
    },
    mounted(){
      this.elements = [
        {
          caption:'First Slide',
          img:'https://picsum.photos/1024/480/?image=22',
          id:'0',
          link:'#'
        },
        {
          caption:'Second Slide',
          img:'https://picsum.photos/1024/480/?image=13',
          id:'1',
          link:'#'
        },
        {
          caption:'Third Slide',
          img:'https://picsum.photos/1024/480/?image=12',
          id:'2',
          link:'#'
        },                
        
      ]
    }
}
</script>