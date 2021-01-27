<template>

  <navbar class="navbar">
    <b-container>
      <b-row>
        <b-col sm="3">
          <router-link to="/"
            ><img :src="require('../../assets/logo.png')"
          /></router-link>
        </b-col>

        <b-col sm="6">
          <Search />
        </b-col>

        <b-col sm="3">
          <div class="drop-d-menu text-right">
            <span
              class="font-weight-bold mt-2 text-uppercase d-block"
              @click="toggleMenu = !toggleMenu"
              >menu</span
            >
            <ul class="menu list-unstyled" v-if="toggleMenu">
              <li class="mb-2 text-center text-capitalize">
                <router-link to="/"> home </router-link>
              </li>
              <li class="mb-2 text-center text-capitalize">
                <router-link to="/"> about </router-link>
              </li>
              <li class="text-center text-capitalize">
                <router-link to="/"> contact </router-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </navbar>

</template>

<script>

import Search from "./search";

export default {
  components: {
    Search,
  },
  data: function () {
    return {
      toggleMenu: false,
    };
  },
};

</script>

<style>

.navbar {
  height: 70px;
  position: fixed !important;
  border-bottom: 1px solid #e8e9ed;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
.drop-d-menu {
  cursor: pointer;
  position: relative;
}
.drop-d-menu span {
  font-size: 20px;
}
.drop-d-menu .menu {
  width: 135px;
  position: absolute;
  top: 53px;
  right: -13px;
  z-index: 3;
  background: #fff;
  padding: 20px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12), 0 1px 3px 0 rgba(0, 0, 0, 0.2);
}
.drop-d-menu .menu li a {
  color: #222;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}
.drop-d-menu .menu li a:hover {
  color: #28ae4e;
}
.row {
  width: 100%;
}

/* Media Query for this component */
@media only screen and (max-width: 600px) {
  .navbar {
    height: auto;
    text-align: center;
  }
  .navbar .drop-d-menu,
  .navbar .search {
    margin-top: 15px;
  }
  .navbar .drop-d-menu {
    text-align: center !important;
  }
  .drop-d-menu .menu {
    right: 40px;
  }
}

</style>
