<template>
  <section class="forecast-main">
    <!-- NAVIGATION AND DROPDOWN -->
    <app-nav />

    <div class="forecast-main-display">
      <img
        class="forecast-main-display-icon"
        :src="imgSrcCode(todaysForecast.weather.icon)"
        alt="Weather status icon"
      />
    </div>
    <div class="forecast-main-data">
      <p class="temp">
        <span class="temp-data">{{ todaysForecast.temp | roundTemp }}</span
        >{{ tempUnit }}
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

<style>
.forecast-main {
  padding-bottom: 2.1rem;
  background-color: var(--clr-cmp-bg);
  color: hsl(243, 10%, 66%);
  text-align: center;

  overflow: hidden;
}

.forecast-main-display {
  --margin-sides: -1.2rem;
  position: relative;
  margin-right: var(--margin-sides);
  margin-left: var(--margin-sides);
}

/*? "Fake" background to style w/o affecting content (i.e. icon) */
.forecast-main-display::after {
  content: "";
  position: absolute;
  /*? Shorthand for top, right, bottom, left  */
  inset: 0;

  background-image: url("../../assets/images/Cloud-background.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  opacity: 0.3;
}

.forecast-main-display-icon {
  --img-sizing: 15rem;
  height: var(--img-sizing);
  width: var(--img-sizing);
  margin: 8rem 0;
}

.forecast-main-data {
  font-size: 1.8rem;
}

.forecast-main-data > .temp {
  font-size: 4.8rem;
}

.forecast-main-data .temp-data {
  color: hsl(240, 9%, 91%);
  font-size: 15.6rem;
}

.forecast-main-data > .description {
  font-size: 3.6rem;
  margin-bottom: 4.8rem;
}

.forecast-main-data > .date {
  margin-bottom: 3.6rem;
}

.forecast-main-data .date-divide {
  --margin-sides: 1.6rem;
  margin-right: var(--margin-sides);
  margin-left: var(--margin-sides);
}

.forecast-main-data .map-marker-icon {
  margin-right: 0.9rem;
}

.forecast-main-data > .curr-location {
  margin-bottom: 8.4rem;
}

@media (min-width: 1020px) {
  .forecast-main {
    flex-grow: 1;
    height: 100vh;
  }
  .forecast-main-data > .temp {
    margin-bottom: 8.6rem;
  }
  .forecast-main-data > .description {
    margin-bottom: 8.6rem;
  }
}
</style>
