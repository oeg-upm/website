<template>
  <div>
      <navigationcomponent></navigationcomponent>
      <adminnewcomponent></adminnewcomponent>
      <footercomponent></footercomponent>
  </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import adminnewcomponent from '../components/adminNewcomponent'
import footercomponent from '../components/footerComponent'
export default {
name:'adminNew',
components:{navigationcomponent, adminnewcomponent, footercomponent}
}
</script>

<style>

</style>