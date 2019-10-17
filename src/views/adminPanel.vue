<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <adminPanelcomponent></adminPanelcomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import adminPanelcomponent from '../components/adminPanelcomponent'
import footercomponent from '../components/footerComponent'
export default {
    name:'AdminPanel',
    components:{navigationcomponent, adminPanelcomponent, footercomponent}
}
</script>

<style>

</style>