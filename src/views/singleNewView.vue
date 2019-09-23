<template>
    <div>
        <navigationcomponent></navigationcomponent>
        <singlenewcomponent></singlenewcomponent>
        <footercomponent></footercomponent>
    </div>
</template>
<script>
import navigationcomponent from '../components/navigationComponent.vue'
import footercomponent from '../components/footerComponent.vue'
import singlenewcomponent from '../components/singleNewComponent.vue'

export default {
    name:'siglenewview',
    components:{navigationcomponent, footercomponent, singlenewcomponent}
}
</script>