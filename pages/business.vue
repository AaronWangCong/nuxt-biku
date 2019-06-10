<template>
  <div class="business-wrap">
    <div class="business-wrap-banner">
      <img src="../assets/images/bikuyewu.png" alt="">
    </div>
    <div class="business-wrap-content">
      <div class="w">
        <div class="content-item1">
          <div class="item-left">
            <div class="left-jinkou">
              <img src="../assets/images/business/business_01.png" alt="">
              <div class="white-text">
                <h2>进口业务</h2>
                <p>专业进口清关服务，丰富的普货/食品/化工品/工业设备/医疗器械等产品的清关经验，国外代理遍布全球网络。</p>
              </div>
            </div>
          </div>
          <div class="item-right">
            <div class="right-chukou">
              <div class="blue-text">
                <h2>出口业务</h2>
                <p>主营全球所有航线，丰富的船公司航空公司资源，遍布全球的代理网络可以满足客户各种需求，为客户定制专业的物流解决方案。</p>
              </div>
              <img src="../assets/images/business/business_02.png" alt="">
            </div>
            <div class="right-waimao">
              <img src="../assets/images/business/business_03.png" alt="">
              <div class="white-text">
                <h2>外贸代理</h2>
                <p>参为各类产品提供代理进口和出口，办理各类出口加工手册、出口收证和收汇、进口开证和付汇、进出口货物的报关和运输等工作。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content-item2">
          <div class="item-right">
            <div class="right-chukou">
              <img src="../assets/images/business/business_04.png" alt="">
              <div class="blue-text">
                <h2>报关报检</h2>
                <p>提供专业的进出口报关报检服务，依托公司良好的海关商检关系以及丰富的报关报检经验，为客户早日报关清关提供帮助。</p>
              </div>
            </div>
            <div class="right-waimao">
              <div class="white-text">
                <h2>仓储内存</h2>
                <p>公司仓储部驻扎在机场周边，交通便利。8年仓储工作经验，率上百位仓储员工，全年无休，提供24小时全天候服务。</p>
              </div>
              <img src="../assets/images/business/business_06.png" alt="">
            </div>
          </div>
          <div class="item-left">
            <div class="left-jinkou">
              <img src="../assets/images/business/business_05.png" alt="">
              <div class="white-text">
                <h2>保税物流</h2>
                <p>对保税区各项政策和运作方式运用熟练经验丰富，为客户的供应链增加灵活性、缩减成本、加速流通、提高资产利用率。</p>
              </div>
            </div>
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
.business-wrap{
  background-color: #f6f6f6;
  width: 100%;
  .business-wrap-banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
  .business-wrap-content{
    width: 100%;
    .w{
      padding-top: 60px;
      padding-bottom: 60px;
      .content-item1{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .item-left{
          width: 380px;
          .left-jinkou{
            width: 100%;
            display: flex;
            flex-direction: column;
            .white-text{
              height: 272px;
            }
            img{
              width: 100%;
              height: 280px;
            }
          }
        }
        .item-right{
          width: 790px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .right-chukou{
            width: 100%;
            height: 340px;
            display: flex;
            align-items: center;
            img{
              width: 410px;
              height: 100%;
            }
          }
          .right-waimao{
            width: 100%;
            height: 183px;
            display: flex;
            align-items: center;
          }
        }
      }

      .content-item2{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 26px;
        .item-left{
          width: 380px;
          .left-jinkou{
            width: 100%;
            display: flex;
            flex-direction: column;
            .white-text{
              height: 272px;
            }
            img{
              width: 100%;
              height: 280px;
            }
          }
        }
        .item-right{
          width: 790px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .right-chukou{
            width: 100%;
            height: 340px;
            display: flex;
            align-items: center;
            img{
              width: 410px;
              height: 100%;
            }
          }
          .right-waimao{
            width: 100%;
            height: 183px;
            display: flex;
            align-items: center;
          }
        }
      }

      .white-text{
        padding: 35px;
        flex: 1;
        background-color: #fff;
        h2{
          font-size: 24px;
          color: #0877f5;
        }
        p{
          font-size: 14px;
          color: #8c8c8c;
          line-height: 25px;
        }
      }
      .blue-text{
        flex: 1;
        height: 100%;
        background-color: #0877f5;
        padding: 40px 26px;
        h2{
          font-size: 24px;
          color: #fff;
          border-bottom: 2px solid #d2e6fd;
          padding-bottom: 20px;
        }
        p{
          padding-top: 10px;
          font-size: 14px;
          color: #fff;
          line-height: 25px;
        }
      }
    }
  }
}
</style>