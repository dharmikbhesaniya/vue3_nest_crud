<template lang="">
    <div>
        <NavBar />
        <div class="wrraper">
            <div class="left-content">
                <SideBar />
            </div>
            <div class="right-content">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import SideBar from "../../components/SideBar.vue";
import NavBar from "../../components/NavBar.vue";
export default {
    name: "Admin",
    components: {
        SideBar,
        NavBar,
    },
};
</script>
<style lang=""></style>
