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
import { useRouter } from "vue-router";

export default {
    name: "ProductCreate",
    setup() {
        const title = ref("");
        const image = ref("");
        const router = useRouter();

        const submit = async () => {
            await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    title: title.value,
                    image: image.value,
                }),
            });

            await router.push("/admin/products");
        };

        return { title, image, submit };
    },
};
</script>
<style lang=""></style>
