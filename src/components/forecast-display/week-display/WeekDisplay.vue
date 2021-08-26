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

<style>
.week-display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  column-gap: 2.6rem;
  row-gap: 3.2rem;
}

.week-display-card {
  --space-y: 1.8rem;
  padding: var(--space-y) 0;
  background-color: var(--clr-cmp-bg);
  text-align: center;
}

.week-display-temp,
.week-display-heading {
  font-size: 1.6rem;
}

.week-display-heading {
  font-weight: var(--fw-reg);
  margin-bottom: 1rem;
}

.week-display-temp > span:last-child {
  margin-left: 1.6rem;
  color: var(--clr-secondary-text);
}

.week-display-icon {
  width: 6.6rem;
  margin-bottom: 3.2rem;
}
</style>
