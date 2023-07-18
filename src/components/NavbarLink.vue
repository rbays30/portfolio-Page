<template>
    <router-link
    :to ="page.link.url"
    >
    <a 
        class="nav-link"
        aria-current="page"
        :href="page.link.url"
        :title="`This link goes to the ${page.link.text} page`"
        >{{ page.link.text }}
    </a>
</router-link>
</template>

<script>


    export default {

        props: ['page','isActive'],

    }

</script>
<style scoped>
    .active {
        color: white !important;
        font-weight: bolder !important;
        opacity: 1;

    }
    .nav-link:hover {
        color:white;
    }
    a {
        text-decoration: none;
    }
</style>