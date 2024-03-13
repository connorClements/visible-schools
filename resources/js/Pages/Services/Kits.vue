<script setup>
import Layout from "../../Layouts/Layout.vue";
import Contact from "../../Components/Contact.vue";
</script>
<template>
    <Layout>
        <div
            class="bg-sportskit-image bg-cover bg-no-repeat bg-center bg-scroll min-h-[60vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center bg-gray-100 px-4 py-3 opacity-80 rounded-2"
            >
                <div class="text-4xl">Sports Kits</div>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 p-8 text-xl min-h-[70vh]">
            <div class="flex items-center">
                <div
                    class="border-4 rounded-2 text-4xl p-4 rounded-2 rotate-12"
                >
                    * Image Samples go here *
                </div>
            </div>
            <div class="flex items-center">
                <div>
                    <div class="pb-2 text-3xl">Sports Kits</div>
                    <div class="py-2">
                        Representing the school is a great honour and needs
                        great looking team kit.
                    </div>

                    <div class="py-2">
                        Full selection of colours, ages and personalisation
                        options, we offer very competitive pricing and lightning
                        fast turnarounds.
                    </div>
                    <div class="py-2">Get in touch to find out more today.</div>
                </div>
            </div>
        </div>
        <Contact></Contact>
    </Layout>
</template>
