<template>
  <div class="blogs">
    <blog-post
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="blog-post"
      @click.native="toBlog(post)"
    />
  </div>
</template>
<script>
import { mapToComponents } from '~/utils/transformers'
import BlogPost from '~/components/BlogPost'

export default {
  components: {
    BlogPost
  },
  data() {
    return {
      posts: []
    }
  },

  async asyncData({ app }) {
    // make tipe calls here
    const content = await app.$tipe.getBlogPost()

    const posts = content.data.data.map((post) => {
      return {
        name: post.name,
        id: post.id,
        searchParam: post.searchParam,
        sections: mapToComponents(post.sections)
      }
    })
    return { posts }
  },
  methods: {
    toBlog(blog) {
      console.log(blog)
      this.$router.push({
        name: 'blog-title',
        params: { title: blog.searchParam }
      })
    }
  }
}
</script>
<style scoped>
.blogs {
  padding: 30px 100px;
}

.blog-post {
  margin-bottom: 50px;
  cursor: pointer;
}
</style>
