/* eslint-disable */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './assets/style/global.css'

import NotFound from './views/404.vue'
import Home from './views/home.vue'
import About from './views/about.vue'
import News from './views/news.vue'
import singlenewview from './views/singleNewView.vue'
import awards from './views/awards.vue'
import award from './views/award.vue'
import Archive from './views/archive.vue'
import Projects from './views/projects.vue'
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);

const routes =  {
  '/': Home,
  '/about': About,
  '/comunication/news': News,
  '/comunication/new':singlenewview,
  '/comunication/awards':awards,
  '/comunication/award':award,
  '/comunication/archive':Archive,
  '/research/projects':Projects
}
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})