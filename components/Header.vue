<template>
  <div class="header-wrap">
    <header class="container w">
        <div class="menu-logo">
            <nuxt-link to="/"><img src="~/assets/images/logo.png" alt="wc-logo"></nuxt-link>
        </div>
        <div class="menu-nav">
            <ul>
                <li>
                    <nuxt-link :class="{ 'on': $route.name === 'index' }" to="/">首页</nuxt-link>
                </li>
                <li @mouseover="showNav('业务范围')" @mouseout="hideNav()">
                    <nuxt-link :class="{ 'on': $route.name === 'business' }" to="/business">业务范围</nuxt-link>
                    <!-- <transition name="fade">
                        <div class="show-nav" v-show="isShowNav=='业务范围'" transiton="fade">
                            <nuxt-link to="/business">出口业务</nuxt-link>
                            <nuxt-link to="/business">进口业务</nuxt-link>
                        </div>
                    </transition> -->
                </li>
                <li @mouseover="showNav('客户案例')" @mouseout="hideNav()">
                    <nuxt-link :class="{ 'on': $route.name === 'importedCases' }" to="/">客户案例</nuxt-link>
                    <!-- <transition name="fade">
                        <div class="show-nav" v-show="isShowNav=='客户案例'" transiton="fade">
                            <a href="javascript:;" title="公司简介">公司简介</a>
                            <a href="javascript:;" title="公司理念">公司理念</a>
                        </div>
                    </transition> -->
                </li>
                <li @mouseover="showNav('走进比酷')" @mouseout="hideNav()">
                    <nuxt-link :class="{ 'on': $route.name === 'aboutUs' }" to="/aboutUs">走进比酷</nuxt-link>
                    <!-- <transition name="fade">
                        <div class="show-nav" v-show="isShowNav=='走进比酷'" transiton="fade">
                            <nuxt-link to="/aboutUs">比酷简介</nuxt-link>
                            <nuxt-link to="/aboutUs">比酷理念</nuxt-link>
                        </div>
                    </transition> -->
                </li>
                <li>
                    <nuxt-link :class="{ 'on': $route.name === 'connectUs' }" to="/connectUs">联系我们</nuxt-link>
                </li>
            </ul>
        </div>
    </header>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    props:{
    },
    data() {
      return {
            isShowNav:'',
      }
    },
    computed: {
    },
    watch:{
    },
    created() {
    },
    mounted() {
    },
    methods: {
        showNav(val){
            this.isShowNav = val
        },
        hideNav(){
            this.isShowNav = ''
        }
    },
  }
</script>
<style lang="scss">
@import '~assets/scss/header.scss';
</style>