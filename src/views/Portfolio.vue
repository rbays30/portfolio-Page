<template>
<div class="container-fluid">
  <h1 class="display-4">Some Projects I'm Proud Of</h1>
</div>
<div class="container-fluid d-flex" style="flex-flow: wrap;">
  <div v-for="(project, index) in projects" :key="index" class="col-12 col-md-6 col-xl-3 p-3 d-flex justify-content-center">
    <div class="card bg-dark text-white p-3 w-100 h-100" style="max-width:300px">
      <font-awesome-icon  class="card-img-top m-auto" :icon= project.picture style=" width:auto; height: 50px;"/>
      <div class="card-body text-center">
        <div class="container-fluid" style="height:20%">
          <h5 class="card-title">{{ project.title }}</h5>
        </div>
        <div class="p-1 container-fluid align-center" style="height:80%">
          <p class="p-1 card-text">{{ project.description}}</p>
        </div>
      </div>
      <ul class="list-group list-group-horizontal border-0 flex-wrap justify-content-evenly">
        <li v-for="(skill) in project.skills" class="list-group-item bg-transparent rounded border-1 p-2 m-1 text-white">{{ skill }}</li>


      </ul>
      <div class = "card-body">
        <div class="p-2 container-fluid text-center">
          <button :data-bs-target="'#' + project.id" class="btn btn-light" type="button" data-bs-toggle="modal" >Tell Me More!</button>

        </div>
      </div>
    </div>
    <ProjectModal
    :project="project"  
    ></ProjectModal>
  </div> 
</div>
           
</template>

<script>
import ProjectModal from '../components/ProjectModal.vue';

export default {
    components: {
    ProjectModal
    
    },
    data() {
                return {
                    projects: [
             
                    ]
                };

            },
    created() {
        this.getProjects();
    },
    props: ['cards'],

    methods: {
        async getProjects() {
            let res = await fetch('projects.json');
            let data = await res.json();
            this.projects=data;
        },

        pageCreated(pageObj) {
            console.log(pageObj);
        }

    },
    mounted () {
      window.scrollTo(0, 0)
    }

}


</script>
