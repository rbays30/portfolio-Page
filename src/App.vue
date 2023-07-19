<template>
  <NavBar
        :pages="pages"
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index"
    >
    </NavBar>


    <router-view
    v-if="pages.length > 0"
    :cards="cards"
    ></router-view>
    <BottomNav>

    </BottomNav>
</template>

<script>
import NavBar from './components/Navbar.vue';
import BottomNav from './components/BottomNav.vue';

export default {
    components: {
    NavBar,
    BottomNav
    
    },
    data() {
                return {
                    activePage: 0,
                    pages: [
             
                    ]
                };

            },
    created() {
        this.getPages();

        

    },

    methods: {
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();
            this.pages=data;
            this.cards=data.slice(1,4);
        },

        pageCreated(pageObj) {
            console.log(pageObj);
        }

    }

}
</script>
