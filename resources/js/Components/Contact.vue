<script setup>
import axios from "axios";
</script>

<template>
    <div class="lg:flex lg:flex-row grow bg-white">
        <div class="bg-white w-full lg:w-1/2 mt-[64px]">
            <div class="p-8 mx-auto max-w-screen-md">
                <h2
                    class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900"
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
                            for="full_name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                            >Name *</label
                        >
                        <input
                            type="text"
                            id="full_name"
                            class="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-none focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 focus:bg-gray-200"
                            :class="
                                errs.fname
                                    ? 'border-2 border-red-500'
                                    : 'border border-gray-300'
                            "
                            placeholder="Enter your name here"
                            v-model="formData.fname"
                        />
                        <template v-if="errs.fname">
                            <div
                                class="pt-2 text-red-500 text-xs"
                                v-for="err in errs.fname"
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

        <div
            class="w-full lg:w-1/2 bg-cta-image bg-cover bg-scroll bg-center grayscale"
        ></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                fname: "",
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
                        fname: "",
                        email: "",
                        school: "",
                        subject: "",
                        message: "",
                    };
                })
                .catch((error) => {
                    this.errs = error.response.data.errors;
                    console.log(this.errs);
                });
        },
    },
};
</script>
