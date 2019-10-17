<template>
    <div class="container fill mt-5">
        <h1>News 
        </h1>
        <b-form class="mt-5">
            <div class="mt-3">
                <label for="author">Author</label>
                <b-form-input
                    id="author"
                    :v-model="author"
                    placeholder="Luis Pozo"
                    type="text"
                ></b-form-input>             
            </div>
            <div class="mt-3">
                <label for="title">Title: </label>
                <b-form-input
                    id="title"
                    :v-model="title"
                    placeholder="An awesome new"
                    type="text"
                ></b-form-input>                
            </div>
            <div class="mt-3">
                <label for="headline">Headline: </label>
                <b-form-input
                    id="headline"
                    :v-model="headline"
                    placeholder="The most awesome new of the page."
                    type="text"
                ></b-form-input>                
            </div>
            <div class="mt-3">
                <label for="tags">Tags: </label>
                <b-form-input
                    id="tags"
                    :v-model="tagString"
                    placeholder="Ontology, Semantic Web, Artificial Intelligence (Split every tag with a coma)"
                    type="text"
            ></b-form-input>
            </div>                                   
            <div class="mt-3">
                <label for="article">Article:</label>
                <b-form-textarea
                id="article"
                :v-model="article"
                placeholder="Type something..."
                rows="5"
                max-rows="6"
                ></b-form-textarea>                    
            </div>
            <div class="mt-3">
                <b-form-file
                v-model="img_path"
                :state="Boolean(img_path!='' && submitted)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                ></b-form-file>
            </div>
        </b-form>
        <div class="row">
            <div class="col-sm-6">
                    <b-button class="mt-3" variant="outline-info" >Preview</b-button>
            </div>
            <div class="col-sm-6 text-right">
                    <b-button class="mt-3" variant="primary" v-on:click="createNew()">Submit</b-button>
            </div>            
        </div>
    </div>
</template>

<script>
import NewsController from '../middlewares/news.controller';
export default {
name:'adminnewcomponent',
data(){
    return{
            title:String,
            article:String,
            author:String,
            headline:String,
            img_path:String,
            tagString:String,
            tags:[],
            submitted:Boolean
    }
},
methods:{
    createNew(){
        console.log("Click Dentro")
       NewsController.createNew().then((result) => {
            console.log(result);
            if(result){
                this.submitted = true;
            }
        });
    }
},
mounted(){
    this.title= "";
    this.article = "";
    this.img_path ="";
    this.submitted = false;
}
}
</script>

<style>

</style>