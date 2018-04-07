<template>
  <div class="lead_wrap">
    <router-link to="/home" exact>Hello</router-link>
    <router-link to="/article">Poetry</router-link>
    <router-link to="/about">Music</router-link>
  </div>
</template>
<script>
  export default {
    name: 'lead-wrap'
  }
</script>
<style lang="stylus">
  .lead_wrap {
    width 100%;
    height: 50px;
    line-height: 50px;
    background-color: black;
    font-size: 20px;
    padding: 0px 150px;
    box-sizing border-box;
    color: #ffffff
    & a {
      color: white;
      margin-left 80px
    }
    & .router-link-active {
      color: #ffcd32
    }
    & .author{
      float right
      font-size 16px
      & span{
        margin-left 20px
      }
    }
  }
</style>
