<script setup>
import Layout from "../../Layouts/Layout.vue";
import Contact from "../../Components/Contact.vue";
import Slider from "../../Components/Slider.vue";
</script>
<template>
    <Layout>
        <div
            class="bg-schoolbag-image bg-cover bg-no-repeat bg-center bg-scroll min-h-[60vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center bg-gray-100 px-4 py-3 opacity-80 rounded-2"
            >
                <div class="text-4xl">Book Bags</div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 p-8 text-xl min-h-[70vh]">
            <div class="flex items-center">
                <div>
                    <div class="pb-2 text-3xl">Book Bags</div>

                    <div class="py-2">
                        The largest selection of durable standard book bags, PE
                        Swim bags and Back Packs at amazing rates! Our range
                        ensures happy pupils carry great looking UK produced
                        bags.
                    </div>
                    <div class="py-2">
                        Handles or no handles, fluorescent strips, hi-vis
                        stripes, we have hundreds of options. Our bright and
                        vibrant bags come in a range of hardwearing and
                        sustainable materials at very competitive prices.
                    </div>
                    <div class="py-2">
                        Email for our full range of available superb bags.
                    </div>
                </div>
            </div>
            <div class="p-4">
                <Slider :items="bags" />
            </div>
        </div>
        <Contact></Contact>
    </Layout>
</template>
<script>
export default {
    data() {
        return {
            bags: [
                { id: 1, url: "/build/public/images/bags/bag1.jpg" },
                { id: 2, url: "/build/public/images/bags/bag2.jpg" },
                { id: 3, url: "/build/public/images/bags/bag3.jpg" },
                { id: 4, url: "/build/public/images/bags/bag4.jpg" },
            ],
        };
    },
};
</script>
