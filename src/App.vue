<script setup>
import BlogList from '@/components/BlogList.vue'
import ProductListing from '@/components/ProductListing.vue'
</script>

<template>
  <!-- Root container: full viewport height, column layout -->
  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- Header -->
    <header class="bg-white shadow">
      <div class="w-full px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-black-600">My Blog</h1>
        <nav class="space-x-4 text-gray-700 font-medium">
          <a href="#" class="hover:text-indigo-600">Home</a>
          <a href="#" class="hover:text-indigo-600">Blog</a>
          <a href="#" class="hover:text-indigo-600">Products</a>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 w-full px-6 py-10">
      <!-- You can swap components as needed -->
      <!-- <ProductListing /> -->
      <BlogList />
    </main>

    <!-- Footer -->
    <footer class="bg-white shadow mt-auto">
      <div class="w-full px-6 py-4 text-center text-sm text-gray-500">
        © 2025 My Blog-Hashane. All rights reserved.
      </div>
    </footer>

  </div>
</template>

<style scoped>
</style>
