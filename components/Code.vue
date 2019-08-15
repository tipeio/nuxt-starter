<template>
  <pre v-html="block.content" />
</template>
<script>
export default {
  props: {
    block: Object
  }
}
</script>
