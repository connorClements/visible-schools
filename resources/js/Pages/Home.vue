<script setup>
import Layout from "../Layouts/Layout.vue";
import Contact from "../Components/Contact.vue";
</script>

<template>
    <Layout>
        <div
            class="bg-home-image bg-cover bg-center min-h-[90vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center items-center"
            >
                <div
                    class="max-w-screen-sm text-2xl sm:text-4xl tracking-wide pb-8 px-2"
                >
                    Expert, Best Value, Tailored Print Solutions for Schools
                </div>
                <a href="/contact">
                    <span
                        class="border border-black py-2 px-3 hover:bg-black hover:text-white transition duration-300"
                        >Get in touch</span
                    ></a
                >
            </div>
        </div>
        <div class="min-h-[50vh] pt-16 pb-8 bg-v-gray-blue text-v-light-gray">
            <div class="px-8 pb-8 text-3xl text-center font-thin">
                The Visual Marketing Experts
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex items-start lg:mx-32"
            >
                <div
                    class="flex flex-col justify-start items-center text-center p-8"
                >
                    <div><i class="fa-solid fa-print text-6xl"></i></div>
                    <div class="text-xl px-2 pt-8">
                        Ultimate Quality School Marketing Solutions
                    </div>
                    <!-- <div class="text-md">
                        Elevate learning with impeccable school printing
                        services
                    </div> -->
                </div>
                <div
                    class="flex flex-col justify-start items-center text-center p-8"
                >
                    <div><i class="fa-solid fa-medal text-6xl"></i></div>
                    <div class="text-xl px-2 pt-8">
                        Guaranteed Printing Excellence
                    </div>
                    <!-- <div class="text-md">
                        Instant in-store printing: where speed meets quality
                    </div> -->
                </div>
                <div
                    class="flex flex-col justify-start items-center text-center p-8"
                >
                    <div>
                        <i class="fa-regular fa-face-grin-stars text-6xl"></i>
                    </div>
                    <div class="text-xl px-2 pt-8">Promotions that Pop</div>
                    <!-- <div class="text-md">
                        Boost your brand with eye-catching promotional printing
                    </div> -->
                </div>
                <div
                    class="flex flex-col justify-start items-center text-center p-8"
                >
                    <div><i class="fa-solid fa-list-check text-6xl"></i></div>
                    <div class="text-xl px-2 pt-8">
                        Effortless Project Delivery
                    </div>
                    <!-- <div class="text-md">
                        Simplify school projects with our effortless management
                        support
                    </div> -->
                </div>
            </div>
        </div>
        <div
            class="min-h-[40vh] flex flex-col items-center justify-center py-16"
            data-aos="fade-up"
        >
            <div
                class="flex flex-col items-center lg:max-w-[50vw] text-center px-8 lg:p-0"
            >
                <div class="text-xl">
                    "We used to have a traditional roster of printers all doing
                    one or two products for us. We now contact Visible for any
                    requirement. No one else has ever come to us and delivered
                    such amazing pro-active cost savings plus new and innovative
                    products to get the school noticed. Great to save hours
                    every week!"
                </div>
                <div class="text-sm font-bold pt-4 lg:pt-8">
                    - Julia, Marketing Manager
                </div>
            </div>
        </div>
        <div class="hidden lg:flex flex-col items-center justify-center pb-16">
            <hr class="h-0.5 w-full rounded bg-black lg:max-w-[50vw]" />
        </div>
        <Contact />
    </Layout>
</template>
