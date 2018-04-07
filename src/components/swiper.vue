<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }">
        <p>{{str.swiper_text}}</p>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  export default {
    name: 'swier-list',
    props: ['listImg'],
    mounted () {
      console.log('mounted', this)
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    }
  }
</script>

<style lang="stylus">
  @import "swiper/dist/css/swiper.min.css"
  .swiper-container {
    width: 100%;
    height: 650px;
    & .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    & .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%;
      text-align :center;
      letter-spacing: 20px;
      font-size 20px;
      color white;
      line-height 600px;
      font-weight bold
      & img {
        width: 100%;
        height: 100%;
      }
    }
    & .swiper-pagination-bullet {
      width: 60px;
      height: 4px;
      display: inline-block;
      background-color: rgba(255, 255, 255, .5);
      border-radius: 0px;
    }
    & .swiper-pagination-bullet-active {
      background-color: #5f86e9
    }
  }
</style>
