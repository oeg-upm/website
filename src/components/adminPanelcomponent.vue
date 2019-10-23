<template>
  <div class="container fill mt-5">
      <h1 class="underlined">Administration Panel</h1>
      <div class="mt-5 row">
        <b-button variant="outline-primary"  :href="template.link" class="m-1 col-sm-4" v-for="template in formTemplates" :key="template.name">{{template.name}}</b-button>
      </div>
  </div>
</template>

<script>
export default {
    name:'adminPanelcomponent',
    data(){
        return{
            formTemplates:[]
        }
    },
    methods:{
        loadTemplates(){
            this.formTemplates = [
                {
                    name:'News',
                    link:'/admin/news'
                },
                {
                    name:'Awards',
                    link:'/admin/awards'
                },
                {
                    name:'Events',
                    link:'/admin/events'
                },
                {
                    name:'Team',
                    link:'/admin/team'
                },
                {
                    name:'Courses',
                    link:'/admin/courses'
                },
                {
                    name:'Resources',
                    link:'/admin/resources'
                }
            ]
        }
    },
    mounted(){
        this.loadTemplates();
    }
}
</script>

<style>

</style>