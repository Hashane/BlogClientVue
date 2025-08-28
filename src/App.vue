<script setup>
import BlogList from '@/components/BlogList.vue'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <!-- Root container: full viewport height, column layout -->
  <div class="min-h-screen flex flex-col bg-gray-50">

    <!-- Header -->
    <header class="bg-white shadow">
      <Navbar/>
    </header>

    <!-- Main content -->
    <main class="flex-1 w-full px-6 py-10">
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
