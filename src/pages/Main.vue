<template>
<p>MAIN</p>
<router-link to="/about">to About</router-link>
<button @click="$router.push('/catalog')">Каталог</button>
</template>
<script>
export default{
    data(){
        return{

        }
    }
}
</script>
<style>
</style>