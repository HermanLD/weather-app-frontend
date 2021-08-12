<template>
  <section class="section-weekly-forecast">
    <!-- UNIT TOGGLE -->
    <unit-toggle />
    <div class="weekly-forecast-days">
      <!-- WEEK FORECAST DISPLAY -->
      <week-display />
    </div>

    <div class="weekly-forecast-today">
      <h1>Today's Highlights</h1>
      <!-- HIGHLIGHTS DISPLAY -->
      <highlight-display />
    </div>

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
import WeekDisplay from "../forecast-display/week-display";
import HighlightDisplay from "../forecast-display/highlight-display";
import UnitToggle from "../ui/AppToggle.vue";
import "./week-forecast.css";

export default {
  components: {
    "week-display": WeekDisplay,
    "highlight-display": HighlightDisplay,
    "unit-toggle": UnitToggle,
  },
};
</script>
