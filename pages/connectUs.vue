<template>
  <div class="connectUs-wrap">
    <div class="connectUs-wrap-banner">
      <img src="../assets/images/lianxiwomen.png" alt="">
    </div>
    <div class="connectUs-wrap-content">
      <div class="w">
        <div class="content-left">
          <p>
            <img src="../assets/images/connectUs/connectUs_icon01.png" alt="">
            <span>服务热线：400-0000000</span>
          </p>
          <p>
            <img src="../assets/images/connectUs/connectUs_icon02.png" alt="">
            <span>企业邮箱：aaaaa@biku-tech.com</span>
          </p>
          <p>
            <img src="../assets/images/connectUs/connectUs_icon03.png" alt="">
            <span>公司地址：上海市闵行区沪青平公路331号 </span>
          </p>
        </div>
        <div class="content-right">
          <img src="../assets/images/connectUs/connectUs_map.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {
    },
    props:{
    },
    layout:'',
    data() {
      return {
      }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    },
  }
</script>
<style lang="scss">
.connectUs-wrap{
  background-color: #f6f6f6;
  width: 100%;
  .connectUs-wrap-banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .connectUs-wrap-content{
    width: 100%;
    .w{
      padding-top: 60px;
      padding-bottom: 60px;
      display: flex;
      justify-content: space-between;
      .content-left{
        flex: 1;
        p{
          display: flex;
          align-items: center;
          margin: 20px 0;
          span{
            padding-left: 10px;
            font-size: 14px;
            color: #666;
          }
        }
      }
      .content-right{
        width: 720px;
      }
    }
  }
}
</style>