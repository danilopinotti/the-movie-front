<template>
  <div class="px-24 py-12 w-full">
    <div class="flex justify-end items-center">
      <div class="w-1/3">
        <span class="block text-gray-800">Buscar: </span>
        <input type="text" class="border w-full border-gray-500 p-2 rounded shadow-sm" v-model="query">
      </div>
    </div>

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

  watch: {
    query() {
      this.$fetch();
    }
  },

  data() {
    return {
      query: undefined,
      discoveredMovies: [],
    }
  },

  async fetch() {
    let route = (this.query)
        ? this.$auth.authenticatedUrl('/search/movie?language=pt-BR&query=' + encodeURI(this.query))
        : this.$auth.authenticatedUrl('/trending/movie/week?language=pt-BR')

    this.discoveredMovies = await this.$axios.$get(route)
  }
}
</script>

<style>
</style>
