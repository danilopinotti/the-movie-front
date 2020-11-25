<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <Logo class="h-12 w-12"></Logo>
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
import Logo from "@/components/Logo";
export default {
  name: "Navbar",
  components: {Logo},
}
</script>

<style scoped>

</style>
