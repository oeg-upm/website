<template>
  <div>
    <navigationcomponent></navigationcomponent>
    <archivecomponent></archivecomponent>
    <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent.vue'
import footercomponent from '../components/footerComponent.vue'
import archivecomponent from '../components/archivecomponent.vue'
export default {
    name:'archive',
    components:{navigationcomponent, footercomponent, archivecomponent}
}
</script>

<style>

</style>