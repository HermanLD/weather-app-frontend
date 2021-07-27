<template>
  <div id="app">
    <DayForecast />
    <WeekForecast />
  </div>
</template>

<script>
import DayForecast from "./components/layout/DayForecast.vue";
import WeekForecast from "./components/layout/WeekForecast.vue";

export default {
  name: "App",
  components: {
    DayForecast,
    WeekForecast,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
}
</style>
