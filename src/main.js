import {createApp} from 'vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import App from './App.vue';
import router from '@/router';
import { gsap } from 'gsap';
import Popper from "vue3-popper";




/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp, faBriefcase, faCodeFork, faEnvelope, faIdCard, faFile, faMobileScreen } from '@fortawesome/free-solid-svg-icons';

import { popper } from '@popperjs/core';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */

library.add(faGithub, faLinkedin, faFile, faEnvelope, faIdCard, faMobileScreen, faCodeFork, faAddressCard, faBriefcase, faAngleUp)


createApp(App)
.use(router)
.use(gsap)
.use(popper)
.component("Popper", Popper)
.component('font-awesome-icon', FontAwesomeIcon)
.component('font-awesome-layers', FontAwesomeLayers)
.component('font-awesome-layer-text', FontAwesomeLayersText)
.mount("#app");