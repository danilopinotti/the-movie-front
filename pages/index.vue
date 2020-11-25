<template>
  <div class="p-24">

  </div>
</template>

<script>
export default {
  async asyncData({$axios}) {
    this.discoveredMovies = await $axios.$get('/discover/movie')
  }
}
</script>

<style>
</style>
