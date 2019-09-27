<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <areacomponent></areacomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import areacomponent from '../components/areacomponent'
import footercomponent from '../components/footerComponent'
export default {
name:'Area',
components:{navigationcomponent, footercomponent, areacomponent}
}
</script>

<style>

</style>