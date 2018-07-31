<template>
  <div class="container">
        <i-slider
          :list="bannerList"
        />
        <i-list
              :list="soonList"
        />
        <i-list
              :list="topList"
        />
        <i-list
              :list="usFilmList"
        />
        <i-list
              :list="hotList"
        />
  </div>
</template>

<script>
import list from '@/components/list'
import slider from '@/components/slider'
export default {
  computed:{
    bannerList(){
      return this.$store.state.sliderList
    },
    soonList(){
      return this.$store.state.soonList
    },
    topList(){
      return this.$store.state.topList
    },
    hotList(){
      return this.$store.state.hotList
    },
    usFilmList(){
      return this.$store.state.usFilmList
    }
  },
  components: {
    'i-list':list,
    'i-slider':slider
  },

  methods: {
  },
  async created () {
    // 获取轮播图数据
    const bannerData = await this.$fly.get('/bannerlist')
          this.$store.commit('getSliderList',bannerData.data.data)
    // 获取top数据
    const topData  = await this.$fly.get('/top-list')
          this.$store.commit('getTopList',topData.data.data)
    // 获取即将上映数据
    const soonData = await this.$fly.get('/comming-soon')
          this.$store.commit('getSoonList',soonData.data.data)
    // 获取北美电影数据
    const usfilmData = await this.$fly.get('/usfilm')
          this.$store.commit('getUsFilmList',usfilmData.data.data)
    const hotData = await this.$fly.get('/hot-list')
          this.$store.commit('getHotList',hotData.data.data)
  }
}
</script>
<style lang="less" scoped>
  .container{
    width: 100%;
    margin-top: 2rpx;
    margin-bottom: 2rpx;
  }
</style>

