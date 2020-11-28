<script>
import index from "@/pages/index";

export default {
  extends: index,

  async fetch() {
    let route = (this.query)
        ? this.$auth.authenticatedUrl('/search/movie?language=pt-BR&query=' + encodeURI(this.query))
        : this.$auth.authenticatedUrl('/discover/movie?language=pt-BR')

    this.discoveredMovies = await this.$axios.$get(route)
  }
}
</script>

<style>
</style>
