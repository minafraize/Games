<template>

  <b-container>

    <div class="sec-games">
      <h2 class="mb-4 text-capitalize">latest games</h2>
      <Games />
    </div>

    <div class="sec-games">
      <h2 class="mb-4 text-capitalize">Most recommended games</h2>
      <Games />
    </div>

    <div class="sec-games">
      <h2 class="mb-4 text-capitalize">Most popular games</h2>
      <Games />
    </div>

  </b-container>

</template>

<script>

import Games from "./games";

export default {
  components: {
    Games,
  },
};

</script>

<style>

.sec-games:first-of-type {
  margin-top: 120px;
}
.sec-games {
  margin: 50px 0;
}

/* Media Query for this component */
@media only screen and (max-width: 600px) {
  .sec-games:first-of-type {
    margin-top: 220px;
  }
}

</style>
