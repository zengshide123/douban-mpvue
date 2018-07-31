<template>
    <div class="container">
        <div class="title">{{detailList.title}}</div>
        <div class="content">
            <i-list v-for="(item,index) in detailList.list" :key="index" :data="item"></i-list> 
        </div>
    </div>
</template>
<script>
import list from '@/components/horizon-list'
export default {
    components:{
        'i-list':list
    },
    computed:{
        detailList(){
            return this.$store.state.detailList
        }
    },
  async mounted(){
        const pathurl = "/" + this.$root.$mp.query.cate;
        const detailData = await this.$fly.get(pathurl);
        this.$store.commit('getDetailList',detailData.data.data)
    }
}
</script>
<style lang="less" scoped>
    .container{
        font-size: 17px;
        color: #3D3D3D;
        padding: 0 10px 10px;
        .title{
            padding: 5rpx 10px;
            position: fixed;
            top: 0;
            left: 0;
            display:block;
            border-bottom: 1rpx solid #eee;
            background-color: #eee;
            width: 100%;
            box-sizing: border-box;
            z-index: 2;
        }
        .content{
            padding-top: 50rpx;
        }
    }
</style>


