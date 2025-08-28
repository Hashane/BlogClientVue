<script>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import {watch} from "vue";
import BlogPostCard from "@/components/BlogPostCard.vue";

export default {
  components: {BlogPostCard},
  setup () {
    const { result, loading, error } = useQuery(gql`
      query{
  posts {
    data {
      title
      body
      created_at
      id
    }
  }
}
    `)

    watch(result, (val) => console.log('result', val.posts.data))
    watch(error, (val) => console.log('error', val))

    return {
      result,
      loading,
      error,
    }
  },
}
</script>

<template>
  <div v-if="!loading && !error && (!result?.posts?.data || result.posts.data.length === 0)">
    No posts found.
  </div>
  <div v-else-if="error">{{ error.message }}</div>
  <section class="blog-list max-w-7xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h1>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <BlogPostCard v-for="post in result?.posts?.data" :key="post.id" :post="post" />
    </div>
  </section>

</template>

