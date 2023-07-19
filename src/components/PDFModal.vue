<script setup>
import imageUrl from '../assets/Resume_Levi_Bays.pdf' 
</script>

<template>
<a type="button" data-bs-toggle="modal" data-bs-target="#resume_modal">
    <font-awesome-icon class="colored-icon" icon="fa-solid fa-file" inverse size="2xl" />
</a>
<div class="modal  modal-xl fade" id="resume_modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >My Resume </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <object :data="imageUrl" type="application/pdf" width="100%" height="500px">
            <p>Unable to display PDF file. <a href="/src/assets/Resume_Levi_Bays.pdf">Download</a> instead.</p>
        </object>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    data() {
        return {
            modalOpen:false
        }
    },

    methods: {
        showModal() {
            this.modalOpen = !this.modalOpen;
        }
    }
}
</script>



