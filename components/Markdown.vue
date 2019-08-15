<template>
  <div v-html="content" />
</template>
<script>
import Marked from 'marked'
const renderer = new Marked.Renderer()

export default {
  props: {
    markdown: {
      type: String,
      default() {
        return ''
      }
    },
    block: Object
  },
  computed: {
    content() {
      Marked.setOptions({
        renderer,
        gfm: true
      })
      return Marked(this.markdown || this.block.content || '')
    }
  }
}
</script>
