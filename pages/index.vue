<template>
  <div class="p-24">
    <div class="grid grid-cols-5 gap-10">
      <MovieCard v-for="movie in discoveredMovies.results"
                 :key="movie.id"
                 :movie="movie">
      </MovieCard>
    </div>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard";

export default {
  components: {MovieCard},
  middleware: 'auth',

  async asyncData({$axios, $auth}) {
    let route = $auth.authenticatedUrl('/discover/movie?language=pt-BR');
    return {
      discoveredMovies: await $axios.$get(route)
    }
  }
}
</script>

<style>
</style>
