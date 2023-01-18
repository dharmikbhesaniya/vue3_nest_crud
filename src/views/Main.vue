<template>
    <div class="home">
        <!-- <SideBar /> -->
        <div class="welcome">Welcome to our vue site</div>
        <br /><br /><br />

        <button class="">
            <router-link :to="{ name: 'admin' }">Go To Admin</router-link>
        </button>
    </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
    name: "Main",
    components: {
        SideBar,
    },
};
</script>

<style scoped>
.home {
    text-align: center;
}
</style>
