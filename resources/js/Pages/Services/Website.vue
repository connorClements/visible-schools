<script setup>
import Layout from "../../Layouts/Layout.vue";
import Contact from "../../Components/Contact.vue";
</script>
<template>
    <Layout>
        <div
            class="bg-website-image bg-cover bg-no-repeat bg-center bg-scroll min-h-[60vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center bg-gray-100 px-4 py-3 opacity-80 rounded-2"
            >
                <div class="text-4xl">Website Development</div>
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
                    <div class="pb-2 text-3xl">Website Development</div>

                    <div class="py-2">
                        From a complete redesign of your site to a simple
                        refresh with new, more relevant imagery, your website
                        forms an essential window into the school.
                    </div>
                    <div class="py-2">
                        Outstanding is essential with a proper understanding of
                        how parents and pupils will want to use your site.
                    </div>
                    <div class="py-2">
                        We can also help with photography, tours, video content,
                        app development and embedding keywords. Friendly and
                        experienced, we are on hand for a confidential chat
                    </div>
                </div>
            </div>
        </div>
        <Contact></Contact>
    </Layout>
</template>
