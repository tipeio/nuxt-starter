<template>
  <div class="post">
    <section class="title">
      <tipe-content
        v-for="block in post.sections.title.blocks"
        :key="block.id"
        :block="block"
      />
    </section>
    <section class="featImage">
      <tipe-content
        v-for="block in post.sections.featuredImage.blocks"
        :key="block.id"
        :block="block"
      />
    </section>
    <section class="preview">
      <tipe-content
        v-for="block in post.sections.preview.blocks"
        :key="block.id"
        :block="block"
      />
    </section>
  </div>
</template>
<script>
import Content from '~/components/Content'

export default {
  components: {
    tipeContent: Content
  },

  props: {
    post: Object
  }
}
</script>
<style scoped>
.post {
  padding: 20px;
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

.preview {
  text-align: center;
}
</style>
