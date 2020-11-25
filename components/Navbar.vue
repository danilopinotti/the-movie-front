<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="Workflow">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <NuxtLink to="/" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900">Início</NuxtLink>
              <NuxtLink to="/for-you"
                 class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">Recomendado para você</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped>

</style>
