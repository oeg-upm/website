<template>
<div>
  <navigationcomponent></navigationcomponent>
  <projectscomponent></projectscomponent>
  <footercomponent></footercomponent>    
</div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import footercomponent from '../components/footerComponent'
import projectscomponent from '../components/projectscomponent'
export default {
name:'Projects',
components:{navigationcomponent, footercomponent, projectscomponent}
}
</script>

<style>

</style>