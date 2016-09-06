import Vue from 'vue'
import VueRouter from 'vue-router'
import AppNav from './AppNav'
import AppWall from './components/AppWall'
import AppHouse from './components/AppHouse'
import AppIndex from './components/AppIndex'

/* eslint-disable no-new */
var about = Vue.extend({
  template: '<h1>about us</h1>'
});

Vue.use(VueRouter);
var router = new VueRouter({
  history: false,
  root: '/'
});
router.map({
  '/': {
    component: AppIndex
  },
  'cad': {
    component: AppHouse
  },
  '/wall': {
    component: AppWall
  },
  '/about': {
    component: about
  }
});

router.start(AppNav, 'app-nav');

new Vue({
  el: 'body',
  components: { AppNav }
});
