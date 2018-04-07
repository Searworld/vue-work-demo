<template>
  <div class="article_item">
    <div class="article_item_left">
      <div class="yuan">
        <img :src="imgSrc" class="item_left_img">
        <div class="sanjiao"></div>
      </div>
    </div>
    <div class="article_item_right">
      {{articleText}}
      <span>----{{writer}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'article-item',
    props: {
      imgSrc: String,
      articleText: String,
      writer: String
    }
  }
</script>
<style lang="stylus">
  .article_item {
    width: 100%;
    height: 120px;
    clear: both;
    & .article_item_left {
      float: left;
      width: 100px;
      height: 150px;
      & .yuan {
        position: relative;
        padding-top: 10px;
        box-sizing: border-box
        & .sanjiao {
          position: absolute;
          right: -10px;
          top: 25px;
          height: 0px;
          border-left: 10px solid transparent;
          border-right: 15px solid transparent;
          border-top: 20px solid rgba(255, 255, 255, .5);
        }
        & .item_left_img {
          width: 100px;
          height: 100px;
          border-radius: 100%;
        }
      }
    }
    & .article_item_right {
      width: 880px;
      height: 100%;
      background-color: #222222;
      float: right;
      padding 20px;
      box-sizing border-box;
      color white;
      font-size 16px;
      position relative;
      border-radius: 10px;
      & span {
        position absolute;
        bottom 20px;
        right 20px
      }
    }
  }
</style>
