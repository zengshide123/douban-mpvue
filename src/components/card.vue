<template>
  <div class="card">
      <img :src="imgsrc" alt="#"
        class="card-img"
      >
      <p class="card-desc">{{desc}}</p>
      <i-rate
        size='8px'
        readonly
        :value=rating
        :length= ratringlen
      />
  </div>
</template>

<script>
import rate from './rate'
export default {
  props: {
    data:{
      type:Object
    }
  },
  computed:{
    imgsrc(){
      return  this.data.images.small
    },
    desc(){
      return this.data.title
    },
    rating(){
      return this.data.rating.average
    },
    ratringlen(){
      return this.data.rating.max
    }
  },
  components:{
    'i-rate':rate
  }
}
</script>

<style lang=less scoped>
.card {
  padding: 10px;
  .card-img {
    width: 95px;
    height: 95px;   
  }
  .card-desc{
    width: 95px;
    font-size: 14px;
    color: #676B7B;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
}
</style>
