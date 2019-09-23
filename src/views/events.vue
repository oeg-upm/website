<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <eventscomponent></eventscomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import footercomponent from '../components/footerComponent'
import eventscomponent from '../components/eventscomponent'
export default {
    name:'Events',
    components:{navigationcomponent, footercomponent, eventscomponent}
}
</script>

<style>

</style>