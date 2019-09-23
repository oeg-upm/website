<template>
  <div class="container fill">

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
    mounted(){
        this.team = [
            {
                name:'Luis Pozo',
                role:'Degree Student',
                links:[]

            }
        ]
    }
}
</script>

<style>

</style>