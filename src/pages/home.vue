<template>
  <div>
    <itinerarys>
      <itinerary v-for="itinerary in itinerarys"
      :key="itinerary.id"
      :title="itinerary.title"
      :desc="itinerary.desc"
      :price="itinerary.price"
      :tag="itinerary.tag"
      :src="itinerary.src"
      />
    </itinerarys>
  </div>
</template>

<script>
import itinerarys from '../components/itinerarys.vue'
import itinerary from '../components/itinerary.vue'
export default {
  name: 'home',
  components: {
    itinerarys,
    itinerary
  },
  data () {
    return {
      itinerarys: []
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.$http.get('./static/datas/luxian.json')
        .then((response) => {
          this.itinerarys = response.data
        })
    })
  }
}
</script>

<style scoped>

</style>
