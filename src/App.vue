<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/survey" @click.native="refresh">Survey</router-link>
          </li>
          <li>
            <router-link to="/results">Results</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import "bootstrap/dist/css/bootstrap.css";

Vue.use(VueRouter);

const Home = () => import("./views/Home.vue");
const Survey = () =>
  import(/* webpackChunkName: "survey" */ "./views/Survey.vue");
const Results = () => import("./views/Results.vue");

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    // Just use them normally in the route config
    { path: "/survey", component: Survey },
    { path: "/results", component: Results }
  ],
});

export default {
  name: "app",
  router: router,  
  methods: {

      // refresh method provides refresh functionality when clicking the survey button in the nav bar...
      refresh() {

          // ...if the current page is the survey page after having submitted a survey
          if (window.location.href.indexOf("survey") !== -1 && this.$el.querySelectorAll('input').length == 0) {
              location.reload();
          }

      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h1+span {
  padding: 0 20px;
}
</style>
