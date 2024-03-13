<script setup>
import Layout from "../../Layouts/Layout.vue";
import Contact from "../../Components/Contact.vue";
import Slider from "../../Components/Slider.vue";
</script>
<template>
    <Layout>
        <div
            class="bg-hoodie-image bg-cover bg-no-repeat bg-center bg-scroll min-h-[60vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center bg-gray-100 px-4 py-3 opacity-80 rounded-2"
            >
                <div class="text-4xl">Leavers Hoodies</div>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 p-8 text-xl min-h-[70vh]">
            <div class="flex items-center">
                <div>
                    <div class="pb-2 text-3xl">Leavers Hoodies</div>
                    <div class="py-2">
                        Stylish and great quality, we have the complete range of
                        leaver hoodies ready to order.
                    </div>
                    <div class="py-2">
                        All sizes, all colours with a complete offering of
                        embroidery and print options front and back or to
                        sleeves, start a chat today about what suits best.
                    </div>
                    <div class="py-2">
                        Students love our results! Clothing you’ll be proud to
                        see your school name on.
                    </div>
                </div>
            </div>
            <div class="p-4">
                <Slider :items="hoodies" />
            </div>
        </div>
        <Contact></Contact>
    </Layout>
</template>
<script>
export default {
    data() {
        return {
            hoodies: [
                {
                    id: 1,
                    url: "/build/public/images/hoodies/hoodies1.jpg",
                    title: "Black Hoodies",
                },
                {
                    id: 2,
                    url: "/build/public/images/hoodies/hoodies2.jpg",
                    title: "Blue Hoodies",
                },
                {
                    id: 3,
                    url: "/build/public/images/hoodies/hoodies3.jpg",
                    title: "Olive Hoodies",
                },
            ],
        };
    },
};
</script>
