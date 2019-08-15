<template>
  <figure class="image-figure">
    <img :src="block.content" class="image-element show-desktop" />
  </figure>
</template>
<script>
export default {
  props: {
    block: Object
  }
}
</script>
