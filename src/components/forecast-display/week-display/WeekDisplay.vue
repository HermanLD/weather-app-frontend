<template>
  <ul class="week-display">
    <li
      class="week-display-card"
      v-for="(forecast, index) in futureForecast"
      :key="index"
      :data-key="index"
    >
      <h1 class="week-display-heading" v-if="index === 0">Tomorrow</h1>
      <h1 class="week-display-heading" v-else>
        {{ forecast.datetime | formatDate }}
      </h1>
      <img
        class="week-display-icon"
        :src="getStatusImg(forecast.weather.icon)"
      />
      <div class="week-display-temp">
        <span>{{ forecast.high_temp | roundTemp }}{{ tempUnit }}</span
        ><span>{{ forecast.low_temp | roundTemp }}{{ tempUnit }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
import "./week-display.css";
import formatDate from "../../../utils/filterDate";
import roundTemp from "../../../utils/filterRoundNum";

export default {
  filters: {
    formatDate,
    roundTemp,
  },
  computed: {
    futureForecast() {
      return this.$store.getters.getFutureForecast;
    },
    tempUnit() {
      return this.$store.getters.getFahOrCelc;
    },
  },
  methods: {
    getStatusImg(imgURL) {
      return require(`../../../assets/images/${imgURL}.png`);
    },
  },
};
</script>
