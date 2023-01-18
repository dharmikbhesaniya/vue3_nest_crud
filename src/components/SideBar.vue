<template lang="">
    <div class="sidebar">
        <ul class="side-menu">
            <li>
                <router-link :to="{ name: 'main' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'admin' }">Admin</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Products' }">Products</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'ProductCreate' }"
                    >Add Product</router-link
                >
            </li>
        </ul>
    </div>
</template>
<script lang="js">
export default {
    name: "SideBar",
};
</script>
<style lang=""></style>
