<template>
    <div class="container" :style="{color:rcolor,fontSize:rfont}">
        <span class="title">{{title}}</span>
        <div class="rate">
            <span @touchmove="mouseOver(num)" v-for=" num in rlen" :key="num" class="spanf" @click="onRate(num)">☆</span>
            <div class="hollow" :style="{width:rwidth,transition:rAnimate}">
                <span @click="onRate(num1)" @touchmove="mouseOver(num1)" v-for="num1 in rlen" :key="num1" class="spanf">★</span>
            </div>
                <span class="rate-level">{{rlevel}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            themeObj:{
                'black': '#00',
                'white': '#fff',
                'red': '#f5222d',
                'orange': '#fa541c',
                'yellow': '#fadb14',
                'green': '#73d13d',
                'blue': '#40a9ff',
                'purple': '#9254de'
            },
            rvalue:this.value
        }
    } ,
    props:{
        value:{
            type:[Number,String],
            default:0
        },
        length:{
            type:[Number,String],
            default:5
        },
        animate:{
            type:String,
            default:'0'
        },
        theme:{
            type:String,
            default:'yellow'
        },
        size:{
            type:String
        },
        title:{
            type:String,
            default:''
        },
        readOnly:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        rfont(){
            return this.size?this.size:'16rpx'
        },
        rcolor(){
            return this.themeObj[this.theme]?this.themeObj[this.theme]:this.theme
        },
        rAnimate(){
            return `width ${this.animate}s`
        },
        rwidth(){
            return `${this.rvalue}em`
        },
        rlen(){
            return parseInt(this.length)
        },
        rlevel(){
            let res = this.rvalue
            if((this.rvalue+'').indexOf('.')===-1){
                res += '.0'
            }
            return res
        }
    },
    methods:{
        mouseOver(num){
            if(this.readOnly){
                return 
            }
            this.rvalue = num
        },
        onRate(num){
            if(this.readOnly){
                return 
            }
            this.$emit('onRatea',num)
            this.rvalue = num
        }
    }
}
</script>
<style lang="less" scoped>
    .title{
        font-size: 85%;
    }
    .rate{
        position: relative;
        display: inline-block;
        .hollow{
            position: absolute;
            display: inline-block;
            top: 0;
            left: 0;
            width: 0;
            overflow: hidden;
        }
        .spanf {
            font-family: 'Courier New', Courier, monospace;
        }
        .rate-level{
            font-size: 75%;
            margin-left: 2rpx;
            color: #E3453A;
        }
    }
</style>




