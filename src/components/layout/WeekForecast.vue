<template>
  <section class="weekly-forecast">
    <div class="weekly-forecast-content">
      <!-- UNIT TOGGLE -->
      <unit-toggle />

      <div class="weekly-forecast-days">
        <!-- WEEK FORECAST DISPLAY -->
        <week-display />
      </div>

      <div class="weekly-forecast-today">
        <h1 class="header">Today's Highlights</h1>
        <!-- HIGHLIGHTS DISPLAY -->
        <highlight-display />
      </div>
    </div>

    <footer class="weekly-forecast-footer">
      <p>
        created by
        <a href="https://devchallenges.io/portfolio/HermanLD">Herman Dardon</a>
        @ <a href="https://devchallenges.io">DevChallenges.io</a>
      </p>
    </footer>
  </section>
</template>

<script>
import WeekDisplay from "../forecast-display/week-display/WeekDisplay.vue";
import HighlightDisplay from "../forecast-display/highlight-display/HighlightDisplay.vue";
import UnitToggle from "../ui/AppToggle.vue";

export default {
  components: {
    "week-display": WeekDisplay,
    "highlight-display": HighlightDisplay,
    "unit-toggle": UnitToggle,
  },
};
</script>

<style>
.weekly-forecast {
  --space-x: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 3;
  padding-top: var(--space-x);
}

.weekly-forecast-content {
  width: 90%;
  max-width: 85rem;
  margin: 0 auto;
}

.weekly-forecast-days {
  margin-bottom: 5.2rem;
}

.weekly-forecast-today > .header {
  margin-bottom: 3.2rem;
  font-size: 2.4rem;
  font-weight: var(--fw-bold);
}

.weekly-forecast-footer {
  margin-top: 9.6rem;
  margin-bottom: 2.4rem;
  text-align: center;
}

@media (min-width: 1020px) {
  .weekly-forecast {
    --space-x: 4.2rem;
  }

  .weekly-forecast-days {
    margin-bottom: 7.2rem;
  }
  .weekly-forecast-content {
    width: 72%;
  }
}
</style>
