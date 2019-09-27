<template>
    <div class="mt-5 fill container">
        <h2>Join Us</h2>
        <h4 class="mt-3">Why join UPM@OEG</h4>
        <p class="mt-3">{{why}}</p>
        <div class="row mt-5">
            <div class="col-sm-12 col-lg-4 pointer" v-for="category in categories" :key="category.uri" v-on:click="category.uri">
                <h5><b>{{category.name}}</b></h5>
                <b-card
                class="mt-3"
                    :img-src="category.img"
                    img-top
                >
                    <b-card-text>{{category.description}}</b-card-text>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'joinuscomponent',
    data(){
        return{
            why:String, 
            categories:[]
        }
    },
    methods:{
        
    },
    mounted(){
        this.why = "Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus. Felis imperdiet proin fermentum leo vel orci. Morbi non arcu risus quis. Dolor sit amet consectetur adipiscing elit. In mollis nunc sed id semper risus in. "
        this.categories = [
            {
                name:'Job Opportunities',
                description:' Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus.',
                img:'https://picsum.photos/200/100/',
                uri:'uriExampleJobOp'
            },
            {
                name:'Students',
                description:' Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus.',
                img:'https://picsum.photos/200/100/',
                uri:'uriExampleStudents'
            },
            {
                name:'PostDocs',
                description:' Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nullam ac tortor vitae purus.',
                img:'https://picsum.photos/200/100/',
                uri:'uriExamplePostDoc'
            }                        
        ]
    }
}
</script>

<style>

</style>