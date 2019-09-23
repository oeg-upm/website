<template>
<div>
    <navigationcomponent></navigationcomponent>
    <carouselcomponent></carouselcomponent>
    <highlightcomponent></highlightcomponent>
    <ourTargetComponent></ourTargetComponent>
    <footercomponent></footercomponent>
</div>
</template>
<script>
import navigationcomponent from '../components/navigationComponent.vue'
import highlightcomponent from '../components/highlightComponent.vue'
import ourTargetComponent from '../components/ourTargetComponent.vue'
import footercomponent from '../components/footerComponent.vue'
import carouselcomponent from '../components/carouselComponent.vue'
export default {
    name:'home',
    components:{navigationcomponent, highlightcomponent, ourTargetComponent, footercomponent, carouselcomponent},
    data(){
        return {msg:String}
    },
    mounted(){
        this.msg = "HOME"
    }
}
</script>
