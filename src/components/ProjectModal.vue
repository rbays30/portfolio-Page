
<script setup>

import cs50 from '../components/projects/cs50.vue'
import upinroses from '../components/projects/upinroses.vue'
import hounddog from '../components/projects/hounddog.vue'
import website from '../components/projects/website.vue'
import recbox from '../components/projects/recbox.vue'

</script>

<template>
<div :id="project.id" class="modal modal-xl fade"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >{{ project.title }} </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <component :is=project.id></component>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    cs50, upinroses, hounddog, website, recbox
  },

    data() {
        return {
            modalOpen:false
        }
    },
    props: ['project'],

    methods: {
        showModal() {
            this.modalOpen = !this.modalOpen;
        }
    }
}
</script>



