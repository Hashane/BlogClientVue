<script setup>
import BlogPostCard from "@/components/BlogPostCard.vue";
const posts = [
  {
    id: 1,
    title: "Understanding Vue 3 Composition API",
    body: "The Composition API gives developers more flexibility and cleaner code structure...",
    author: "Jane Doe",
    date: "Aug 20, 2025",
    image: "https://picsum.photos/200/300"
  },
  {
    id: 2,
    title: "TailwindCSS Best Practices",
    body: "Learn how to organize your Tailwind utility classes for scalable and maintainable projects...",
    author: "John Smith",
    date: "Aug 22, 2025",
    image: "https://picsum.photos/200/300"
  },
  {
    id: 3,
    title: "Dockerizing Laravel with PostgreSQL",
    body: "Step-by-step guide on setting up Laravel with Docker, Nginx, and PostgreSQL...",
    author: "Alex Lee",
    date: "Aug 25, 2025",
    image: "https://picsum.photos/200/300"
  }
]
</script>

<template>
  <section class="blog-list max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h1>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <BlogPostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<style scoped>

</style>