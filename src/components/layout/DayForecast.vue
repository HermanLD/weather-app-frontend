<template>
  <section class="section-forecast-main">
    <!-- NAVIGATION AND DROPDOWN -->
    <app-nav />

    <div class="forecast-main-display">
      <img :src="imgSrcCode(todaysForecast.weather.icon)" />
    </div>
    <div class="forecast-main-data">
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
import Navigation from "../navigation/Navigation.vue";
import imgSrcCode from "../../utils/imgSrcCode";
import formatDate from "../../utils/filterDate";
import roundTemp from "../../utils/filterRoundNum";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-nav": Navigation,
  },
  methods: {
    imgSrcCode,
  },
  computed: {
    ...mapGetters({
      todaysForecast: "getTodaysForecast",
      forecastLocation: "getCurrLocation",
      tempUnit: "getFahOrCelc",
    }),
  },
  filters: {
    formatDate,
    roundTemp,
  },
};
</script>
