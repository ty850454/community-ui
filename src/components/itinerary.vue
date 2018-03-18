<template>
  <div class="itinerary">
    <div class="itinerary-img">
      <img :src="src">
    </div>
    <div class="itinerary-text">
        <p>{{title}}</p>
        <p>{{desc}}</p>
        <p>￥{{price}}</p>
    </div>
    <div class="itinerary-tag">{{tag}}</div>
    <a :href="url">查看详情</a>
  </div>
</template>

<script>
export default {
  name: 't-itinerary',
  data () {
    return {
    }
  },
  props: ['tag', 'title', 'desc', 'price', 'url', 'src']
}
</script>

<style>
.itinerary {
    margin: 0 0 10px;
    position: relative;
}
.itinerary-img {
    width: 100%;
    height: 150px;
    background-color: cadetblue;
    overflow:hidden;
}
.itinerary-img> img {
    width: 100%;
}
.itinerary-text {
    padding: 0 5px;
    height: 70px;
    background-color: white;
}

.itinerary-text > p:nth-child(2) {
    font-size: 12px;
    color: gray;
}
.itinerary-text > p:nth-child(3) {
    color: red;
}

.itinerary > a {
    position: absolute;
    right: 7px;
    bottom: 7px;
    background-color: red;
    border-radius: 3px;
    padding: 5px 10px;
    color: white;
    font-size: 12px;
}
.itinerary-tag {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    background-color: gold;
    padding: 0 10px;
    line-height: 20px;
}
</style>
