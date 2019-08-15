<template>
  <button class="button">{{ block.content }}</button>
</template>
<script>
export default {
  props: {
    block: Object
  }
}
</script>
<style scoped>
.button {
  outline: none;
  border: 0px;
  /* change this */
  background: #6849fc;
  padding: 8px;
  border-radius: 3px;
  min-width: 15px;
  height: 40px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

.button:active {
  border: 0px;
  outline: none;
}
</style>
