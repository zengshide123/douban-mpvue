<template>
    <div class="header">
        <span class="header-title">{{title}}</span>
        <span class="header-btn" @click="handleClick">&gt;</span>
    </div>
</template>
<script>
export default {
    props:{
       title:{
           type:String
       } 
    },  
    methods:{
        handleClick(){
            wx.navigateTo({
                 url: '/pages/detail/main?cate=hot'
            })
        }
    } 
}
</script>
<style lang="less" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        padding: 10px 0; 
        color: #7f7f7f;
        .header-title{
            font-size: 17px;
        }
        .header-btn{
            font-size: 15px;
            color: #c5c5c5;
            display:inline-block;
            line-height: 1.3;
            width: 35px;
            border: 1rpx #c5c5c5 solid;
            text-align: center;
            border-radius: 10px;
        }

    }
</style>


