<script setup>
import Layout from "../Layouts/Layout.vue";
import axios from "axios";
import { Head } from "@inertiajs/vue3";
</script>

<template>
    <Head>
        <meta
            name="keywords"
            content="Visible Schools, contact us, get in touch, school printing contact, printing services inquiry, customer support"
        />

        <meta
            property="og:url"
            content="https://visible-schools.co.uk/contact"
        />
        <meta
            property="og:title"
            content="Contact Visible Schools Printing Services"
        />
        <meta
            name="description"
            content="Contact Visible Schools for all your printing needs. Reach out to us for inquiries, quotes, and assistance with our high-quality printing services for schools."
        />
    </Head>
    <Layout>
        <div
            class="bg-contact-image bg-cover bg-scroll bg-center min-h-[60vh] flex flex-col justify-center items-center text-black"
        >
            <div>
                <div class="opacity-80">
                    <div class="text-4xl py-3 px-4 bg-gray-100">Contact Us</div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-[64px]">
            <div
                class="p-8 flex flex-col w-100 mx-auto max-w-screen-md w-100 lg:align-items-center lg:max-w-[75%] text-lg"
            >
                <div class="pb-8">
                    <div class="text-3xl font-bold pb-8 text-v-charcoal">
                        Contact us
                    </div>
                    <div>
                        A completely free team at your disposal, committed to
                        saving you time and money. Simply send us some contact
                        details and we’ll do the rest. Here to help, we look
                        forward to changing your world.
                    </div>
                </div>
                <div>
                    <div class="text-3xl font-bold pb-8 text-v-charcoal">
                        Find us
                    </div>
                    <div class="d-flex flex-col">
                        <div class="font-bold">Visible</div>
                        <div>26 Wessex Way</div>
                        <div>Wincanton</div>
                        <div>Somerset</div>
                        <div>BA9 9RR</div>
                    </div>
                </div>
            </div>
            <div class="bg-white w-full">
                <div class="p-8 mx-auto max-w-screen-md">
                    <h2
                        class="mb-4 text-4xl tracking-tight font-bold text-v-charcoal"
                    >
                        Get in touch
                    </h2>
                    <div
                        class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
                    >
                        <div
                            v-if="successMsg"
                            class="text-green-500 text-lg text-center absolute"
                        >
                            {{ successMsg }}
                        </div>
                    </div>

                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <label
                                for="name"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >Name *</label
                            >
                            <input
                                type="text"
                                id="name"
                                class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 focus:bg-gray-200"
                                :class="
                                    errs.name
                                        ? 'border-2 border-red-500'
                                        : 'border border-gray-300'
                                "
                                placeholder="Enter your name here"
                                v-model="formData.name"
                            />
                            <template v-if="errs.name">
                                <div
                                    class="pt-2 text-red-500 text-xs"
                                    v-for="err in errs.name"
                                    :key="err"
                                >
                                    {{ err }}
                                </div>
                            </template>
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >Email *</label
                            >
                            <input
                                id="email"
                                class="shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 focus:bg-gray-200"
                                :class="
                                    errs.email
                                        ? 'border-2 border-red-500'
                                        : 'border border-gray-300'
                                "
                                placeholder="example@email.com"
                                v-model="formData.email"
                            />
                            <template v-if="errs.email">
                                <div
                                    class="pt-2 text-red-500 text-xs"
                                    v-for="err in errs.email"
                                    :key="err"
                                >
                                    {{ err }}
                                </div>
                            </template>
                        </div>
                        <div>
                            <label
                                for="school"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >School *</label
                            >
                            <input
                                type="text"
                                id="school"
                                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-none border shadow-sm focus:ring-gray-500 focus:border-gray-500 focus:bg-gray-200"
                                :class="
                                    errs.school
                                        ? 'border-2 border-red-500'
                                        : 'border border-gray-300'
                                "
                                placeholder="Enter your school's name here"
                                v-model="formData.school"
                            />
                            <template v-if="errs.school">
                                <div
                                    class="pt-2 text-red-500 text-xs"
                                    v-for="err in errs.school"
                                    :key="err"
                                >
                                    {{ err }}
                                </div>
                            </template>
                        </div>
                        <div>
                            <label
                                for="subject"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >Subject *</label
                            >
                            <input
                                type="text"
                                id="subject"
                                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-none border shadow-sm focus:ring-gray-500 focus:border-gray-500 focus:bg-gray-200"
                                :class="
                                    errs.subject
                                        ? 'border-2 border-red-500'
                                        : 'border border-gray-300'
                                "
                                placeholder="Let us know how we can help you"
                                v-model="formData.subject"
                            />
                            <template v-if="errs.subject">
                                <div
                                    class="pt-2 text-red-500 text-xs"
                                    v-for="err in errs.subject"
                                    :key="err"
                                >
                                    {{ err }}
                                </div>
                            </template>
                        </div>

                        <div class="sm:col-span-2">
                            <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900"
                                >Your message *</label
                            >
                            <textarea
                                id="message"
                                rows="3"
                                class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-none shadow-sm border focus:ring-gray-500 focus:border-gray-500 focus:bg-gray-200"
                                :class="
                                    errs.message
                                        ? 'border-2 border-red-500'
                                        : 'border border-gray-300'
                                "
                                placeholder="Leave us a message"
                                v-model="formData.message"
                            ></textarea>
                            <template v-if="errs.message">
                                <div
                                    class="pt-2 text-red-500 text-xs"
                                    v-for="err in errs.message"
                                    :key="err"
                                >
                                    {{ err }}
                                </div>
                            </template>
                        </div>

                        <div class="flex justify-between">
                            <button
                                type="submit"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-none block p-2.5 hover:bg-gray-200"
                            >
                                Send message
                            </button>
                            <div class="pr-1"><small>* required</small></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>
<script>
export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                school: "",
                subject: "",
                message: "",
            },
            errs: "",
        };
    },
    methods: {
        submitForm() {
            // Send form data to Laravel backend
            axios
                .post("/contact-form", this.formData)
                .then((response) => {
                    console.log(response.data);
                    // Optionally, reset the form after successful submission
                    this.formData = {
                        email: "",
                        school: "",
                        subject: "",
                        message: "",
                    };
                })
                .catch((error) => {
                    this.errs = error;
                    console.log(this.errs);
                });
        },
    },
};
</script>
