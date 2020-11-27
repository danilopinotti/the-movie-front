<template>
  <div>
    <vue-snotify></vue-snotify>
    <div class="bg-indigo-100 grid grid-cols-1 lg:grid-cols-2">
      <div class="bg-blue-900 lg:min-h-screen lg:flex lg:items-center p-8 sm:p-12">
        <div class="flex-grow justify-center items-center">
          <Logo class="h-48 w-48 m-auto"></Logo>
          <h1 class="text-white text-center text-2xl sm:text-5xl mb-2">
            Seja bem vindo(a)
          </h1>
          <p class="text-center text-blue-200 sm:text-lg">
            Faça seu login para começar
          </p>
        </div>
      </div>
      <div class="lg:min-h-screen lg:flex lg:items-center p-12 lg:p-24 xl:p-48">
        <div class="flex-grow bg-white shadow-xl rounded border-gray-300 p-8">
          <Nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
}
</script>

<style scoped>

</style>
