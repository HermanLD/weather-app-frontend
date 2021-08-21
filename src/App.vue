<template>
  <div class="app-wrapper" id="app">
    <DayForecast />
    <WeekForecast />
  </div>
</template>

<script>
import DayForecast from "./components/layout/DayForecast.vue";
import WeekForecast from "./components/layout/WeekForecast.vue";
import locationPackage from "./utils/locationPackage";

export default {
  name: "App",
  components: {
    DayForecast,
    WeekForecast,
  },
  computed: {
    locationAllowed() {
      return this.$store.getters.getPermission;
    },
  },
  created() {
    if (this.locationAllowed) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude: ", position.coords.latitude);
          console.log("Longitude: ", position.coords.longitude);

          //? create locationPackage to send w/ coords
          const locQuery = locationPackage(
            position.coords.latitude,
            position.coords.longitude,
            undefined
          );

          this.$store.dispatch("fetchForecast", locQuery);
        },
        (err) => {
          console.warn(`ERROR ${err.code}: ${err.message}`);

          //? create locationPackage to send w/ address
          const locQuery = locationPackage(undefined, undefined, "Reno");

          this.$store.dispatch("fetchForecast", locQuery);
        }
      );
    } else {
      // //? create locationPackage to send w/ address
      const locQuery = locationPackage(undefined, undefined, "Sacramento");
      this.$store.dispatch("fetchForecast", locQuery);
    }
  },
};
</script>

<style>
.app-wrapper {
  display: flex;
  flex-direction: column;
  color: hsl(240, 9%, 91%);
}

@media (min-width: 1120px) {
  .app-wrapper {
    flex-direction: row;
    align-content: stretch;
    flex-grow: 1;
  }
}
</style>
