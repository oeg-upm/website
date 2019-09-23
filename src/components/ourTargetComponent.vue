<template>
    <div class=" mt-5 container">
        <h1 class="text-center">Our Target</h1>
        <div class="row justify-content-md-center">
        <b-card v-for="element in elements" :key="element.name"
            
            tag="article"
            border-variant="primary"
            :header="element.title"
            header-bg-variant="primary"
            header-text-variant="white"
            class="col-sm-12 col-lg m-2 p-0"
        >
            <b-card-text>
                {{element.description}}
            </b-card-text>
            <b-list-group flush>
                <b-list-group-item  v-for="link in element.links" :key="link.name" ><b-link :href="link.link">{{link.name}}</b-link></b-list-group-item>
            </b-list-group>
        </b-card>
        </div>
    </div>
</template> 
<script>
export default {
    name:'ourtargetcomponent',
    data(){
        return {elements:[]}
    },
    mounted(){
        this.elements = [
            {
                title:'Student',
                description:'Orci sagittis eu volutpat odio facilisis mauris sit amet. Egestas erat imperdiet sed euismod nisi porta lorem. Est lorem ipsum dolor sit amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod.',
                links:[
                    {name:'MOOC\'S',link:'#'},
                    {name:'Profissional Training',link:'#'},
                    
                ]
            },
                        {
                title:'Companies',
                description:'Orci sagittis eu volutpat odio facilisis mauris sit amet. Egestas erat imperdiet sed euismod nisi porta lorem. Est lorem ipsum dolor sit amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod.',
                links:[
                    {name:'Collaborations',link:'#'},
                    {name:'Useful Links',link:'#'},                    
                ]
            },
                        {
                title:'Researchers',
                description:'Orci sagittis eu volutpat odio facilisis mauris sit amet. Egestas erat imperdiet sed euismod nisi porta lorem. Est lorem ipsum dolor sit amet. Ullamcorper a lacus vestibulum sed arcu non odio euismod.',
                links:[
                    {name:'Research Areas',link:'#'},
                    {name:'Projects',link:'#'}                    
                ]
            }

        ]
    }
}
</script>