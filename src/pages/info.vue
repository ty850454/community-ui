<template>
  <div class="body" v-if="info">
    <swiper :list="info.imgs" v-model="demo01_index" :show-desc-mask="false" :loop="true"></swiper>
    <div class="title">
      {{info.title}}
    </div>
    <div class="price">
      ￥{{info.price}}
    </div>
    <div class="safeguard">
      <i class="iconfont icon-duigouzhong"></i><span>行程透明</span>
      <i class="iconfont icon-duigouzhong"></i><span>出行保障</span>
      <i class="iconfont icon-duigouzhong"></i><span>无购物承诺</span>
    </div>
    <div class="info">
      <div>线路说明</div>
      <ul>
        <li><b>出发地</b><span>昆明</span></li>
        <li><b>目的地</b><span>昆明</span></li>
        <li><b>是否含购物</b><span>纯玩，不含购物</span></li>
        <li><b>行程天数</b><span>1天</span></li>
        <li><b>交通方式</b><span>往返汽车</span></li>
      </ul>
    </div>

    <div class="info">
      <div>行程安排</div>
      <ul>
        <li><b>出发地</b><span>昆明</span></li>
        <li><b>目的地</b><span>昆明</span></li>
        <li><b>是否含购物</b><span>纯玩，不含购物</span></li>
        <li><b>行程天数</b><span>1天</span></li>
        <li><b>交通方式</b><span>往返汽车</span></li>
      </ul>
    </div>
    
    {{info}}
  </div>
</template>

<script>
import { Swiper } from 'vux'
export default {
  name: '',
  components: {
    Swiper
  },
  data () {
    return {
      info: null,
      demo01_index: 0
    }
  },
  methods: {
    init (id) {
      this.$http.get('./static/datas/luxianInfo.json')
      .then((response) => {
        let info = response.data[id]
        if (!info) {
          this.$router.go(-1)
          return
        }
        this.info = info
        console.log("获取数据", this.info)
      })
    }
  },
  mounted () {
    this.init(this.$route.params.id)
  },
  beforeRouteUpdate (to, from, next) {
    this.init(to.params.id)
  }
}
</script>

<style scoped>
.body {
  background-color: #eee;
}

.body > div {
  background-color: white;
}
.title {
  padding: 8px 10px;
  font-weight: bold;
}
.price {
  padding: 0 10px;
  color: red;
  font-size: 20px;
}
.safeguard {
  font-size: 14px;
  height: 30px;
}
.safeguard > i {
  color: red;
  line-height: 30px;
}
.safeguard > span {
  color: #9d9d9d;
  line-height: 30px;
}
.info {
  margin-top: 10px;
}
.info > div {
  font-weight: bold;
  padding: 5px;
}
.info > ul {
  background-color: #f6f6f6;
  padding: 0 10px;
}
.info > ul > li {
  padding: 5px 0;
}
.info > ul > li:not(:first-child) {
  border-top: 1px solid #e9e9e9;
}
.info > ul > li > b {
  display: inline-block;
  min-width: 20%;
  width: 25%;
  max-width: 50%;
  color: #bbb;
  font-weight: normal;
  font-size: 14px;
}
</style>
