<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about"><van-icon name="wap-nav" /></router-link>
      <router-link to="/">发现</router-link>
      <router-link to="/comt">云村</router-link>
      <router-link to="/cant">视频</router-link>
      <router-link to="/bet">发现</router-link>
      <router-link to="/ios"><van-icon name="search" /></router-link>
    </div>
    <router-view/>
  </div>
</template>
<style>
   #app{
     width: 100%;
     height: 100%;
     background: rgb(175, 117, 117);
   }
   #nav{
     width: 100%;
     display: flex;
     padding:1.5rem 0;
     box-sizing: border-box;
   }
  #nav>a{
    text-decoration:none ;
    color: #fff;
    flex: 1;
    font-size: 1.7rem;
    display: inline-block;
    text-align: center;
  }
  #nav>a:first-child{
    font-size: 2.5rem;
  }
  #nav>a:last-child{
    font-size: 2.7rem;
  }
</style>
