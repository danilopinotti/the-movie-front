<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center w-full">
          <div class="flex-shrink-0">
            <Logo class="h-12 w-12"></Logo>
          </div>
          <div class="w-full flex justify-between items-center">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <NuxtLink to="/" class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                          :class="{
                            'bg-gray-900': $route.path == '/',
                          }">
                  Populares
                </NuxtLink>
                <NuxtLink to="/for-you"
                          class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                          :class="{
                            'bg-gray-900': $route.path == '/for-you',
                          }">
                  Recomendado para você
                </NuxtLink>
              </div>
            </div>
            <div class="flex text-white items-center">
              <img class="rounded-full h-12" :src="profileImagePath" alt="Você">
              <span @click="logout"
                    class="m-3 px-2 py-1 border border-gray-700 hover:border-gray-800 rounded cursor-pointer hover:bg-gray-900 shadow-sm font-bold">
                Sair
              </span>
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

  computed: {
    profileImagePath() {
      if (this.$auth.user) {
        const gravatarHash = this.$auth.user.avatar.gravatar.hash;
        return 'https://www.gravatar.com/avatar/' + gravatarHash;
      }
    },
  },

  methods: {
    logout() {
      this.$auth
          .logout()
          .then(() => this.$router.push('/login'));
    },
  },
}
</script>

<style scoped>

</style>
