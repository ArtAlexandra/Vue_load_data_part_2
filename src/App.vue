<template>
  <Navbar/>
  <router-view></router-view>
  </template>
  <script>
  import Navbar from "@/components/Navbar.vue"
  export default{
    components:{
      Navbar
    },
    data(){
      return{
  
      }
    }
  }
  </script>
  <style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  </style>