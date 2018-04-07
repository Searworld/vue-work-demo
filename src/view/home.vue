<template>
  <div class="home_wrap">
    <swiper-list :listImg="listImg"></swiper-list>
    <div class="home_content">
      <img-list :imgSrc="item.imgSrc" v-for="(item,index) in homeList" :key="index" :imgText="item.imgText"
                style="margin-top: 50px"></img-list>
    </div>
  </div>

</template>
<script>
  import imgList from '../components/imgList.vue'
  import swiperList from '../components/swiper.vue'

  export default {
    components: {
      imgList,
      swiperList
    },
    data () {
      return {
        listImg: [{
          url: require('../assets/swiper.jpeg'),
          swiper_text: '动物的世界里，你是否倾听了她们的语言'
        }, {
          url: require('../assets/home_banner2.jpeg'), swiper_text: '丛林中的生命密码，你读懂了多少'
        }, {
          url: require('../assets/home_banner3.jpeg'),
          swiper_text: '后来的你，是否还在坚持最初的梦想'
        }],
        homeList: [{
          imgSrc: require('../assets/shitu_w01.jpg'),
          imgText: '我真的不是“干脆面”！'
        },
          {imgSrc: require('../assets/sshitu_w02.jpg'), imgText: '你也想要我的小心心吗?'},
          {imgSrc: require('../assets/shitu_w03.jpg'), imgText: '你可以说是很“豹笑”了'},
          {imgSrc: require('../assets/shitu_w04.jpg'), imgText: '满山的“五花肉”，走着走着就饿了'},
          {imgSrc: require('../assets/shitu_w05.jpg'), imgText: '喂，你的老婆…花掉了'},
          {imgSrc: require('../assets/shitu_w06.jpg'), imgText: '麻麻说了，大耳朵显脸小'},
          {imgSrc: require('../assets/shitu_w07.jpg'), imgText: '再大的男孩，也不能抗拒这样的“玩具”'},
          {imgSrc: require('../assets/shitu_w08.jpg'), imgText: '好口怕，瓜子都差点吓掉了'},
          {imgSrc: require('../assets/shitu_w09.jpg'), imgText: '小心，本神兽出没！'},
          {imgSrc: require('../assets/shitu01.jpg'), imgText: '淋雨就变“小透明”'},
          {imgSrc: require('../assets/shitu_w11.jpg'), imgText: '我是网红脸，爱笑爱自拍'},
          {imgSrc: require('../assets/shitu_w12.jpg'), imgText: '你见过石（pi）头（gu）里开的小黄花吗'}
        ]
      }
    }
  }
</script>
<style lang="stylus">
  .home_wrap {
    width: 100%;
    & .home_content {
      width: 1280px;
      margin: 0px auto;
      min-width: 1280px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
</style>
