<template>
  <div class="p-24">

  </div>
</template>

<script>
export default {
  middleware: 'auth',

  async asyncData({$axios}) {
    this.discoveredMovies = await $axios.$get('/discover/movie')
  }
}
</script>

<style>
</style>
