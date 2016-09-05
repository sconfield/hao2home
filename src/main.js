import Vue from 'vue'
import VueRouter from 'vue-router'
import AppNav from './AppNav'
import AppWall from './components/AppWall'

/* eslint-disable no-new */
var home = Vue.extend({
   template: '<h1>welcome here!</h1>'
});

var cad = Vue.extend({
  template: '<h1>AutoCAD</h1>'
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
  'cad': {
    component: cad
  },
  '/wall': {
    component: AppWall
  }
});

router.start(AppNav, 'app-nav');

new Vue({
  el: 'body',
  components: { AppNav }
});
