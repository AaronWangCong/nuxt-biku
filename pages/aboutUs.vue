<template>
  <div class="aboutUs-wrap">
    <div class="aboutUs-wrap-banner">
      <img src="../assets/images/zoujinbiku.png" alt="">
    </div>
    <div class="aboutUs-wrap-content">
      <div class="w">
        <div class="content-left">
          <div>
            <h2>比酷简介</h2>
            <p>上海比酷国际货运代理有限公司，成立于2010年，专注于进出口，用人才整合资源，为客户创造价值，致力于打造“全球出口门到门，中国领先品牌”。</p>
            <p>比酷以国际贸易为前提，以物流、商流、资金流、信息流四流合一为载体，构建了以全球采购中心和产品整合供应链服务为核心的，全球整合型供应链服务平台，为客户提供国际贸易过程中的一系列服务，包括但不限于“国际物流海、空、陆运配送、一般贸易代理及国际贸易结算、专业进出口报关清关、系列进出口单证办理、检验检疫、熏蒸、保险”等业务。</p>
          </div>
        </div>
        <div class="content-right">
          <div class="content-right-top">

          </div>
          <div class="content-right-bottom">
            <h2>比酷理念</h2>
            <p>上善若水，举业德先</p>
            <p>诚信为本、勤奋做事、精益求精</p>
            <p>核心理念：创新 责任 共赢</p>
            <p>核心宗旨：为客户提升价值</p>
            <p>核心作风：快速反应 马上行动</p>
          </div>
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
.aboutUs-wrap{
  background-color: #f6f6f6;
  width: 100%;
  .aboutUs-wrap-banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .aboutUs-wrap-content{
    width: 100%;
    .w{
      padding-top: 60px;
      padding-bottom: 60px;
      display: flex;
      justify-content: space-between;
      .content-left{
        width: 790px;
        height: 653px;
        background: url('~assets/images/about_01.png') no-repeat center;
        background-size: cover;
        padding: 25px;
        &>div{
          padding: 25px;
          width: 450px;
          height: 370px;
          background-color: #fff;
          h2{
            font-size: 24px;
            color: #0877f5;
          }
          p{
            font-size: 14px;
            color: #8c8c8c;
            text-indent: 40px;
            line-height: 25px;
          }
        }
      }
      .content-right{
        width: 378px;
        height: 100%;
        .content-right-top{
          width: 100%;
          background: url('~assets/images/about_02.png') no-repeat center;
          background-size: cover;
          height: 440px;
        }
        .content-right-bottom{
          width: 100%;
          background-color: #fff;
          height: 215px;
          padding: 35px;
          h2{
            font-size: 24px;
            color: #0877f5;
          }
          p{
            font-size: 14px;
            color: #8c8c8c;
            margin: 5px 0;
          }
        }
      }
    }
  }
}
</style>