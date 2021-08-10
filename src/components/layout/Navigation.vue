<template>
  <nav class="navigation">
    <ul>
      <li class="navigation-main">
        <!-- NAV TOGGLE -->
        <button
          class="dropdown-toggle"
          type="button"
          aria-controls="dropdown-search"
          :aria-expanded="isExpanded"
          @click="toggleExpandedState"
        >
          Search for places
        </button>

        <!-- DROPDOWN COMPONENT -->
        <ul class="navigation-dropdown" id="dropdown-search">
          <li class="navigation-dropdown-row">
            <button class="close-btn" @click="toggleExpandedState">
              <font-awesome-icon :icon="['fas', 'times']" />
            </button>
          </li>

          <!-- SEARCH COMPONENT -->
          <li class="navigation-dropdown-search">
            <label class="navigation-dropdown-input-wrap"
              ><span class="search-icon"
                ><font-awesome-icon :icon="['fas', 'search']"/></span
              ><input
                class="navigation-dropdown-input"
                type="text"
                v-model="location"
                placeholder="search location"
                @keydown.enter="
                  submitLocationQuery(allowUserLocation, location)
                "
            /></label>
            <button
              class="query-btn"
              @click="submitLocationQuery(allowUserLocation, location)"
            >
              Search
            </button>
          </li>

          <!-- SEARCH HISTORY LIST-ITEMS -->
          <li
            class="search-history"
            v-for="(oldQuery, index) in searchHistory"
            :key="index"
            :data-index="index"
            @click="useOldQuery($event, oldQuery)"
          >
            <span class="search-history-item"
              >{{ oldQuery
              }}<font-awesome-icon
                class="search-history-icon"
                :icon="['fas', 'chevron-right']"
            /></span>
          </li>
        </ul>

        <!-- CURRENT LOCATION BUTTON -->
        <button
          class="current-location-toggle"
          @click="toggleAllowUserlocation"
        >
          <font-awesome-icon :icon="['fas', 'crosshairs']" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import locationPackage from "../../utils/locationPackage";
import "./navigation.css";

export default {
  data() {
    return {
      location: "",
      searchHistory: ["London", "Reno", "San Francisco"],
      isExpanded: "false",
    };
  },
  computed: {
    allowUserLocation() {
      return this.$store.getters.getPermission;
    },
  },
  methods: {
    useOldQuery(event, oldQuery) {
      const itemIndex = parseInt(event.target.parentElement.dataset.index);
      this.searchHistory.splice(itemIndex, 1);
      this.location = oldQuery;
      document.querySelector(".navigation-dropdown-input").focus();
    },
    toggleExpandedState() {
      this.isExpanded = this.isExpanded === "false" ? "true" : "false";
    },
    toggleAllowUserlocation() {
      if (this.allowUserLocation === false) {
        this.submitLocationQuery(!this.allowUserLocation, this.location);
      }
      //? dispatch action to mutate permission
      this.$store.dispatch("togglePermission");
    },
    submitLocationQuery(permission, selectLocation) {
      let locationQuery;

      if (permission && selectLocation === "") {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            //? create locationPackage to send w/ coords
            locationQuery = locationPackage(
              position.coords.latitude,
              position.coords.longitude,
              undefined
            );
            this.$store.dispatch("fetchForecast", locationQuery);
          },
          (err) => console.warn(`ERROR ${err.code}: ${err.message}`)
        );
      } else {
        //? create locationPackage to send w/ address
        locationQuery = locationPackage(undefined, undefined, this.location);
        this.$store.dispatch("fetchForecast", locationQuery);

        //? Push Location Query into history
        this.searchHistory.push(this.location);

        //? Reset location
        this.location = "";
      }
    },
  },
};
</script>
