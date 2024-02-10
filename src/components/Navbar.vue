<template>
<div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__items">
        <div @click="$router.push('/catalog')" class="navbar__items_item">Каталог</div>
        <div @click="$router.push('/catalog')" class="navbar__items_item">Каталог1</div>
        <div @click="$router.push('/catalog')" class="navbar__items_item">Каталог2</div>
    </div>
    <div class="navbar__btns">
        <button @click="$router.push('/')">Главная</button>
        <button @click="$router.push('/about')">О нас</button>
    </div>
</div>
</template>
<script>
export default{

}
</script>
<style scoped>
.navbar{
    height: 50px;
    background-color: rgb(237, 157, 204);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
    cursor: pointer;
}
.navbar__btns{
    margin-left: auto;
}
.navbar__items{
    display: flex;
    align-items: center;
    
}
.navbar__items_item{
    padding-left: 30px;
}
</style>