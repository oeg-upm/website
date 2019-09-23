<template>
<div>
    <navigationcomponent></navigationcomponent>
    <newscomponent></newscomponent>
    <footercomponent></footercomponent>
</div>
</template>
<script>
import navigationcomponent from '../components/navigationComponent.vue'
import newscomponent from '../components/newsComponent.vue'
import footercomponent from '../components/footerComponent.vue'
export default {
    name:'news',
    components:{navigationcomponent, newscomponent, footercomponent}
}
</script>