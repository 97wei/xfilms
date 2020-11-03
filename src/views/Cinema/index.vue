<template>
  <div id="main">
    <Header title="飞飞影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <div class="city_item">
          <span>全城</span><i class="iconfont icon-jiantou32"></i>
        </div>

        <div class="brand_item">
          <span>品牌</span><i class="iconfont icon-jiantou32"></i>
        </div>

        <div class="featur_item">
          <span>特色</span><i class="iconfont icon-jiantou32"></i>
        </div>
      </div>
         <keep-alive>
          <router-view></router-view>
        </keep-alive> 
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "../../components/Header/index";
import TabBar from "../../components/TabBar/index";
import WholeCity from "../../components/cinema_item/whole_city"
export default {
  name: "Cinema",
  components: {
    Header,
    TabBar,
    WholeCity
  },
};
</script>

<style scoped>
#content{ flex:1; overflow:auto; margin-bottom: 50px; position: relative; display: flex; flex-direction:column;}
#content .cinema_menu{width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around;line-height: 45px;color:black;}
/* .cinema_menu .city_item{ height:100%;} */
/* .cinema_menu .city_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
/* .cinema_menu .city_item.router-link-active{ color: #ef4238;border-bottom: 2px #ef4238 solid;} */
/* .cinema_menu .brand_item{font-size: 15px;  width:80px; text-align:center;} */
/* .cinema_menu .brand_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
/* .cinema_menu .brand_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
/* .cinema_menu .featur_item{ height:100%; line-height: 45px;} */
/* .cinema_menu .featur_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
/* .cinema_menu .featur_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;} */
</style>