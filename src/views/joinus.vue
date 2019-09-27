<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <joinuscomponent></joinuscomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import joinuscomponent from '../components/joinuscomponent'
import footercomponent from '../components/footerComponent'
export default {
name:'JoinUs',
components:{navigationcomponent, joinuscomponent, footercomponent}
}
</script>

<style>

</style>