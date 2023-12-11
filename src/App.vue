<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="https://localhost:3000/survey-results">Results</a>
        </div>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/survey" @click.native="refresh">Survey</router-link>
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

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    // Just use them normally in the route config
    { path: "/survey", component: Survey }
  ],
});

export default {
  name: "app",
  router: router,  
  methods: {
      refresh() {
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
