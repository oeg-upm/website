/* eslint-disable */
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './assets/style/global.css'


import NotFound from './views/404.vue'
import Home from './views/home.vue'
import News from './views/news.vue'
import singlenewview from './views/singleNewView.vue'
import awards from './views/awards.vue'
import award from './views/award.vue'
import Archive from './views/archive.vue'
import Projects from './views/projects.vue'
import Events from './views/events.vue'
import History from './views/history.vue'
import Team from './views/team.vue'
import Worker from './views/worker.vue'
import ResearchAreas from './views/researchareas.vue'
import Area from './views/area.vue'
import Education from './views/education.vue'
import Resources from './views/resources.vue'
import JoinUs from './views/joinus.vue'
import JoinUsCategory from './views/joinuscategory.vue'
import Project from './views/project.vue'
import UseCases from './views/usecases.vue'
import AdminPanel from './views/adminPanel.vue'
library.add(fab)



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue);

const routes =  {
  '/': Home,
  '/comunication/news': News,
  '/comunication/new':singlenewview,
  '/comunication/awards':awards,
  '/comunication/award':award,
  '/comunication/archive':Archive,
  '/research/projects':Projects,
  '/events/scientificEvents':Events,
  '/events/socialEvents':Events,
  '/aboutUs/history':History,
  '/aboutUs/team':Team,
  '/aboutUs/team/worker':Worker,
  '/research/research-areas':ResearchAreas,
  '/research/research-areas/area':Area,
  '/education/oficial':Education,
  '/education/mooc':Education,
  '/education/profissional':Education,
  '/resources/ontologies':Resources,
  '/resources/linkedData':Resources,
  '/resources/technology':Resources,
  '/resources/services':Resources,
  '/joinus':JoinUs,
  '/joinus/category':JoinUsCategory,
  '/research/projects/project':Project,
  '/useCases':UseCases,
  '/admin':AdminPanel



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