<template>
  <div class="hero-page">
    <div class="container">
      <div class="copy">
        <section class="header">
          <tipe-content
            v-for="block in content.heroTitle.blocks"
            :key="block.id"
            :block="block"
          />
        </section>
        <section class="actions">
          <tipe-content
            v-for="block in content.tryButton.blocks"
            :key="block.id"
            :block="block"
          />
          <tipe-content
            v-for="block in content.docsButton.blocks"
            :key="block.id"
            :block="block"
          />
        </section>
      </div>
      <div class="header-image">
        <tipe-content
          v-for="block in content.image.blocks"
          :key="block.id"
          :block="block"
        />
      </div>
    </div>
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

  async asyncData({ app }) {
    // make tipe calls here
    let content = await app.$tipe.getHomePage()
    content = mapToComponents(content.data.data[0].sections)
    return { content }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}
.hero-page {
  width: 100vw;
  height: 100vh;
}

.container {
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.copy {
  width: 100%;
}

.header {
  margin-bottom: 20px;
}

.actions {
  display: flex;
}

.actions .button {
  margin-right: 20px;
}

.header-image {
  width: 100%;
  text-align: center;
}
</style>
