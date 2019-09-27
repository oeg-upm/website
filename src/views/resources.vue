<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <resourcescomponent></resourcescomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import resourcescomponent from '../components/resourcescomponent'
import footercomponent from '../components/footerComponent'
export default {
    name:'Resources',
    components:{navigationcomponent, resourcescomponent, footercomponent}
}
</script>

<style>

</style>