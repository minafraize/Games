<template>

  <div class="search">
    <input
      class="search-inpt"
      type="text"
      v-model="search"
      placeholder="Search for game"
    />
    
    <div class="games-result" v-if="search !== ''">
      <div v-for="game in filteredGames" :key="game.id">
        <h5 class="mb-3 text-truncate">
          <router-link v-bind:to="'/game/' + game.id"
            >{{ game.name }}
          </router-link>
        </h5>
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
      search: "",
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

  computed: {
    filteredGames: function () {
      return this.games.filter((game) => {
        return game.name.match(this.search);
      });
    },
  },
};

</script>

<style scoped>

.search {
  width: 100%;
}
.search .search-inpt {
  background: #fff;
  background-clip: padding-box;
  border: 1px solid #cdcdcd;
  border-color: rgba(0, 0, 0, 0.15);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 9px 10px;
  outline: none;
}
.search .games-result {
  width: 100%;
  position: absolute;
  z-index: 5;
  top: 60px;
  background: #fff;
  padding: 20px 20px 5px 20px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
.search .games-result h5 a {
  color: #222;
  transition: all 0.3s ease-in-out;
}
.search .games-result h5 a:hover {
  color: #28ae4e;
}

</style>

