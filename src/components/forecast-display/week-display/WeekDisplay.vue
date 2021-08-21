<template>
  <ul>
    <li
      class="weekly-forecast"
      v-for="(forecast, index) in futureForecast"
      :key="index"
      :data-key="index"
    >
      <h1 class="weekly-forecast-heading" v-if="index === 0">Tomorrow</h1>
      <h1 class="weekly-forecast-heading" v-else>
        {{ forecast.datetime | formatDate }}
      </h1>
      <img
        class="weekly-forecast-icon"
        :src="getStatusImg(forecast.weather.icon)"
      />
      <div class="weekly-forecast-temp">
        <span class="high"
          >{{ forecast.high_temp | roundTemp }}{{ tempUnit }}</span
        ><span class="low"
          >{{ forecast.low_temp | roundTemp }}{{ tempUnit }}</span
        >
      </div>
    </li>
  </ul>
</template>

<script>
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
