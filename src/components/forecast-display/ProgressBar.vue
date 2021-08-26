<template>
  <div class="progressbar">
    <div class="progressbar-meter" :style="{ width: `${humPercent}%` }"></div>
    <span class="marker-0">0</span><span class="marker-50">50</span
    ><span class="marker-100">100</span><span class="marker-perc">%</span>
  </div>
</template>

<script>
export default {
  props: {
    humPercent: {
      type: Number,
    },
  },
};
</script>
<style>
.progressbar,
.progressbar-meter {
  height: 0.8rem;
  border-radius: 100px;
}

.progressbar {
  position: relative;
  margin: 2rem auto 0;
  width: 23rem;
  background-color: var(--clr-white);
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
}

.progressbar-meter {
  background-color: var(--clr-yellow);
}

.progressbar > [class^="marker"] {
  --top-bottom-pos: -1.6rem;
  --left-right-pos: 0;
  position: absolute;
}

.progressbar > [class^="marker"]:not(:last-child) {
  top: var(--top-bottom-pos);
}

.progressbar > .marker-0 {
  left: var(--left-right-pos);
}

.progressbar > .marker-50 {
  transform: translate(-50%, 0);
}

.progressbar > .marker-100,
.progressbar > .marker-perc {
  right: var(--left-right-pos);
}

.progressbar > .marker-perc {
  bottom: var(--top-bottom-pos);
}
</style>
