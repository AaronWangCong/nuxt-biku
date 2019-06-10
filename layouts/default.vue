<template>
  <div class="layout-wrap">
    <v-head></v-head>
    <div class="layout-wrap-content">
      <nuxt/>
    </div>
    <v-footer></v-footer>
    <v-rightNavigation></v-rightNavigation>
  </div>
</template>

<script>
import RightNavigation from '~/components/RightNavigation.vue'
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: "",
  components: {
    "v-head": Header,
    'v-footer': Footer,
    'v-rightNavigation': RightNavigation,
  },
  props: {},
  data() {
    return {
      title: "Wangcong.wang"
    };
  },
  head: {
    title: '上海比酷国际货运代理有限公司',
    meta: [
      { hid: 'description', name: 'description', content: '上海比酷国际货运代理有限公司' },
      { hid: 'keywords', name: 'keywords', content: '上海比酷国际货运代理有限公司' }
    ],
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang='scss'>
.layout-wrap {
  width: 100%;
  min-width: 1210px;
  .layout-wrap-content{
    width: 100%;
    min-height: 855px;
    padding-top: 80px;
  }
}
</style>
