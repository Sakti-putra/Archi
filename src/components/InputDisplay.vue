<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold">Input yang Diterima</h2>
    <p class="mt-4">{{ inputData }}</p>
  </div>
</template>

<script>
export default {
  name: 'InputDisplay',
  data() {
    return {
      inputData: this.$route.query.input || '' // Mengambil input dari query parameter
    };
  }
};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>