<template>
  <div class="flex flex-1" :title="'Nota ' + rate + '/10'">
    <StarIcon v-for="index in 5"
              :key="index"
              class="h-4 w-4 flex"
              :class="{
                    'text-yellow-600': index < (rate/2),
                    'text-gray-400': index >= (rate/2),
                  }">
    </StarIcon>
  </div>
</template>

<script>
export default {
  name: "MovieRating",
  props: {
    rate: Number,
  },
}
</script>
