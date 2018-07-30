<template>
  <div class="container">
      <swiper indicator-dots="true"
        autoplay="true" interval="2000" 
        duration="500" indicator-color="#CABEBE" 
        indicator-active-color="#E3453A"
        circular="true"
        >
        <block v-for="(item,index) in imglist" :key="index">
            <swiper-item>
                <image :src="item.images.small" class="slide-image"/>
            </swiper-item>
        </block>
    </swiper>
  </div>
</template>
<script>
export default {
    props:{
        list:{
            type:Array
        }
    },
    computed:{
        imglist(){
            return this.list
        }
    }
}
</script>
<style lang="less" scoped>
    .container{
        width: 100%;
        height: 100%;
        .slide-image{
            width: 100%;
        }
    }
</style>