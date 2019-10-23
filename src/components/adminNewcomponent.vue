<template>
    <div class="container fill mt-5">
        <h1>News 
        </h1>
        <b-form class="mt-5">
            <div class="mt-3">
                <label for="author">Author</label>
                <b-form-input
                    id="author"
                    v-model="author"
                    placeholder=""
                    type="text"
                ></b-form-input>             
            </div>
            <div class="mt-3">
                <label for="title">Title: </label>
                <b-form-input
                    id="title"
                    v-model="title"
                    placeholder=""
                    type="text"
                ></b-form-input>                
            </div>
            <div class="mt-3">
                <label for="headline">Headline: </label>
                <b-form-input
                    id="headline"
                    v-model="headline"
                    placeholder=""
                    type="text"
                ></b-form-input>                
            </div>
            <div class="mt-3">
                <label for="tags">Tags: </label>
                <b-form-input
                    id="tags"
                    v-model="tagString"
                    placeholder=""
                    type="text"
            ></b-form-input>
            </div>                                   
            <div class="mt-3">
                <label for="article">Article:</label>
                <b-form-textarea
                id="article"
                v-model="article"
                placeholder="Type something..."
                rows="15"
                ></b-form-textarea>                    
            </div>
            <div class="mt-3">
                <b-form-group
                    label-align
                    label-size="sm"
                    label-cols-sm="3"
                    label-align-sm="left" 
                    class="mb-0"
                    label="Do you want to include an image?"
                >
                    <b-form-checkbox v-model="includeImage" id="IncludeImage" size="lg" switch></b-form-checkbox>
                </b-form-group>
            </div>
            <div v-if="includeImage" class="mt-3">
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
            includeImage:Boolean,
            submitted:Boolean
    }
},
methods:{
    createNew(){
        let form = {
        title:this.title,
        article:this.article,
        author:this.author,
        headline:this.headline,
        tags:this.tagString, 
        includeImage:this.includeImage,
        img_path:this.img_path
        }
       NewsController.createNew(form).then((result) => {
            if(result){
                this.submitted = true;
            }
        });
    }
},
mounted(){
    this.submitted = false;
    this.includeImage = false;
    this.author = "Luis";
    this.title = "Title";
    this.headline ="Headline";
    this.tagString= "Tag1, Tag2";
    this.article = "Article";
}
}
</script>

<style>

</style>