<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <workercomponent></workercomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import footercomponent from '../components/footerComponent'
import workercomponent from '../components/workercomponent'
export default {
    name:'Worker',
    components:{navigationcomponent, footercomponent, workercomponent}
}
</script>

<style>

</style>