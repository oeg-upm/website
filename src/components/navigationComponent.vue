<template>
<div style="background:#E5E5E5;">
  <div class="container">
  <b-navbar toggleable="lg">
    <b-navbar-brand><img src="../assets/images/log.png" class="img-fluid" alt=""></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item>Home</b-nav-item>
        <b-nav-item-dropdown v-for="element in elements" :key="element.name" :text="element.name" class="nav-item dropdown">
          <b-dropdown-item v-for="link in element.links" :key="link.name" :href="link.link">{{link.name}}</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Use Cases</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</div>
</template>
<script>
export default {
    name:'navigationcomponent',
    data(){
        return{elements:[]}
    },
    mounted(){
        this.elements = [
            {name:'Comunication', links:[{name:'News', link:'/comunication/news'}, {name:'Awards', link:'/comunication/awards'}, {name:'Archive', link:'/comunication/archive'}]},
            {name:'Events', links:[{name:'Scientific Events', link:'/events/scientificEvents'}, {name:'Social Events', link:'/events/socialEvents'}]},
            {name:'About us', links:[{name:'History', link:'/aboutUs/history'}, {name:'Team', link:'/aboutUs/team'}]},
            {name:'Research', links:[{name:'Research Areas', link:'/research/areas'},{name:'Projects', link:'/research/projects'},{name:'Results', link:'/research/results'},{name:'Collaborations', link:'/research/collaborations'},]},
            {name:'Education', links:[{name:'Oficial Courses', link:'/eductaion/courses/oficial'},{name:'MOOC\'S', link:'/education/mooc'},{name:'Profissional Training', link:'/education/profissionalTraining'}]},
            {name:'Resources', links:[{name:'Ontologies', link:'/resources/ontologies'},{name:'Linked Data', link:'/resources/linkedData'},{name:'Technology', link:'/resources/technology'},{name:'Services', link:'/resources/services'}]}
        ]
    }
}

</script>
