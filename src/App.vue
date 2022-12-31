<template>
    <router-view />
</template>

<script>
    export default {
        name: 'App',
        components: {
            //Login
        },
        mounted() {
            this.$router.push({ name: 'Login'})
        },
    }
</script>

<style>
#app {
    font-family: Arial, Helvetica, sans-serif, PingFangSC-Light, helvetica, 'Heiti SC';  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #165DFF
}
</style>