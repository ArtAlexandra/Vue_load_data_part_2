<template>
    <p>CATALOG</p>
    <button @click="$router.back()">Назад</button>
    <button @click="getPosts">Load</button>
  
<div class="catalog_container">
    <div v-for="item in posts" :key="item.id" class="catalog_post">
       <!-- <p>{{ item.id }}</p>
        <p>{{ item.title }}</p>
        <p>{{ item.price }}</p>
        <img :src="require(`@/assets/images/${item.image}`)" class="my_image"/> -->

       <Post :post="item" class="catalog_post_pos" />
    </div>
</div>
    </template>
    <script>
    
    import axios from 'axios'
    import Post from '@/components/Post.vue'
    export default{
        created(){
            this.getPosts()
        },
        components:{
            Post
        },
        data(){
            return{
                posts: []
            }
        },
        methods:{
            getPosts(){
                axios.get('https://raw.githubusercontent.com/ArtAlexandra/vue_data/main/data.json')
                .then((response)=>{
                   
                    this.posts = response.data.mydata
                   console.log(response.data.mydata)
                })
                .catch((error)=>{
                    console.log(error)
                })
            }
          
        }
    }
    </script>
    <style scoped>
    .my_image{
        width: 300px;
        height: 250px;
    }
    .catalog_post_pos{
        display: table-cell;
        text-align: center;
        vertical-align: middle;
    }
    .catalog_post{
        display: inline-block;
        vertical-align: top; 
        margin-bottom: 50px; 
        margin-left: 30px;
    }
    .catalog_container{
        width: 99%;
        margin-left: auto;
        margin-right: auto;
        display: table;
    }
    </style>