<template>
<div class="container fill mt-5">
    <div class="">
        <b-button v-for="tag in tags" :key="tag" pill variant="info" class="mr-2">#{{tag}}</b-button>
    </div>
    <div class="row mt-3"></div>
    <h1>{{title}}</h1>
    <p class="text-justify"><b>{{summary}}</b></p>
    <div class="row" v-if="img != ''">
        <div class="col-sm-12 col-lg-4">
            <img :src="img" class="img-fluid" alt="">
        </div>
        <div class="col-sm-12 col-lg-8 text-justify">
                <p>{{article}}</p>
        </div>
    </div>
    <div class="row" v-else>
        <div class="col-sm-12 col-lg-12 text-justify">
                <p>{{article}}</p>
        </div>
    </div>
    <hr>
    <p class="text-right">{{date}}</p>
</div>
</template>

<script>
export default {
    name:'singlenewcomponent',
    data(){
        return{
            title:String,
            summary:String,
            date:String,
            img:String,
            article:String,
            tags:[]
        }
    },
    mounted(){
        this.title = "Lorem Ipsum"            
        this.summary = " le Technology education to people everywhere, in order to help them achieve their dreams and change the w le Technology education to people everywhere, in order to help them achieve their dreams and change the w "
        this.date = "March 4th 2019"
        this.img = "https://picsum.photos/500/300"
        this.article = "Our mission is to bring affordable Technology education to people everywhere, in order to help them achieve their dreams and change the world. to bring affordable Technology education to people everywhere, in order to help them achieve their dreams and change the world. Our mission is to bring affordable Technology education to people everywhere, in order to help them achieve their dreams and change the world. to bring affordable Technology education to people everywhere, in order to help them achieve their dreams and change the world. rdable Technology education to people everywhere, in order to help them achieve their dreams and change the world. tod. tod. tod. tod. tod. tod.le Technology education to people everywhere, in order to help them achieve their dreams and change the w le Technology education to people everywhere, in order to help them achieve their dreams and change the w le Technology education to people everywhere, in order to help them achieve their dreams and change the w le Technology education to people everywhere, in order to help them achieve their dreams and change the w le Technology education to people everywhere, in order to help them achieve their dreams and change the w "
        this.tags = ['Technology', 'Ontology', 'Data']
    }
}
</script>