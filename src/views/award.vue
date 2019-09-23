<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <awardcomponent></awardcomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent.vue'
import footercomponent from '../components/footerComponent.vue'
import awardcomponent from '../components/awardcomponent.vue'
export default {
    name:'award',
    components:{navigationcomponent, footercomponent, awardcomponent}
}
</script>

<style>

</style>