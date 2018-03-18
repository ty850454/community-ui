<template>
  <div id="app">
    <router-view class="view"></router-view>
    <tabbar>
        <tabbar-item>
          <i slot="icon" class="iconfont icon-jingxuan"></i>
          <span slot="label">精选</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <i slot="icon" class="iconfont icon-hangcheng"></i>
          <span slot="label">行程</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
          <i slot="icon" class="iconfont icon-bangzhu"></i>
          <span slot="label">帮助</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}
.weui-tabbar__icon > .iconfont {
  line-height:normal
}
.weui-tabbar {
  position: fixed !important;
}
.view {
  margin-bottom: 60px;
}
</style>
