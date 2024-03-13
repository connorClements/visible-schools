<script setup>
import Layout from "../../Layouts/Layout.vue";
import Contact from "../../Components/Contact.vue";
</script>
<template>
    <Layout>
        <div
            class="bg-seo-image bg-cover bg-no-repeat bg-center bg-scroll min-h-[60vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center bg-gray-100 px-4 py-3 opacity-80 rounded-2"
            >
                <div class="text-4xl">Search Engine Optimisation</div>
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
                    <div class="pb-2 text-3xl">SEO</div>

                    <div class="py-2">
                        Great web sites need great rankings on search engines.
                    </div>
                    <div class="py-2">
                        Find out how our team can get great results at
                        surprising budgets.
                    </div>
                    <div class="py-2">
                        Optimise content, enhance visibility.
                    </div>
                </div>
            </div>
        </div>
        <Contact></Contact>
    </Layout>
</template>
