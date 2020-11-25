<template>
  <div>
    <div class="text-3xl text-center text-gray-700 font-black">
      <span>Login</span>
    </div>

    <form class="flex flex-col w-full mt-4 items-center">
      <input type="text" placeholder="Seu usuário"
             class="w-full flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 focus:bg-white focus:border-gray-400 py-2 px-4 mb-4">

      <input type="password" placeholder="Sua senha"
             class="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 focus:bg-white focus:border-gray-400 py-2 px-4 mb-4">

      <button type="button"
              class="bg-teal-600 hover:bg-teal-700 outline-none py-2 px-4 text-white font-semibold rounded-md w-1/3">
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: 'auth',

}
</script>

<style scoped>

</style>
