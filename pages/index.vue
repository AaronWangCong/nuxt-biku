<template>
  <div class="home-wrap">
    <div class="home-wrap-banner">
      <!-- // 切换的图片部分 -->
      <div class="bannerImg" :style="'height:'+bannerHeight+'px'">
        <transition-group tag="div">
          <span v-for="(v,i) in imgInfo" :key="i" :style="{opacity:(i+1)==n?'1':'0'}" class="active">
            <img :src="v.url" alt="" ref="image" @load="imageLoaded()">
          </span>
        </transition-group>
      </div>
      <!-- // 切换的小按钮部分 -->
      <ul class="bannerBtn">
        <li v-for="(num,index) in imgInfo.length" :key="index">
          <span @click="change(num)" :class="num==n?'aBtn':''"></span>
        </li>
      </ul>
    </div>
    <div class="home-wrap-learnBiku">
      <div class="w">
        <h2>了解比酷</h2>
        <p>专注于进出口，用人才整合资源，为客户创造价值，致力于打造“全球出口门到门，中国领先品牌”</p>
        <div class="learnBiku-box">
          <div class="learnBiku-box-item">
            <div class="box-icon"><img src="~assets/images/icon_03.png" alt=""></div>
            <div class="box-text">
              <h3>关于比酷</h3>
              <p>About Biku</p>
            </div>
            <span>v</span>
          </div>
          <div class="learnBiku-box-item">
            <div class="box-icon"><img src="~assets/images/icon_05.png" alt=""></div>
            <div class="box-text">
              <h3>愿景展望</h3>
              <p>Vision＆Prospects</p>
            </div>
            <span>v</span>
          </div>
          <div class="learnBiku-box-item">
            <div class="box-icon"><img src="~assets/images/icon_07.png" alt=""></div>
            <div class="box-text">
              <h3>比酷理念</h3>
              <p>Biku Concept</p>
            </div>
            <span>v</span>
          </div>
          <div class="learnBiku-box-item">
            <div class="box-icon"><img src="~assets/images/icon_09.png" alt=""></div>
            <div class="box-text">
              <h3>联系我们</h3>
              <p>Contact USs</p>
            </div>
            <span>v</span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-wrap-why">
      <div class="w">
        <h2>为什么选择我们</h2>
        <div class="why-content">
          <div class="why-content-left">
            <h3>1.我们有一站式服务体系，能够满足最严苛的物流运输需求</h3>
            <p>我们自有的专业展示道具运输团队，使您不用再花高昂的费用和更多的时间去寻求多家物流公司的帮助，只要告诉我们您的需求，从提货-运输-清关-专车送货-拆箱-收垃圾-搬运至店铺，我们将一并完成。</p>
            <h3>2.我们有八年的经验，对品牌公司的不同需求皆能从容应对</h3>
            <p>每个项目我们都能以八年的经验，让每次的运输都能体现其独有的特质。大量的实战经验，使我们对您所处行业的运输需求有着最深刻的把握。</p>
          </div>
          <div class="why-content-right">
            <h3>3.我们有最真挚的态度，客户的需求永远摆在首位</h3>
            <p>我们不仅提供一流的货物运输服务，更重视每个客户的实际需求。每一个客户都是上帝，每一位上帝的需求我们都将竭尽全力去满足。</p>
            <h3>4.我们务实，我们让客户投入的每一分钱都物有所值</h3>
            <p>要生存，就必须有利润。我们并不是最为低廉的服务公司，但我们保证让您所花的每一分钱都物有所值。这不仅是综合自身服务、水准与质量得出的结论，更是我们作为一家成熟企业的道德准则。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="home-wrap-business">
      <div class="w">
        <h2>比酷业务</h2>
        <p>秉承以"创新 责任 共赢"的经营理念，深得社会的广泛认可和一致好评</p>
        <div class="business-box">
          <div class="business-box-item">
            <div class="item-img">
              <img src="~/assets/images/business_01.png" alt="">
            </div>
            <div class="item-text">
              <h3>进口业务</h3>
              <span>更多 <i>→</i></span>
            </div>
          </div>
          <div class="business-box-item">
            <div class="item-img">
              <img src="~/assets/images/business_02.png" alt="">
            </div>
            <div class="item-text">
              <h3>出口业务</h3>
              <span>更多 <i>→</i></span>
            </div>
          </div>
          <div class="business-box-item">
            <div class="item-img">
              <img src="~/assets/images/business_03.png" alt="">
            </div>
            <div class="item-text">
              <h3>外贸代理</h3>
              <span>更多 <i>→</i></span>
            </div>
          </div>
          <div class="business-box-item">
            <div class="item-img">
              <img src="~/assets/images/business_04.png" alt="">
            </div>
            <div class="item-text">
              <h3>报关报检</h3>
              <span>更多 <i>→</i></span>
            </div>
          </div>
          <div class="business-box-item">
            <div class="item-img">
              <img src="~/assets/images/business_05.png" alt="">
            </div>
            <div class="item-text">
              <h3>仓储内装</h3>
              <span>更多 <i>→</i></span>
            </div>
          </div>
          <div class="business-box-item">
            <div class="item-img">
              <img src="~/assets/images/business_06.png" alt="">
            </div>
            <div class="item-text">
              <h3>保税物流</h3>
              <span>更多 <i>→</i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-wrap-advantage">
      <div class="w">
        <h2>比酷优势</h2>
        <p>以全球采购中心和产品整合供应链服务为核心</p>
        <div class="advantage-box">
          <div class="box-icon bx">
            <img src="../assets/images/advantage/advantage_01.png" alt="">
            <span>保险</span>
          </div>
          <div class="box-icon ky">
            <img src="../assets/images/advantage/advantage_02.png" alt="">
            <span>空运</span>
          </div>
          <div class="box-icon jy">
            <img src="../assets/images/advantage/advantage_03.png" alt="">
            <span>检验检疫</span>
          </div>
          <div class="box-icon gj">
            <img src="../assets/images/advantage/advantage_04.png" alt="">
            <span>国际贸易</span>
          </div>
          <div class="box-icon bg">
            <img src="../assets/images/advantage/advantage_05.png" alt="">
            <span>报关清关</span>
          </div>
          <div class="box-icon hy">
            <img src="../assets/images/advantage/advantage_06.png" alt="">
            <span>海运</span>
          </div>
          <div class="box-icon dz">
            <img src="../assets/images/advantage/advantage_07.png" alt="">
            <span>单证办理</span>
          </div>
          <div class="box-icon ly">
            <img src="../assets/images/advantage/advantage_08.png" alt="">
            <span>陆运派送</span>
          </div>
          <div class="dun">
            <img src="../assets/images/advantage/advantage_dun.png" alt="">
          </div>
          <div class="box-point"></div>
        </div>
      </div>
    </div>
    <div class="home-wrap-ball">
      <div class="w">
        <img src="../assets/images/in_ch_ball.png" alt="">
      </div>
    </div>
    <div class="home-wrap-partner">
      <div class="w">
        <h2>合作伙伴</h2>
        <p>了解更多比酷业务详情</p>
        <div class="partner-box">
          <div class="partner-box-item">
            <img src="../assets/images/partner/dazzle.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/diesel.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/ez.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/fendi.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/iwc.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/lee.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/lv.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/mango.png" alt="">
          </div>
          <div class="partner-box-item">
            <img src="../assets/images/partner/wition.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import banner1 from '~/assets/images/inside_banner1.png'
  import banner2 from '~/assets/images/bikuyewu.png'
  import banner3 from '~/assets/images/zoujinbiku.png'
  import banner4 from '~/assets/images/lianxiwomen.png'
  export default {
    name: '',
    components: {
    },
    props:{
    },
    layout:'',
    data() {
      return {
        imgInfo:[
          { title: '', url: banner1, link:''},
          { title: '', url: banner2, link:'business'},
          { title: '', url: banner3, link:'aboutUs'},
          { title: '', url: banner4, link:'connectUs'},
        ],
        bannerHeight:'',
        count:0,
        n:1,　　　　　　　// 图片的index。
        bFlag:true,      // 锁定
        timer1:'',　　　　// 这是bFlag定时器的数据
        timer2:'',　　　　// 这是自动播放（next（））定时器的数据
        timer3:'',　　　　// 这是打开浏览器时，初始运动定时器的数据
      }
    },
    head: {
      title: '上海比酷国际货运代理有限公司',
      meta: [
        { hid: 'description', name: 'description', content: '上海比酷国际货运代理有限公司' },
        { hid: 'keywords', name: 'keywords', content: '上海比酷国际货运代理有限公司' }
      ],
    },
    computed: {
      
    },
    created() {
    },
    mounted() {
      window.addEventListener('resize', () => {
        if(this.$refs.image[0]){
          if(this.$refs.image[0].height<338){
            this.bannerHeight = 338
          }else{
            this.bannerHeight = this.$refs.image[0].height
          }
        }
      }, false),
      this.timer3=setTimeout(this.next,3000);
    },
    methods: {
      imageLoaded(){
        this.count ++
        if(this.count === 1){
          this.$nextTick(() => {
            this.bannerHeight = this.$refs.image[0].height
          })
        }
      },
      next(){
          // 下一张　　　
          // 为了避免连续点击。让bFlag运动结束后再变为true。　　　　　　　　　　　　　　
          if(this.bFlag){　　　　　　　　　　　　
              this.bFlag=false;
              this.clearT();　　　　　　　　　   // 运动之前，清除所有定时器。
              this.n=this.n+1==(this.imgInfo.length+1)?1:this.n+1;　  // 下一张，如果是第4张，就返回第一张。
              // 调用timeout函数，延迟进入下一次轮播，以便可以点击切换。
              this.timeout();
          }
      },
      clearT(){
          // 清除所有定时器　　　　　　　　　　　　　　　
          clearTimeout(this.timer1);
          clearTimeout(this.timer2);
          clearTimeout(this.timer3);
      },
      timeout(){　　　　　　
          // 运动结束后设置bFlag为true，并且3秒后调用next，进行下一次运动。
          // 运动时间是1s。
          this.timer2=setTimeout(()=>{
              this.bFlag=true
          },1000);
          this.timer1=setTimeout(()=>{
              this.next()
          },3000);
      },
      change(num){　　　　　　　　　　
          // 点击按钮，切换到对应图片，需要获取index。
          if(this.bFlag){
              this.bFlag=false;
              this.clearT();
              this.n=num;　　　　　　　         // 将显示图片变为选中的那一张。　　　　
              this.timeout()
          }
      }
    },
    beforeRouteLeave (to, from, next) {
      // window.removeEventListener('scroll',this.animateCount);
    }
  }
</script>
<style lang="scss">
@import '../assets/scss/index.scss';
</style>