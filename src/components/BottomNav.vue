<template>
    <nav 
        class='navbar navbar-expand-md navbar-dark bg-dark' ref="myElement"
        >
        <div class="container-fluid w-75">
            <a
            href="https://github.com/rbays30/"
            >
                <font-awesome-icon class="colored-icon" icon="fa-brands fa-github" inverse size="2xl" />
            </a>
            <a
            href="https://www.linkedin.com/in/levi-bays-57ab83a2/"
            >
                <font-awesome-icon class="colored-icon" icon="fa-brands fa-linkedin" inverse size="2xl" />
            </a>
                <PDFModal></PDFModal>           
            <Popper type="button">
              <font-awesome-icon class="colored-icon" icon="fa-solid fa-envelope" inverse size="2xl" />
              <template #content>
                <div class="d-flex align-items-center">
                  <p class="ps-1 mb-0">Email me at </p>
                  <a class="ps-1" href="mailto: lbays30@gmail.com">lbays30@gmail.com</a>
                </div>
              </template>
            </Popper>
            <Popper type="button">
              <font-awesome-icon class="colored-icon" icon="fa-solid fa-mobile-screen" inverse size="2xl" />
              <template #content>
                <div class="d-flex align-items-center">
                  <p class="ps-1 mb-0">Call me at </p>
                  <a class="ps-1" href="tel: 812-530-1578">(812) 530-1578</a>
                </div>
              </template>
            </Popper>
        </div>
    </nav>
</template>

<script>
import PDFModal from './PDFModal.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Popper from "vue3-popper";


export default {
    components: {
        Popper, PDFModal
    },
    props: ['pages', 'activePage', 'navLinkClick'],
  }
    


</script>
<style>
.icon-link:hover {
    color:black;
    opacity:1;
}
.colored-icon {
    transition:0.5s;
}
.colored-icon:hover {
    color:gray;
    transition: 0.5s;
}
:root {
    --popper-theme-background-color: rgb(33,37,41);
    --popper-theme-background-color-hover: gray;
    --popper-theme-text-color: #ffffff;
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 32px;
  }


</style>



