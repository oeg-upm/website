<template>
  <div>
    <navigationcomponent></navigationcomponent>
    <teamcomponent></teamcomponent>
    <footercomponent></footercomponent>    
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import footercomponent from '../components/footerComponent'
import teamcomponent from '../components/teamcomponent'
export default {
name:'Team',
components:{navigationcomponent, footercomponent, teamcomponent}
}
</script>

<style>

</style>