<template>
  <div class="text" v-html="block.content"></div>
</template>
<script>
export default {
  props: {
    block: Object
  }
}
</script>
<style>
.text h1 {
  font-size: 2.8rem !important;
}
</style>
