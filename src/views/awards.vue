<template>
<div>
    <navigationcomponent></navigationcomponent>
    <awardscomponent></awardscomponent>
    <footercomponent></footercomponent>
</div>
</template>
<script>
import navigationcomponent from '../components/navigationComponent.vue'
import footercomponent from '../components/footerComponent.vue'
import awardscomponent from '../components/awardsComponent'
export default {
    name:'awards',
    components:{navigationcomponent, footercomponent, awardscomponent}
}
</script>