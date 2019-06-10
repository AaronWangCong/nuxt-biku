<template>
  <div class="right-navigation-wrap">
    <div class="back-top icon-box" @click="toTop">
      <i class="el-icon-arrow-up"></i>
    </div>
    <div class="you-need box-text icon-box" @click="isYouNeed=!isYouNeed">
      <i class="el-icon-edit-outline"></i>
      <p>What You Need</p>
    </div>
    <div class="live-chat box-text icon-box">
      <i class="el-icon-phone-outline"></i>
      <p>LiveChat</p>
      <div class="live-chat-box">
        <span></span>
        <h3>电话：<br />400-0000-0000</h3>
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
    data() {
      return {
        isYouNeed:false,
      }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
      toTop() {
        // document.documentElement.scrollTop = document.body.scrollTop = 0;
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
        let step = distance/50; //每步的距离
        (function jump(){
          if(distance > 0){
            distance-=step;
            // document.documentElement.scrollTop = distance;
            // document.body.scrollTop = distance;
            window.scrollTo(0,distance);
            setTimeout(jump,5)
          }
        })();
      },
    },
  }
</script>
<style lang="scss">
.right-navigation-wrap{
  width: 78px;
  background-color: #fff;
  position: fixed;
  top: 55%;
  right: 0;
  z-index: 2000;
  box-shadow: 0px 0px 15px 0px 
              rgba(0, 0, 0, 0.2);
  .icon-box{
    width: 100%;
    cursor: pointer;
    font-family: Arial;
    font-size: 12px;
    line-height: 11px;
    letter-spacing: 0px;
    color: #666;
    &:not(:last-child){
      border-bottom: solid 1px rgba(224, 224, 224, 0.7);
    }
    i{
      font-size: 30px;
    }
  }
  .back-top{
    padding: 10px;
    text-align: center;
    &:hover{
      background-color: #666;
      color: #fff;
    }
  }
  .box-text{
    text-align: center;
    padding: 10px 0;
    a{
      i,p{
        padding-top: 5px;
        color: #00a0e9;
      }
      text-decoration: none;
    }
    &:hover{
      background-color: #666;
      color: #fff;
      a{
        i,p{
        color: #fff;
      }
      }
    }
  }
  .live-chat{
    position: relative;
    .live-chat-box{
      padding: 10px;
      background-color: #fff;
      position: absolute;
      top: -40px;
      left: -130px;
      transition: all 0.3s linear;
      opacity: 0;
      box-shadow: 0px 0px 15px 0px 
                rgba(0, 0, 0, 0.2);
      span{
        width: 100px;
        height: 100px;
        background-color: #dedede;
        display: inline-block;
      }
      h3{
        font-weight: bold;
        font-size: 14px;
        color: #333;
      }
    }
    &:hover{
      .live-chat-box{
        opacity: 1;
      }
    }
  }
}



@media screen and (min-width: 1600px) {
    .right-navigation-wrap{
      right: 3%;
    }
}
</style>