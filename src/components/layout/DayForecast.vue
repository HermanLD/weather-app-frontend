<template>
  <section class="forecast-daily">
    <!-- NAVIGATION AND DROPDOWN -->
    <app-nav />

    <div class="forecast-daily-display">
      <img src="../../assets/images/Shower.png" />
    </div>
    <div class="forecast-daily-data">
      <p class="temp">
        {{ todaysForecast.temp | roundTemp
        }}<span class="temp-unit">{{ tempUnit }}</span>
      </p>
      <p class="description">{{ todaysForecast.weather.description }}</p>
      <p class="date">
        Today<span class="date-divide">•</span
        >{{ todaysForecast.datetime | formatDate }}
      </p>
      <p class="curr-location">
        <font-awesome-icon
          class="map-marker-icon"
          :icon="['fas', 'map-marker-alt']"
        />{{ forecastLocation }}
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "./Navigation.vue";
import "./day-forecast.css";

export default {
  components: {
    "app-nav": Navigation,
  },
  methods: {
    dispatchFetchForecast() {
      this.$store.dispatch("fetchForecast");
    },
  },
  computed: {
    ...mapGetters({
      todaysForecast: "getTodaysForecast",
      forecastLocation: "getCurrLocation",
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
