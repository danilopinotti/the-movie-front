<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
    <img class="w-full" :src="fullPosterPath(movie.poster_path)" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
      <div class="flex">
        <MovieRating :rate="movie.vote_average"></MovieRating>
        <div class="text-right font-bold text-gray-900">
          {{ formattedDate(movie.release_date) }}
        </div>
      </div>
    </div>
    <div class="px-6 py-4">
      <NuxtLink :to="'movie/' + movie.id"
                class="block text-center p-4 w-full border rounded border-gray-800 font-bold bg-gray-800 text-white">
        Ver detalhes
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import MovieRating from "@/components/MovieRating";
export default {
  name: "MovieCard",
  components: {MovieRating},
  props: {
    movie: Object,
  },

  methods: {
    fullPosterPath(url) {
      return 'https://image.tmdb.org/t/p/w440_and_h660_face' + url;
    },

    formattedDate(dateString) {
      let date = new Date(dateString);
      return date.toLocaleDateString('pt-BR');
    }
  },
}
</script>

<style scoped>

</style>
