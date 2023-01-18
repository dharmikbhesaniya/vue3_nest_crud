<template lang="">
    <div>
        <form action="" method="post" @submit.prevent="submit">
            <label>Title</label>
            <input type="text" name="Title" id="" v-model="title" />
            <label>Image</label>
            <input type="text" name="Image" id="" v-model="image" />
            <button>Add product</button>
        </form>
    </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
    name: "ProductEdit",
    props: ["id"],

    setup() {
        const title = ref("");
        const image = ref("");
        const router = useRouter();

        const route = useRoute();
        onMounted(async () => {
            const res = await fetch(
                `http://localhost:3000/products/${route.params.id}`
            );
            const product = await res.json();
            title.value = product.title;
            image.value = product.image;
        });

        const submit = async () => {
            await fetch(`http://localhost:3000/products/${route.params.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    title: title.value,
                    image: image.value,
                }),
            });

            await router.push("/admin/products");
        };

        return {
            title,
            image,
            submit,
        };
    },
};
</script>

<style lang=""></style>
