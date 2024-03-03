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
                    <div class="pb-2 text-3xl">Lorem Ipsum</div>

                    <div class="py-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                    <div class="py-2">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <div class="py-2">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
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
