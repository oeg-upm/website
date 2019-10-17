<template>
    <div class="mt-5 container">
        <h1 class="text-center">Highlighted Content</h1>
        <div class="row justify-content-md-center">
        <b-card v-for="element in elements" :key="element.name"
            :title="element.title"
            :img-src="element.image"
            img-alt="Image"
            img-top
            tag="article"
            class="col-sm-12 col-lg m-2 p-0"
        >
            <b-card-text>
                {{element.description}}
            </b-card-text>

            <a :href="element.link"><b-button href="#" variant="primary">Read More</b-button></a>
        </b-card>
        </div>
    </div>
</template>
<script>
export default {
    name:'highlightcomponent',
    data(){
        return{elements:[]}
    },
    mounted(){
        this.elements = [
            {
                title:'Project 1',
                link:'#',
                description:'Orci sagittis eu volutpat odio facilisis mauris sit amet.\n Egestas erat imperdiet sed euismod nisi porta lorem.\nEst lorem ipsum dolor sit amet. Ullamcorper a lacus v',
                image:'https://picsum.photos/id/620/300/200'
            },
                        {
                title:'Project 3',
                link:'#',
                description:'Orci sagittis eu volutpat odio facilisis mauris sit amet.\n Egestas erat imperdiet sed euismod nisi porta lorem. Est lorem ipsum dolor sit amet. Ullamcorper a lacus v',
                image:'https://picsum.photos/id/620/300/200'
            },
                        {
                title:'Project 2',
                link:'#',
                description:'Orci sagittis eu volutpat odio facilisis mauris sit amet. Egestas erat imperdiet sed euismod nisi porta lorem. Est lorem ipsum dolor sit amet. Ullamcorper a lacus v',
                image:'https://picsum.photos/id/620/300/200'
            }
        ]
    }
}
</script>