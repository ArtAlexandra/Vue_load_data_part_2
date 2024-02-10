<template>

<p>Basket</p>
<h1>Корзина</h1>
    <div v-for="(item, index) in goods">
    <p >{{ item.title }} {{ item.price }} {{ item.count }}</p>
    <img :src="require(`@/assets/images/${item.src}`)" class="picture"/>
   
    </div>
</template>

<script>
export default{
    props: {
        goods:{
            type: Array,
            id:Number,
            title: String,
            price:Number,
            
            
        },
       
        
    },
    
    data() {
        return{
            
        }
    },
    
    
}
</script>
