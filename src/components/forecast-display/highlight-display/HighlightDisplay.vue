<template>
  <ul class="highlight-display">
    <li class="highlight-display-item">
      <h2 class="header">Wind status</h2>
      <p class="content">
        <span class="content-highlight">{{ todaysForecast.wind_spd }}</span> mph
      </p>
      <!-- ALT DATA DISPLAY COMPONENT -->
      <!-- compass arrow -> & wind direction ie. WSW, NE,... -->
      <wind-compass />
    </li>
    <li class="highlight-display-item">
      <h2 class="header">Humidity</h2>
      <p class="content">
        <span class="content-highlight">{{ todaysForecast.precip }}</span
        >%
      </p>
      <!-- ALT DATA DISPLAY COMPONENT -->
      <!-- Percentage progress bar -->
      <progress-bar />
    </li>
    <li class="highlight-display-item">
      <h2 class="header">Visibility</h2>
      <p class="content">
        <span class="content-highlight">{{ todaysForecast.vis }}</span> miles
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
import "./highlight-display.css";

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
  filters: {
    roundTemp,
  },
};
</script>
