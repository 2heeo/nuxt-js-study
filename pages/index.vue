<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" /> <!-- 요기 붙은 Lazy -->
    <button v-if="!show" @click="showList">Show List</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    showList() {
      this.show = true
    }
  }
}
</script>
