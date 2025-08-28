<script setup>
defineProps({
  post: Object
})

</script>

<template>
  <article class="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col">
    <!-- Image -->
    <img :src="post.image" alt="Post image" class="h-48 w-full object-cover">

    <!-- Content -->
    <div class="p-5 flex flex-col flex-1">
      <h2 class="text-xl font-semibold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer">
        {{ post.title }}
      </h2>
      <p class="text-gray-600 text-sm flex-1">
        {{ post.body }}
      </p>

      <!-- Meta -->
      <div class="mt-4 text-xs text-gray-500 flex justify-between items-center">
        <span>By {{ post.author }}</span>
        <span>{{ post.date }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>