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

<style>
.app-toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4.6rem;
}

.app-toggle-celcius,
.app-toggle-fahrenheit {
  --toggle-dim: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--toggle-dim);
  height: var(--toggle-dim);
  border-radius: 50%;
  background-color: #585676;
  color: #e7e7eb;
  font-size: 1.8rem;
  font-weight: var(--fw-bold);
  text-align: center;

  cursor: pointer;
}

.app-toggle-celcius {
  margin-right: 1.2rem;
}

.app-toggle-celcius > .unit-label,
.app-toggle-fahrenheit > .unit-label {
  font-weight: var(--fw-bold);
}

.app-toggle-celcius[data-isChecked="true"],
.app-toggle-fahrenheit[data-isChecked="true"] {
  background-color: #e7e7eb;
  color: #110e3c;
}
</style>
