<template>
  <div>
    <div id="main" >
   <Header title="我的飞飞"></Header>
   <div id="content">
      <login></login>
   </div>
   <TabBar></TabBar>
  </div>
  </div>
</template>

<script>
import Header from '../../components/Header/index'
import TabBar from '../../components/TabBar/index'
import login from '../../components/Mine_item/login/index'
export default {
   name:'Mine',
      components:{
     Header,
     TabBar,
     login
   }
}
</script>

<style>

</style>