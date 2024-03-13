<script setup>
import Layout from "../../Layouts/Layout.vue";
import Contact from "../../Components/Contact.vue";
</script>
<template>
    <Layout>
        <div
            class="bg-prospectus-image bg-cover bg-no-repeat bg-center bg-scroll min-h-[60vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center bg-gray-100 px-4 py-3 opacity-80 rounded-2"
            >
                <div class="text-4xl">Prospectuses</div>
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
                    <div class="pb-2 text-3xl">Prospectuses</div>
                    <div class="py-2">
                        A beautiful and well crafted prospectus is the ultimate
                        showcase for attracting students and staff to your
                        school.
                    </div>

                    <div class="py-2">
                        We offer every possible print option for making this
                        vital marketing piece reflect your values and be
                        remembered.
                    </div>
                    <div class="py-2">
                        Whether you want a completely new look and feel or just
                        update an existing prospectus, our friendly,
                        knowledgeable team are on hand to help.
                    </div>
                </div>
            </div>
        </div>
        <Contact></Contact>
    </Layout>
</template>
