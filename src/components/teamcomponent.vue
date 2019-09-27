<template>
  <div class="container fill">
      <div class="row">
        <div v-for="worker in team" :key="worker.name" class="col-sm-12 col-lg-4 mt-5">
            <b-card
                v-on:click="goToWorker(worker.id)"
                class="pointer"
                :title="worker.name"
                :sub-title="worker.role"
                :img-src="worker.image"
            >
            <hr>
            <div class="row">
                <div class="col" v-for="link in worker.links" :key="link.link">
                    <span v-if="link.icon == '' "><a :href="link.link">{{link.name}}</a></span>
                    <a v-else :href="link-link"><font-awesome-icon :icon="[link.type, link.icon]" size="lg" /></a>
                </div>
            </div>
            </b-card>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'teamcomponent',
    data(){
        return{
            team:[]
        }
    },
    methods:{
        goToWorker(id){
            console.log("Checking: " + id);
        }
    },
    mounted(){
        this.team = [
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            },
            {
                id:'10012',
                name:'Luis Pozo Gilo',
                role:'Degree Student',
                image:'https://picsum.photos/id/620/300/200',
                links:[
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
                ]

            }                                                
        ]
    }
}
</script>

<style>

</style>