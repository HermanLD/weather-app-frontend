<template>
  <div class="wind-compass">
    <font-awesome-icon
      class="wind-compass-icon"
      :style="{ transform: `rotate(${iconSpin}deg)` }"
      :icon="['fas', 'arrow-circle-up']"
    /><span>{{ cardinalDirection }}</span>
  </div>
</template>

<script>
export default {
  props: {
    directionDegrees: {
      type: Number,
    },
    cardinalDirection: {
      type: String,
      default() {
        return "N";
      },
    },
  },
  computed: {
    iconSpin() {
      return Math.round(this.directionDegrees / 10) * 10;
    },
  },
};
</script>

<style>
.wind-compass {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
}

.wind-compass-icon {
  margin-right: 0.8rem;
  font-size: 3rem;
}
</style>
