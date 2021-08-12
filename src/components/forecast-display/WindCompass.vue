<template>
  <div class="wind-compass">TEST COMPASS: {{ directionDegrees }}</div>
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
};
</script>
