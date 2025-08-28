<script setup>
import BlogList from '@/components/BlogList.vue'
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
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
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer/>

  </div>
</template>

<style scoped>
</style>
