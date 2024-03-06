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
                    <div class="py-2">
                        Bags are available in a wide range of colours including
                        -
                        <div
                            class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                        >
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-red-500 mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Red</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-blue-500 mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Blue</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-green-500 mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Green</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-zinc-500 mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Grey</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-black mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Black</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-sky-400 mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Sky Blue</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-red-950 mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Maroon</span>
                            </div>
                            <div class="flex flex-row items-center">
                                <div
                                    class="rounded-full p-2 bg-orange-500 mr-2 w-[10px] h-[10px]"
                                ></div>
                                <span>Orange</span>
                            </div>
                        </div>
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
                {
                    id: 1,
                    url: "/build/public/images/bags/bag1.jpg",
                    title: "School Bags",
                },
                {
                    id: 2,
                    url: "/build/public/images/bags/bag2.jpg",
                    title: "Gym Bags",
                },
                {
                    id: 3,
                    url: "/build/public/images/bags/bag3.jpg",
                    title: "Lunch Cooler Bags",
                },
                {
                    id: 4,
                    url: "/build/public/images/bags/bag4.jpg",
                    title: "Book Bags",
                },
            ],
        };
    },
};
</script>
