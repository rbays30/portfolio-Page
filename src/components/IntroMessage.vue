<template>
    <div
        v-motion
        :initial="{ 
        opacity: 1,
        x: 0
        }"
        :enter="{
            opacity: 0,
            x: 100,
            transition: {
                duration: 1000,
                delay: 1000
            }}"
        class="container-fluid">
        <h1>{{ message }}</h1>
    </div>

</template>

<script>
export default {

    props: ['message'],
}
</script>