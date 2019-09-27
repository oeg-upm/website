<template>
    <div>
          <navigationcomponent></navigationcomponent>
          <researchareascomponent></researchareascomponent>
          <footercomponent></footercomponent>
    </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import researchareascomponent from '../components/researchareascomponent'
import footercomponent from '../components/footerComponent'
export default {
name:'ResearchAreas',
components:{navigationcomponent, footercomponent, researchareascomponent}
}
</script>

<style>

</style>