<template>
  <label class="app-toggle" @click="toggleUnit(checked)">
    <input class="sr-only" type="checkbox" v-model="checked" />
    <span class="app-toggle-celcius" :data-isChecked="checked"
      ><span class="unit-label">°C</span></span
    >
    <span class="app-toggle-fahrenheit" :data-isChecked="!checked"
      ><span class="unit-label">°F</span></span
    >
  </label>
</template>

<script>
import "./app-toggle.css";

export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleUnit(selectedUnit) {
      this.$store.dispatch("toggleUnit", selectedUnit);
    },
  },
};
</script>
