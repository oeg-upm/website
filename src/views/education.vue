<template>
    <div>
        <navigationcomponent></navigationcomponent>
        <educationcomponent></educationcomponent>
        <footercomponent></footercomponent>
    </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import footercomponent from '../components/footerComponent'
import educationcomponent from '../components/educationcomponent'
export default {
    name:'Education',
    components:{navigationcomponent, footercomponent, educationcomponent}
}
</script>

<style>

</style>