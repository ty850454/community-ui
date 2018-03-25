<template>
  <div class="body" v-if="info">
    <swiper :list="info.imgs" v-model="demo01_index" :show-desc-mask="false" :loop="true"></swiper>
    <div class="title">
      {{info.title}}
    </div>
    <div class="price">
      ￥{{info.price}}
    </div>
    <div v-if="info.date" class="safeguard" style="font-size:12px;height:20px">
      <span>开团日期：{{info.date}}</span>
    </div>
    <div class="safeguard">
      <i class="iconfont icon-duigouzhong"></i><span>行程透明</span>
      <i class="iconfont icon-duigouzhong"></i><span>出行保障</span>
      <i class="iconfont icon-duigouzhong"></i><span>无购物承诺</span>
    </div>
    <div class="box">
      <div class="box-title">线路说明</div>
      <ul class="box-body info">
        <li><b>出发地</b><span>{{info.startLocation}}</span></li>
        <li><b>目的地</b><span>{{info.endLocation}}</span></li>
        <li><b>是否含购物</b><span>纯玩，不含购物</span></li>
        <li><b>行程天数</b><span>{{info.days}}天</span></li>
        <li><b>交通方式</b><span>往返{{info.traffic}}</span></li>
      </ul>
    </div>
    <div class="box">
      <div class="box-title">行程安排</div>
      <div class="box-body">
        <div class="routes">
          <div class="route" v-for="routes in info.routes" :key="routes.id">
            <div>{{routes.title}}：<b v-for="site in routes.site" :key="site">{{site}}</b></div>
            <ul>
              <li v-for="route in routes.route" :key="route.id">
                <div class="route-title">
                  <i :class="'iconfont ' + route.icon"/>
                  <p>{{route.tag}}</p>
                  <div v-if="route.startTime" class="route-time">{{route.startTime}}</div>
                </div>
                <div class="route-body" v-for="body in route.body" :key="body.id">
                  <b>{{body.title}}</b>
                  <p>{{body.content}}</p>
                  <p>{{body.note}}</p>
                </div>
              </li>
            </ul>
            <div class="route-note" v-if="routes.notes && routes.notes.length>0">
              <p v-for="note in routes.notes" :key="note">{{note}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      this.$http.get(`./static/datas/luxians/${id}.json?t=` + new Date().getTime())
      .then((response) => {
        let info = response.data
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
  padding: 0 10px;
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
  background-color: #f6f6f6;
  padding: 0 10px;
}
.info > li {
  padding: 5px 0;
}
.info > li:not(:first-child) {
  border-top: 1px solid #e9e9e9;
}
.info > li > b {
  display: inline-block;
  min-width: 20%;
  width: 25%;
  max-width: 50%;
  color: #bbb;
  font-weight: normal;
  font-size: 14px;
}
.box {
  margin-top: 10px;
}
.box > .box-title {
  font-weight: bold;
  padding: 5px;
}
.box > .box-body {
  min-height: 150px;
  background-color: #fafafa;
}

.routes,
.route {
  background-color: white;
}

.route:not(:first-child) {
  margin-top: 10px;
}
.route > div {
  padding: 5px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f7f7f7;
}
.route > div > b {
  font-weight: normal;
}
.route-time {
  float: right;
  color: #ccc;
  font-size: 12px;
  padding: 7px 10px;
  height: 100%;
}
.route-time:before {
  content: "\e8a9";
  margin-right: 5px;
  font-family: "iconfont" !important;
}

.route > div > b:not(:first-child):before {
  content: "\e8ca";
  margin: 0 5px;
  font-family: "iconfont" !important;
}

.route-title {
  margin-top: 5px;
}
.route-title:after {
  content: "";
  clear: both;
}
.route-title > i {
  font-size: 22px;
  margin-left: 5px; 
  color: #6bc1f9
}
.route-title > p {
  margin-left: 10px;
  padding: 0 10px;
  position: relative;
  display: inline-block;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-left: none;
  top: -4px;
}
.route-title > p:before {
    content: "";
    position: absolute;
    left: -12px;
    top: -1px;
    border-top: 12px dashed transparent;
    border-bottom: 12px dashed transparent;
    border-right: 12px solid #d4d4d4;
}
.route-title > p:after {
    content: "";
    position: absolute;
    left: -10.5px;
    border-top: 11px solid transparent;
    border-bottom: 11px solid transparent;
    border-right: 11px solid #fff;
    top: 0px;
}

.route-body {
  margin: 0 0 0 20px;
}


.route-body > p:nth-of-type(2) {
  font-size: 13px;
  color: #aaa;
}

.route-note > p {
  font-size: 12px;
  color: #aaa;
}

</style>
