<template>
  <div class="img_wrap">
    <img :src="imgSrc" class="img_src"/>
    <div class="img_text">{{imgText}}</div>
  </div>
</template>
<script>
  export default {
    name: 'img-list',
    props: {
      imgSrc: String,
      imgText: String
    }
  }
</script>
<style lang="stylus">
  .img_wrap {
    width: 295px;
    height: 520px;
    position: relative;
    overflow: hidden;
    cursor: pointer
    & .img_text {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      color: white;
      font-size: 18px;
      text-align: center;
      position: absolute;
      left: 0px;
      bottom: 0px;
      font-weight: 500;
    }
    & .img_src {
      width 100%;
      height 100%;
    }
  }

  .img_wrap:hover .img_src {
    transform: scale(1.2)
  }
</style>
