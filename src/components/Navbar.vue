<template>
    <nav 
        class='navbar navbar-expand-md navbar-dark bg-dark' ref="myElement"
        >
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img class="brand" width="50" height ="50" src="../assets/LB.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0  justify-content-around d-flex flex-row">
                    <li v-for="(page, index) in pages" class="nav-item p-3" :key="index" >
                        <navbar-link
                            :page="page"
                            :isActive="activePage === index"
                            @click.prevent="navLinkClick(index)"
                        ></navbar-link>
                    </li>
            </ul>
            </div>


        </div>
    </nav>
    
</template>

<script>

import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink
    },
    props: ['pages', 'activePage', 'navLinkClick']
}
</script>



