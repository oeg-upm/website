<template>
<div>
  <navigationcomponent></navigationcomponent>
  <projectcomponent></projectcomponent>
  <footercomponent></footercomponent>    
</div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import footercomponent from '../components/footerComponent'
import projectcomponent from '../components/projectcomponent'
export default {
name:'Project',
components:{navigationcomponent, footercomponent, projectcomponent}
}

</script>

<style>

</style>