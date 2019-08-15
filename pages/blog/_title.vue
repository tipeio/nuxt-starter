<template>
  <div class="post">
    <section class="featImage">
      <tipe-content
        v-for="block in content.featuredImage.blocks"
        :key="block.id"
        :block="block"
      />
    </section>
    <section class="title">
      <tipe-content
        v-for="block in content.title.blocks"
        :key="block.id"
        :block="block"
      />
    </section>
    <section class="body">
      <tipe-content
        v-for="block in content.body.blocks"
        :key="block.id"
        :block="block"
      />
    </section>
  </div>
</template>
<script>
import { mapToComponents } from '~/utils/transformers'
import Content from '~/components/Content'

export default {
  components: {
    tipeContent: Content
  },
  data() {
    return {
      content: {}
    }
  },
  async asyncData({ params, app }) {
    // make tipe calls here
    let content = await app.$tipe.getPageParams(params.title)
    if (content) {
      content = mapToComponents(content.data.sections)
      return { content }
    }
    // else {
    //   error({ statusCode: 404, message: 'Post not found' })
    // }
  }
}
</script>
<style scoped>
.post {
  padding: 20px 100px;
}
.title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
}

.featImage {
  text-align: center;
  margin-bottom: 15px;
}

.body {
  padding: 20px 100px;
}
</style>
