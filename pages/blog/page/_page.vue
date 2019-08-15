<template>
  <h1>blog paginated: {{ page }}</h1>
</template>
<script>
export default {
  data() {
    return {
      page: this.$route.params.page
    }
  }
}
</script>
