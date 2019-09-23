<template>
  <div class="greyBg p-3 mt-5 footer">
    <div class="mt-3">
      <b-nav>
        <b-nav-item
        v-for="menuLink in menuLinks" :key="menuLink.id" :h-ref="menuLink.link"
        >
          <span class="text-white">{{menuLink.name}}</span>
        </b-nav-item>
      </b-nav>
    </div>
    <div class="mt-3">
      <b-nav>
        <b-nav-item
        v-for="socialLink in socialLinks" :key="socialLink.id"
        :h-ref="socialLink.link"
        >
        <span v-if="socialLink.icon == '' " class="text-white">{{socialLink.name}}</span>
        <font-awesome-icon class="text-white" :icon="[socialLink.type, socialLink.icon]" size="lg" />
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>
<script>
export default {
    name:'footercomponent',
    data(){
      return {
        socialLinks:[],
        menuLinks:[]
      }
    },
    mounted(){
      this.socialLinks = [
        {
          name:'Facebook',
          link:'#',
          icon:'facebook',
          type:'fab',
          id:'0'
        },
        {
          name:'Linkedin',
          link:'#',
          icon:'linkedin',
          type:'fab',
          id:'1'
        },
        {
          name:'Twitter',
          link:'#',
          icon:'twitter',
          type:'fab',
          id:'2'
        }
      ]
      this.menuLinks = [
        {
          name:'Contact',
          link:'#',
          id:'0'
        },
                {
          name:'FAQ',
          link:'#',
          id:'1'
        },
                {
          name:'Website Sitemap',
          link:'#',
          id:'2'
        },
        {
          name:'OEG Wiki',
          link:'#',
          id:'3'
        }
      ]
    }
}
</script>