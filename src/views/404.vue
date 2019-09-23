<template>
    <h1>{{msg}}</h1>
</template>
<script>
export default {
    name:'error',
    data(){
        return{
            msg:String
            }
    },
    mounted(){
        this.msg="404 Page not Found"
    }
}
</script>