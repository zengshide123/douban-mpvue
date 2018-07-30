<template>
   <div class="listWrapper">
       <i-header :title="title"/>
       <div class="list-content">
             <!-- <scroll-view scroll-x='true'  :style="{display:'flex',justifyContent:'space-around'}"> -->
            <i-card v-for="(item,index) in rlist" :key="index" :data="item" v-if="index<3"/>  
             <!-- </scroll-view> -->
       </div>
   </div>     
</template>
<script>
import header from './list-header'
import card from './card'
import rate from './rate'
export default {
    data(){
        return {
            scrollX:"scroll-x"
        }
    },
    props:{
        list:{
            type:Object,
            require:true
        }
    },
    computed:{
        title(){
            return this.list.title
        },
        rlist(){
            return this.list.list
        }
    },
    components:{
        'i-header':header,
        'i-card':card,
        'i-rate':rate
    }
}
</script>
<style lang="less" scoped>
    .listWrapper{
        box-sizing: border-box;
        padding: 0 10rpx;
        .list-content{
            display: flex;
            justify-content: space-around;
        }
    }
</style>

