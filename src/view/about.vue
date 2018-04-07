<template>
  <div class="music_banner">
    <div class="music_wrap">
      <div style="clear: both">
        <div style="float: left;cursor: pointer" @click="dianji">
          <img src="../assets/plays.png" style="width: 30px;height: 30px" v-if="ting"/>
          <img src="../assets/play.png" style="width: 30px;height: 30px" v-if="!ting"/>
        </div>
        <span
          style="color: #FFFFFF;display:block;float:left;line-height: 30px;width: auto;height: 30px;font-size: 20px;margin-left: 20px">假如爱有天意 张毅</span>
        <audio ref="yinyue" src="../audio/audio.mp3" style="width: 100px;height: 20px;display: none"></audio>
      </div>

      <div class="geci">
        <ul>
          <li>当天边那颗星出现</li>
          <li>你可知我又开始想念</li>
          <li>有多少爱恋只能遥遥相望</li>
          <li>就像月光洒向海面</li>
          <li>年少的我们曾以为</li>
          <li>相爱的人就能到永远</li>
          <li>当我们相信情到深处在一起</li>
          <li>听不见风中的叹息</li>
          <li>谁知道爱是什么</li>
          <li>短暂的相遇却念念不忘</li>
          <li>用尽一生的时间</li>
          <li>竟学不会遗忘</li>
          <li>如今我们已天各一方</li>
          <li>生活得像周围人一样</li>
          <li>眼前人给我最信任的依赖</li>
          <li>但愿你被温柔对待</li>
          <li>多少恍惚的时候</li>
          <li>彷佛看见你在人海川流</li>
          <li>隐约中你已浮现</li>
          <li>一转眼又不见</li>
          <li>短暂的相遇却念念不忘</li>
          <li>当天边那颗星出现</li>
          <li>你可知我又开始想念</li>
          <li>有多少爱恋今生无处安放</li>
          <li>冥冥中什么已改变</li>
          <li>月光如春风拂面</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  //  import musicList from '../components/musicList.vue'

  export default {
    components: {
//      musicList
    },
    data () {
      return {
        ting: false
      }
    },
    methods: {
      dianji () {
        this.ting = !this.ting
        if (!this.$refs.yinyue) {
          return ''
        } else {
          this.$refs.yinyue.paused ? this.$refs.yinyue.play() : this.$refs.yinyue.pause()
        }
      }
    }
  }
</script>
<style lang="stylus">
  .music_banner {
    width 100%;
    position: absolute;
    left 0px;
    top: 50px;
    bottom 0px;
    min-width  1280px;
    background-image url("../assets/music_banner.jpeg");
    background-size cover;
    & .music_wrap {
      width: 400px;
      height 600px;
      float right;
      margin-right 100px;
      margin-top 120px;
    }
    & .geci {
      color white;
      font-size 14px;
      letter-spacing 10px;
      clear both
    }
  }
</style>
