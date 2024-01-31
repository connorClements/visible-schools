<script setup>
import Layout from "../Layouts/Layout.vue";
import Contact from "../Components/Contact.vue";
import { Head } from "@inertiajs/vue3";
</script>

<template>
    <Head>
        <meta
            name="description"
            content="Learn more about Visible Schools and our printing services."
        />
        <meta
            name="keywords"
            content="Visible Schools, school printing, about us, printing services, education printing, school services"
        />

        <meta property="og:url" content="https://visible-schools.co.uk/about" />
        <meta
            property="og:title"
            content="About Visible Schools Printing Services"
        />
        <meta
            property="og:description"
            content="Learn more about Visible Schools and our printing services."
        />
    </Head>
    <Layout>
        <div
            class="bg-about-image bg-cover bg-scroll bg-center min-h-[80vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="flip-up"
                class="flex flex-col text-center bg-gray-100 py-3 px-4 opacity-80 rounded-2"
            >
                <div class="text-4xl">About Us</div>
            </div>
        </div>

        <div class="pt-16 grid grid-cols-1 lg:grid-cols-2">
            <div
                data-aos="fade-up"
                class="flex items-center justify-center bg-about-image-2 bg-cover bg-scroll bg-center min-w-[60vh] min-h-[60vh] my-8 lg:m-8"
            ></div>
            <div
                data-aos="fade-up"
                class="p-8 flex flex-col justify-center lg:w-[75%] text-base"
            >
                <div class="pb-8 text-4xl text-v-charcoal font-bold">
                    Visible Schools
                </div>

                <div class="py-4">
                    Created to help busy schools marketing professionals, we are
                    passionate about delivering great value, great looking
                    collateral to help you promote your school and get noticed.
                </div>

                <div class="py-4">
                    Whether you are a forest school or a multi-academy trust, we
                    are perfectly positioned to help you grab attention and
                    raise awareness.
                </div>

                <div class="py-4">
                    Printed collateral, branded clothing, signage solutions,
                    in-class merchandise, open day materials, help with your
                    website or social media marketing, we are the perfect
                    partner to deliver messaging that reflects your school and
                    makes your budget work harder.
                </div>

                <div class="py-4">
                    A committed team of Marketing Experts to help you boost
                    pupil numbers and make sure you are Visible.
                </div>
            </div>
        </div>
        <div
            data-aos="zoom-in-up"
            class="py-16 flex flex-col items-center justify-center"
        >
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 p-8"
            >
                <div
                    class="flex items-center flex-col justify-center min-w-[100%] min-h-[20vh] text-2xl border-8 border-visible-blue text-visible-blue rounded rotate-[345deg] p-2"
                >
                    <i class="fa fa-chess text-4xl"></i>
                    <div>Strategy</div>
                </div>
                <div
                    class="flex items-center flex-col justify-center min-w-[100%] min-h-[20vh] text-2xl border-8 border-visible-blue text-visible-blue rounded rotate-[345deg] p-2"
                >
                    <i class="fa fa-seedling text-4xl"></i>
                    <div>Sustainability</div>
                </div>
                <div
                    class="flex items-center flex-col justify-center min-w-[100%] min-h-[20vh] text-2xl border-8 border-visible-blue text-visible-blue rounded rotate-[345deg] p-2"
                >
                    <i class="fa fa-ranking-star text-4xl"></i>
                    <div>Experience</div>
                </div>
                <div
                    class="flex items-center flex-col justify-center min-w-[100%] min-h-[20vh] text-2xl border-8 border-visible-blue text-visible-blue rounded rotate-[345deg] p-2"
                >
                    <i class="fa fa-handshake text-4xl"></i>
                    <div>Service</div>
                </div>
            </div>
        </div>

        <div
            data-aos="fade-up"
            class="lg:min-h-[60vh] flex items-center justify-center pb-16 px-4 lg:p-8"
        >
            <div class="flex flex-col items-center lg:max-w-[50vw] text-center">
                <div class="text-xl">
                    "So thrilled to find a business based on helping us with a
                    full understanding of the particular pressures of the
                    educational sector. Visible produce everything we need to
                    promote our values and our school. On-line or off-line,
                    these guys are amazing and delivered some very impressive
                    savings too!"
                </div>
                <div class="font-bold text-sm pt-8">
                    - Millie, Marketing Communications, MAT
                </div>
            </div>
        </div>
        <div class="hidden lg:flex flex-col items-center justify-center pb-16">
            <hr class="h-0.5 w-full rounded bg-black lg:max-w-[50vw]" />
        </div>
        <Contact />
    </Layout>
</template>
