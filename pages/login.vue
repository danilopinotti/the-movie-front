<template>
  <div>
    <div class="text-3xl text-center text-gray-700 font-black">
      <span>Login</span>
    </div>

    <form class="flex flex-col w-full mt-4 items-center" @submit.prevent="doLogin">
      <input type="text" placeholder="Seu usuário"
             name="username"
             v-model="login.username"
             class="w-full flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 focus:bg-white focus:border-gray-400 py-2 px-4 mb-4">

      <input type="password" placeholder="Sua senha"
             name="password"
             v-model="login.password"
             class="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 focus:bg-white focus:border-gray-400 py-2 px-4 mb-4">

      <button type="submit"
              :disabled="disabledLoginButton"
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

  data() {
    return {
      disabledLoginButton: false,
      login: {
        username: '',
        password: '',
        request_token: '',
      }
    }
  },

  methods: {
    async doLogin() {
      this.$nuxt.$loading.start();
      this.disabledLoginButton = true;

      try {
        await this.$auth.loginWith('themoviedb', {data: this.login})
        this.$snotify.success('Login realizado com sucesso');
      } catch (err) {
        this.$snotify.error('Falha ao realizar login. Por favor, tente novamente mais tarde.');
      } finally {
        this.$nuxt.$loading.finish();
        this.disabledLoginButton = false;
      }
    },
  },

}
</script>

<style scoped>

</style>
