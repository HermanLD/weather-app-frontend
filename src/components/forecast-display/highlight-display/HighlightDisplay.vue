<template>
  <ul class="highlight-display">
    <li class="highlight">
      <h2 class="highlight-header">Wind status</h2>
      <p class="highlight-content">
        <span>{{ todaysForecast.wind_spd }}</span> mph
      </p>
      <!-- ALT DATA DISPLAY COMPONENT -->
      <!-- compass arrow -> & wind direction ie. WSW, NE,... -->
      <wind-compass />
    </li>
    <li class="highlight">
      <h2 class="highlight-header">Humidity</h2>
      <p class="highlight-content">
        <span>{{ todaysForecast.precip }}</span
        >%
      </p>
      <!-- ALT DATA DISPLAY COMPONENT -->
      <!-- Percentage progress bar -->
      <progress-bar />
    </li>
    <li class="highlight">
      <h2 class="highlight-header">Visibility</h2>
      <p class="highlight-content">
        <span>{{ todaysForecast.vis }}</span> miles
      </p>
    </li>
    <li class="highlight">
      <h2 class="highlight-header">Air Pressure</h2>
      <p class="highlight-content">
        <span>{{ todaysForecast.pres | roundTemp }}</span> mb
      </p>
    </li>
  </ul>
</template>

<script>
import WindCompass from "../../forecast-display/WindCompass.vue";
import ProgressBar from "../../forecast-display/ProgressBar.vue";

export default {
  components: {
    "wind-compass": WindCompass,
    "progress-bar": ProgressBar,
  },
  computed: {
    todaysForecast() {
      return this.$store.getters.getTodaysForecast;
    },
  },
};
</script>
