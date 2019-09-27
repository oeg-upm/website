<template>
    <div>
        <navigationcomponent></navigationcomponent>
        <usecasecomponent></usecasecomponent>
        <footercomponent></footercomponent>
    </div>
</template>

<script>
import navigationcomponent from '../components/navigationComponent'
import usecasecomponent from '../components/usecasecomponent'
import footercomponent from '../components/footerComponent'
export default {
    name:'UseCases',
    components:{navigationcomponent, footercomponent, usecasecomponent}
}
</script>

<style>

</style>