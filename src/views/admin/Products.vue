<template lang="">
    <div>
        <table>
            <thead>
                <tr>
                    <th>#id</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product._id">
                    <td>{{ product._id }}</td>
                    <td>{{ product.title }}</td>
                    <td>
                        <img
                            :src="product.image"
                            :alt="product.title"
                            width="90"
                        />
                    </td>
                    <td>
                        <router-link
                            :to="{
                                name: 'ProductEdit',
                                params: { id: product._id },
                            }"
                            class="btn"
                            >Edit</router-link
                        >
                        <button @click="del(product._id)" class="btn btn-del">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
    name: "Products",
    setup() {
        const products = ref([]);

        onMounted(async () => {
            const res = await fetch("http://localhost:3000/products/");
            products.value = await res.json();
        });

        const del = async (id) => {
            await fetch(`http://localhost:3000/products/${id}/`, {
                method: "delete",
            });

            const res = await fetch("http://localhost:3000/products/");
            products.value = await res.json();
        };

        return {
            products,
            del,
        };
    },
};
</script>

<style lang=""></style>
