<template>
  <div class="container py-4 text-center">
    <font-awesome-icon  :icon="['fas', 'paper-plane']" class="plane" size="5x" />
    <h1 class="display-4 p-5">Message successfully sent!</h1>
    <h2 class="display-4 p-5">I'll reach out shortly</h2>
    <h2 class="display-4 p-5">Have an awesome day!</h2>


  </div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { gsap } from 'gsap';

export default {
  mounted() {
    gsap.to('.plane', { rotation:"45_cw", duration:1 })
    gsap.to('.plane', {x:'500%', duration:1, delay:1})
    gsap.from('.display-4', {opacity: 0, stagger: 1})
  },
  props: ['cards'],

}


</script>
