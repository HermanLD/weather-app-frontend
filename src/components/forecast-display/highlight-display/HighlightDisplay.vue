<template>
  <ul class="highlight-display">
    <li class="highlight-display-item">
      <h2 class="header">Wind status</h2>
      <p class="content">
        <span class="content-highlight">{{
          todaysForecast.wind_spd | roundTemp
        }}</span
        ><span v-if="selectedUnit === 'f'"> mph</span><span v-else> kph</span>
      </p>
      <!-- ALT DATA DISPLAY COMPONENT -->
      <!-- compass arrow -> & wind direction ie. WSW, NE,... -->
      <wind-compass
        :directionDegrees="todaysForecast.wind_dir"
        :cardinalDirection="todaysForecast.wind_cdir"
      />
    </li>
    <li class="highlight-display-item">
      <h2 class="header">Humidity</h2>
      <p class="content">
        <span class="content-highlight">{{ todaysForecast.rh }}</span
        >%
      </p>
      <!-- ALT DATA DISPLAY COMPONENT -->
      <!-- Percentage progress bar -->
      <progress-bar :humPercent="todaysForecast.rh" />
    </li>
    <li class="highlight-display-item">
      <h2 class="header">Visibility</h2>
      <p class="content">
        <span class="content-highlight">{{ todaysForecast.vis }}</span
        ><span v-if="selectedUnit === 'f'"> miles</span><span v-else> Km</span>
      </p>
    </li>
    <li class="highlight-display-item">
      <h2 class="header">Air Pressure</h2>
      <p class="content">
        <span class="content-highlight">{{
          todaysForecast.pres | roundTemp
        }}</span>
        mb
      </p>
    </li>
  </ul>
</template>

<script>
import WindCompass from "../../forecast-display/WindCompass.vue";
import ProgressBar from "../../forecast-display/ProgressBar.vue";
import roundTemp from "../../../utils/filterRoundNum";

export default {
  components: {
    "wind-compass": WindCompass,
    "progress-bar": ProgressBar,
  },
  computed: {
    todaysForecast() {
      return this.$store.getters.getTodaysForecast;
    },
    selectedUnit() {
      return this.$store.getters.getSelectedUnit;
    },
  },
  filters: {
    roundTemp,
  },
};
</script>

<style>
.highlight-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32.8rem, 1fr));
  gap: 3.2rem;
}

.highlight-display-item {
  padding: 2.2rem 0 2.4rem 0;
  background-color: var(--clr-cmp-bg);
  text-align: center;
}

.highlight-display-item > .header {
  font-size: 1.6rem;
}

.highlight-display-item .content {
  font-size: 3.6rem;
  margin-bottom: 1.4rem;
}

.highlight-display-item .content-highlight {
  font-size: 6.4rem;
}
</style>
