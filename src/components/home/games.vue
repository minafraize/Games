<template>

  <div class="games-cont">
    <div class="games" v-bind:key="game.index" v-for="game in games">
      <div id="nav" class="game">
        <router-link v-bind:to="'/game/' + game.id">
          <img class="img-fluid" :src="require(`../../assets/${game.img}`)" />
          <h5 class="mb-0 text-capitalize mt-3 text-center">{{ game.name }}</h5>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      games: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/games")
      .then((response) => {
        this.games = response.data;
      })
      .catch((error) => console.log(error));
  },
};

</script>

<style scoped>

.games-cont {
  background: #fff;
  overflow: hidden;
  padding: 20px 0;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
    0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
}
.games-cont .games .game {
  float: left;
  width: 23%;
  margin: 0 1%;
}
.games-cont .games .game a {
  color: #222;
  transition: all 0.3s ease-in-out;
}
.games-cont .games .game a:hover {
  color: #28ae4e;
}

/* Media Query for this component */
@media only screen and (max-width: 992px) {
  .games-cont .games .game {
    width: 48%;
    margin-bottom: 15px;
  }
}
@media only screen and (max-width: 691px) {
  .games-cont .games .game {
    width: 98%;
    margin-bottom: 15px;
  }
}
@media only screen and (max-width: 600px) {
  .sec-games h2{
    font-size: 25px !important;
  }
}

</style>
