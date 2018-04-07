<template>
  <div class="article_wrap">
    <div class="article_middle">
      <div class="middle_top">
        <div class="middle_top_item">
          <span style="line-height: 200px;">你知道嘛？古诗很美</span>
        </div>
      </div>
      <div v-for="item in articleList" ref="imgStyle" style="margin-top: 40px">
        <article-item :imgSrc="item.imgSrc" :articleText="item.articleText" :writer="item.writer"></article-item>
      </div>
    </div>
  </div>
</template>
<script>
  import articleItem from '../components/articleItem.vue'

  export default {
    components: {
      articleItem
    },
    data () {
      return {
        articleList: [
          {
            imgSrc: require('../assets/touxiang1.jpeg'),
            articleText: '一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。',
            writer: '毛泽东'
          },
          {
            imgSrc: require('../assets/touxiang2.jpeg'),
            articleText: '明月松间照，清泉石上流',
            writer: '王维《山居秋暝》'
          },
          {
            imgSrc: require('../assets/touxiang3.jpeg'),
            articleText: '慈母手中线，游子身上衣，临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖',
            writer: '孟郊《游子吟》'
          },
          {
            imgSrc: require('../assets/touxiang4.jpeg'),
            articleText: '出淤泥而不染，濯清涟而不妖',
            writer: '周敦颐《爱莲说》'
          },
          {
            imgSrc: require('../assets/touxiang5.jpeg'),
            articleText: '月落乌啼霜满天，江枫渔火对愁眠',
            writer: '张继《枫桥夜泊》'
          },
          {
            imgSrc: require('../assets/touxiang6.jpeg'),
            articleText: '人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。',
            writer: '苏轼《水调歌头》'
          },
          {
            imgSrc: require('../assets/touxiang7.jpeg'),
            articleText: '酒酣胸胆尚开张，鬓微霜，又何妨？持节云中，何日遣冯唐？会挽雕弓如满月，西北望，射天狼。',
            writer: '苏轼《江城子*密州出猎》'
          },
          {
            imgSrc: require('../assets/touxiang8.jpeg'),
            articleText: '所谓伊人，在水一方',
            writer: '诗经．秦风．蒹葭'
          }, {
            imgSrc: require('../assets/touxiang9.jpeg'),
            articleText: '人非圣贤，孰能无过？过而能改，善莫大焉。',
            writer: '《左传》'
          }, {
            imgSrc: require('../assets/touxiang10.jpeg'),
            articleText: '路漫漫其修远兮，吾将上下而求索',
            writer: '屈原《离骚》'
          }, {
            imgSrc: require('../assets/touxiang11.jpeg'),
            articleText: '不积跬步，无以至千里；不积小流，无以成江海。',
            writer: '荀子《劝学》'
          }, {
            imgSrc: require('../assets/touxiang12.jpeg'),
            articleText: '精诚所至，金石为开。',
            writer: '《后汉书*广陵思王荆传》'
          }, {
            imgSrc: require('../assets/touxian13.jpeg'),
            articleText: '登山则情满于山，观海则意溢于海。',
            writer: ' 刘勰《文心雕龙》'
          }, {
            imgSrc: require('../assets/touxiang14.jpeg'),
            articleText: '劝君更进一杯酒，西出阳关无故人。',
            writer: '王维《送元二使安西》'
          }, {
            imgSrc: require('../assets/touxiang15.jpeg'),
            articleText: '洛阳亲友如相问，一片冰心在玉壶。',
            writer: '王昌龄《芙蓉楼送辛渐》'
          }
        ]
      }
    },
    mounted () {
//      const shuzu = this.$refs.imgStyle.map((item) => {
//        return item.$el
//      })
//      console.log(shuzu)
      console.log(this.$refs.imgStyle)
//      this.$refs.imgStyle.style.backgroundColor = 'red'
    }
  }
</script>
<style lang="stylus">
  .article_wrap {
    width: 100%;
    min-width: 1005px;
    min-height 2600px;
    background-color #333333;
    & .article_middle {
      width: 1005px;
      margin: 0px auto;
      height: 100%;
      & .middle_top {
        width 100%;
        height 200px;
       & .middle_top_item{
         width 100%;
         height 100%;
         background-image url("../assets/gushi.jpeg");
         background-size cover;
         background-repeat no-repeat;
         text-align: center;font-size: 16px;
         letter-spacing 20px
       }
      }
    }
  }
</style>
