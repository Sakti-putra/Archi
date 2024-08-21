<template>
  <div>
    <label for="inputField" class="block text-sm font-medium text-gray-700">Input:</label>
    <input
      id="inputField"
      type="text"
      v-model="inputValue"
      @input="updateValue"
      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  methods: {
    updateValue() {
      this.$emit('input', this.inputValue);
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    }
  }
};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
