<template>
  <section class="section-weekly-forecast">
    <div>
      <!-- UNIT TOGGLE -->
    </div>
    <ul class="weekly-forecast-wrapper">
      <li
        class="weekly-forecast"
        v-for="(forecast, index) in futureForecast"
        :key="index"
        :data-key="index"
      >
        <h3 class="weekly-forecast-heading" v-if="index === 0">Tomorrow</h3>
        <h3 class="weekly-forecast-heading" v-else>
          {{ forecast.datetime | formatDate }}
        </h3>
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

    <h2 class="weekly-forecast-today-header">Today's Highlights</h2>
    <ul class="weekly-forecast-today">
      <li class="highlight">
        <h3 class="highlight-header">Wind status</h3>
        <p class="highlight-content">
          <span>{{ todaysForecast.wind_spd }}</span> mph
        </p>
        <!-- ALT DATA DISPLAY COMPONENT -->
        <!-- compass arrow -> & wind direction ie. WSW, NE,... -->
      </li>
      <li class="highlight">
        <h3 class="highlight-header">Humidity</h3>
        <p class="highlight-content">
          <span>{{ todaysForecast.precip }}</span
          >%
        </p>
        <!-- ALT DATA DISPLAY COMPONENT -->
        <!-- Percentage progress bar -->
      </li>
      <li class="highlight">
        <h3 class="highlight-header">Visibility</h3>
        <p class="highlight-content">
          <span>{{ todaysForecast.vis }}</span> miles
        </p>
      </li>
      <li class="highlight">
        <h3 class="highlight-header">Air Pressure</h3>
        <p class="highlight-content">
          <span>{{ todaysForecast.pres | roundTemp }}</span> mb
        </p>
      </li>
    </ul>
    <footer class="section-footer">
      <p>
        created by
        <a href="https://devchallenges.io/portfolio/HermanLD">Herman Dardon</a>
        @ <a href="https://devchallenges.io">DevChallenges.io</a>
      </p>
    </footer>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import "./week-forecast.css";

export default {
  methods: {
    getStatusImg(iconCode) {
      return require(`../../assets/images/${iconCode}.png`);
    },
  },
  computed: {
    ...mapGetters({
      todaysForecast: "getTodaysForecast",
      futureForecast: "getFutureForecast",
      tempUnit: "getFahOrCelc",
    }),
  },
  filters: {
    formatDate(rawDate) {
      let date = new Date(rawDate);
      let dateStr = date.toDateString();
      let dateArr = dateStr.split(" ");
      return `${dateArr[0]}, ${dateArr[2]} ${dateArr[1]}`;
    },
    roundTemp(temp) {
      return Math.round(temp);
    },
  },
};
</script>

<style></style>
