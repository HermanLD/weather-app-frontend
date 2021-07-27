<template>
  <nav class="navigation">
    <ul>
      <li class="navigation-dropdown">
        <button
          type="button"
          aria-expanded="false"
          aria-controls="dropdown-search"
        >
          Search for places
        </button>
        <ul class="dropdown-search" id="dropdown-search">
          <li>
            <!-- SEARCH COMPONENT -->
          </li>
          <!-- SEARCH HISTORY LIST-ITEMS -->
        </ul>
      </li>
      <li><!-- CURRENT LOCATION BUTTON --></li>
    </ul>
  </nav>
</template>

<script>
import "./navigation.css";

export default {};
</script>
