<template>

  <b-container>

    <div class="game-detail text-center">
      <img class="img-fluid" :src="require(`../../assets/${game.img}`)" />
      <h4 class="mt-4 mb-3 text-capitalize">{{ game.name }}</h4>
      <p class="pl-4 pr-4">{{ game.des }}</p>
    </div>

    <div class="sec-games">
      <h2 class="mb-4 text-capitalize">Most recommended games</h2>
      <Games />
    </div>

  </b-container>

</template>

<script>

import axios from "axios";
import Games from "../home/games";

export default {
  components: {
    Games,
  },
  data() {
    return {
      id: this.$route.params.id,
      game: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/games/" + this.id)
      .then((response) => {
        this.game = response.data;
      })
      .catch((error) => console.log(error));
  },
};

</script>


<style scoped>

.game-detail {
  margin: 120px 0 50px;
  background: #fff;
  overflow: hidden;
  padding: 20px 0;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
}

/* Media Query for this component */
@media only screen and (max-width: 600px) {
  .game-detail {
    margin-top: 220px;
  }
}

</style>