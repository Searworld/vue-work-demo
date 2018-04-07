<template>
  <div class="music_wrap">
    <div class="imgbanner">
      <img :src="musicSrc"/>
    </div>
    <!--<div class="music_text">{{musicText}}</div>-->
  </div>
</template>
<script>
  export default {
    name: 'music-list',
    props: {
      musicSrc: String,
      musicText: String
    }
  }
</script>
<style lang="stylus">
  .music_wrap {
    width: 295px;
    height 400px;
    position relative
    & .imgbanner {
      width 100%;
      height 100%
      & img {
        width 100%;
        height: 100%
      }
    }
    & .music_text {
      width 100%;
      height 100%;
      position absolute;
      left 0px;
      top: 0px;
      right 0px;
      bottom 0px;
      color white;
      background-color: rgba(0, 0, 0, .5)
    }
  }
</style>
