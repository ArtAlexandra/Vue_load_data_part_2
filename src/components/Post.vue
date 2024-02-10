<template>
<div class="post">
    <div class="post_container">
        <div class="post_head">
            <p class="post_title">{{ post.title }}</p>
            <p class="post_price">{{ post.price }}</p>
        </div>
        <div class="post_image_pos">
            <img :src="require(`@/assets/images/${post.image}`)" class="my_image"/>
        </div>
        <div class="btn_position">
            <button class="post_btn">Добавить в корзину</button>
        </div>
    </div>
</div>
</template>
<script>
export default{
    props:{
        post:{
            type: Object,
            required:true
        }
    }
}
</script>
<style scoped>
.post{
    width: 350px;
    height: 500px;
    background-color: rgb(219, 237, 252);
    border-radius: 15px;
}
.post_container{
    width: 90%;
    height: 90%;
    margin-left: 4%;
    margin-right: 5%;
    display: inline-block;
    position: relative;
}
.post_head{
   height: 120px;
}
.my_image{
    width: 300px;
    height: 250px;
    transition: 0.6s ease-in-out;
}
.my_image:hover{
   transform: scale(1.1);
}
.post_btn{
    width: 120px;
    height: 40px;
    background-color: rgb(107, 246, 107);
    box-shadow: 3px 3px 3px  rgb(142, 145, 142);
    border:none;
}
.btn_position{
   position:absolute;
    bottom: 0;
    right: 0;
}
.post_btn:hover{
    background-color: rgb(99, 224, 99);
}

.post_price{
    font-weight: bold;
    cursor: pointer;
}
.post_title{
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
}
.post_title:hover{
    color:rgb(113, 10, 129);
}
.post_image_pos{
    justify-content: center;
    display: flex;
}

</style>