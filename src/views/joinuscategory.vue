<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <joinuscategorycomponent></joinuscategorycomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import joinuscategorycomponent from '../components/joinuscategorycomponent'
import footercomponent from '../components/footerComponent'
export default {
    name:'JoinUsCategory',
    components:{navigationcomponent, joinuscategorycomponent, footercomponent}
}
</script>

<style>

</style>