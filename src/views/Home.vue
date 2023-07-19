<template>
    <div class="container-fluid header">
      <h1 class="text-center header display-3">Welcome to My Portfolio Website!</h1>
    </div>
    <div class="container-fluid col-lg-8 d-flex align-items-center flex-md-row flex-column">
      <div class="container-fluid d-flex justify-content-center flex-row flex-md-column">
        <h2 class="p-3 display-4 intro-2">Hi, I'm Levi</h2>
        <h2 class="p-3 display-4 intro-2 d-none d-md-block">Thanks for stopping by</h2>
      </div>
      <div class="container-fluid intro-card d-flex justify-content-center align-items-center" style="height:300px">
        <font-awesome-layers full-width class="w-100">
          <font-awesome-icon icon="fa-solid fa-id-card" style="width:300px; min-width: 300px; height:auto;" />
          <font-awesome-layers-text class="intro-cardletters" style="color:white;background:rgb(33, 37, 41); font-size: 30px; width:150px; font-style: bold;" transform="up-15 right-37" value="Levi Bays"/>
          <font-awesome-layers-text class="intro-cardletters" style="color:white;background:rgb(33, 37, 41); font-size: 25px; width:130px" transform="down-23 right-45" value="Software Engineer"/>

        </font-awesome-layers>
      </div>
    </div>
    
    <div class="intro-help p-3 container-fluid col-lg-8">
      <h3 class="p-3 display-4"> I Like Helping People... </h3>
    </div>

    <div class="intro-help container-fluid p-3 d-flex justify-content-start col-lg-8 ">
        <h3 class="display-4" style="width:1px;"></h3>
        <h3 class="animated-text display-4 mb-0 ps-3 "></h3>
        <h3 class="cursor display-4 mb-0">|</h3>
    </div>
    <div class="container-fluid d-flex p-5 flex-column flex-md-row justify-content-center">
      <div v-for="(page, index) in cards" :key="index" class="intro-3 col-12 col-md-4 d-flex p-3 mw-75 justify-content-center">
        <div class="card p-3 h-100" style="max-width:300px">
          <font-awesome-icon  class="card-img-top m-auto" :icon= page.picture style=" width:auto; height: 50px;" :alt="`This picture suggests content of the ${page.link.text} page`" />
          <div class="card-body text-center">
            <div class="container-fluid" style="height:30%">
              <h5 class="card-title">{{ page.title }}</h5>
            </div>
            <div class="p-1 container-fluid align-center" style="height:40%">
              <p class="p-1 card-text">{{ page.description}}</p>
            </div>
            <div class="p-2 container-fluid m-auto" style="height:30%">
              <router-link
              :to = "page.link.url"
              >
                <a 
                  class="btn btn-dark mb-3"
                  aria-current="page"
                  href="/portfolio"
                  :title="`This link goes to the portfolio page`"
                  >Go to {{ page.link.text }}
                </a>
              </router-link>
            </div>
              
          </div>
        </div>            
      </div>
    </div>
</template>


<script>
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';


gsap.registerPlugin(TextPlugin);



const words= ["Build Things...", "Solve Problems...", "Realize A Vision!"]

export default {
  methods: {
    enter(el, done) {
      gsap.from(el, {duration:5, opacity:0})
      done()
    }
  },
  components: {
    FontAwesomeIcon,
    FontAwesomeLayers,
    FontAwesomeLayersText
  
  },
  props: ['cards'],

  created() {

    // removes home from the array of info
    // let cards = pages[1];
    // console.log(cards);
  },

  mounted() {

    const tlReveal = gsap.timeline( {defaults: {duration: 1, stagger: 1}})
    tlReveal
            .from('.intro-card', {x: '300%', ease: 'bounce'})
            .from('.intro-2', {opacity: 0})
            .from('.intro-cardletters', {opacity:0, duration:0.5})
            .from('.intro-help', {opacity: 0})
            .from('.intro-3', {opacity: 0, delay: 2, stagger: 0.5})
            



    gsap.to('.cursor', { opacity: 0, repeat: -1, yoyo: true, duration:1, ease: "power2.inOut"})

    let tlMaster = gsap.timeline({repeat: -1, delay:9})

    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true});
      tlText.to('.animated-text', {duration: 3.5, text: word});
      tlMaster.add(tlText);
    })



    
  }

}

</script>
<style>
h1{
  font-size: xx-large;
  padding: 1em;
}
h2 {
  font-size: xx-large
}



</style>
