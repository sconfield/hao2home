import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import AppNav from './AppNav'
=======
import AppNav from './components/AppNav'
>>>>>>> origin/master
import AppWall from './components/AppWall'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { AppNav }
});

var home = Vue.extend({
   template: '<h1>welcome here!</h1>'
});

var acd = Vue.extend({
  template: '<h1>AutoACD</h1>'
});

Vue.use(VueRouter);
var router = new VueRouter({
  history: false,
  root: '/'
});
router.map({
  '/': {
    component: home
  },
  'acd': {
    component: acd
  },
  '/wall': {
    component: AppWall
  }
});
var App = Vue.extend();
router.start(App, 'body');
