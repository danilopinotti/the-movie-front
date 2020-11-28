<template>
  <div>
    <div class="w-screen z-0 h-64 bg-cover bg-center"
         :style="{backgroundImage: `url('`+fullBackdropPath(movie.backdrop_path)+`')`}"
    >
    </div>
    <div class="w-full z-10 h-screen bg-gray-200 px-32 py-4 flex">
      <div class="w-1/3">
        <img class="w-full" :src="fullPosterPath(movie.poster_path)" alt="">
      </div>
      <div class="w-2/3 p-12">
        <div class="font-black text-5xl">{{ movie.title }}</div>
        <div class="flex">
          <MovieRating :rate="movie.vote_average"></MovieRating>
        </div>
        <div class="font-black">Título original: {{ movie.original_title }}</div>
        <div class="font-black">Gêneros: {{ movieGenres }}</div>
        <div class="pt-4">Sinopse: {{ movie.overview }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from "@/components/StarIcon";
import MovieRating from "@/components/MovieRating";

export default {
  name: "show-movie",
  components: {MovieRating, StarIcon},
  data() {
    return {
      movie: {},
    }
  },

  computed: {
    movieGenres() {
      if (!this.movie.genres) {
        return '-';
      }
      return this.movie.genres
          .map(genre => genre['name'])
          .join(',');
    }
  },

  async fetch() {
    const movieId = this.$route.params.id
    const route = this.$auth.authenticatedUrl(`/movie/${movieId}?language=pt-BR`);

    this.movie = await this.$axios.$get(route);
  },

  methods: {
    fullPosterPath(url) {
      return 'https://image.tmdb.org/t/p/w440_and_h660_face' + url;
    },
    fullBackdropPath(url) {
      return 'https://image.tmdb.org/t/p/original' + url;
    },
  },
}
</script>

<style scoped>

</style>
