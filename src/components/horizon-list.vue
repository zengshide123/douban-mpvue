<template>
    <div class="listwrapper">
        <img :src="imgsrc" alt="" class="list-img">
        <div class="list-content">
            <span class="title">{{title}}</span>
            <span class="desc">这里是一大段的描述</span>
            <i-rate
              :value="data.rating.average"
              readOnly
              size="16px"
              :length="data.rating.max"
            />
        </div>
    </div>
</template>
<script>
import rate from '@/components/rate'
export default {
    props:{
        data:{
            type:Object
        }
    },
    computed:{
        imgsrc(){
            return this.data.images.small
        },
        title(){
            return this.data.title
        }
    },
    components:{
        'i-rate':rate
    }
}
</script>
<style lang="less" scoped>
    .listwrapper{
        padding: 10px 0;
        display: flex;
        align-items: center;
        font-size: 17px;
        color: #3D3D3D;
        .list-img{
            width: 70px;
            height: 70px;
            margin-right: 5px;
        }
        .list-content{
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-around;
             .desc{
                    width: 65%;
                    color: #676B7B;
                    font-size: 13px;
                    word-wrap: break-word;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
             }
             .title{
                    width: 50%;
                    word-wrap: break-word;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
             }
        }
    }
</style>


