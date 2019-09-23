<template>
    <div>
        <navigationcomponent></navigationcomponent>
        <historycomponent></historycomponent>
        <footercomponent></footercomponent>
    </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import historycomponent from '../components/historycomponent'
import footercomponent from '../components/footerComponent'
export default {
name:'History',
components:{navigationcomponent, historycomponent, footercomponent}
}
</script>

<style>

</style>