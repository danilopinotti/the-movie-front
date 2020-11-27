<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
    <img class="w-full" :src="authenticatedUrl(movie.poster_path)" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ movie.title }}</div>
      <div class="flex">
        <div class="flex flex-1" :title="'Nota ' + movie.vote_average + '/10'">
          <StarIcon v-for="index in 5"
                    :key="index"
                    class="h-4 w-4 flex"
                    :class="{
                    'text-yellow-600': index < (movie.vote_average/2),
                    'text-gray-400': index >= (movie.vote_average/2),
                  }">
          </StarIcon>
        </div>
        <div class="text-right font-bold text-gray-900">
          {{ formattedDate(movie.release_date) }}
        </div>
      </div>
    </div>
    <div class="px-6 py-4 flex">
      <NuxtLink :to="'movie/' + movie.id"
                class="text-center p-4 w-full border rounded border-gray-800 font-bold bg-gray-800 text-white">
        Ver detalhes
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },

  methods: {
    authenticatedUrl(url) {
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
