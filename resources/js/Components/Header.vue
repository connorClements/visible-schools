<template>
    <div
        class="fixed w-[100vw] z-10 shadow-lg"
        style="background: rgba(255, 255, 255)"
    >
        <div
            class="hidden sm:flex text-sm md:text-base lg:text-lg bg-visible-blue text-white flex-row justify-between whitespace-nowrap py-6 px-2"
        >
            <div class="px-4">The Schools Marketing Experts</div>
            <div class="px-4 whitespace-nowrap flex flex-row">
                <div class="px-4">
                    <i class="fa fa-phone pr-2"></i
                    ><a href="tel:01202403366" class="hover:underline"
                        >01202 40 33 66</a
                    >
                </div>
                <div class="px-4">
                    <i class="fa fa-envelope pr-2"></i
                    ><a
                        href="mailto:help@visible-schools.co.uk?subject=Visible%20Schools%20Enquiry"
                        target="_blank"
                        class="hover:underline"
                        >help@visible-schools.co.uk</a
                    >
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between h-[64px] px-2 xs:px-4">
            <div
                class="text-2xl font-bold flex flex-row items-center justify-end"
            >
                <a href="/">
                    <img
                        src="/build/public/images/logos/logo-no-text.png"
                        class="h-[64px] w-auto pr-2 py-2"
                    />
                </a>

                <a
                    class="whitespace-nowrap hidden sm:block text-base md:text-xl font-demibold"
                    href="/"
                    >Visible <span class="font-light"> Schools</span></a
                >
            </div>

            <div
                class="flex flex-row items-center font-regular text-sm gap-x-4 pr-4 text-black"
            >
                <a @click="toggleNav" class="p-2 lg:hidden flex align-center"
                    ><i
                        v-if="navOn === true"
                        class="fa-solid fa-bars text-2xl"
                    ></i
                    ><i v-else class="fa-solid fa-x text-2xl"></i
                ></a>
                <a
                    href="/about"
                    class="hover:underline p-2 hidden lg:flex align-center"
                    >About Us</a
                >
                <a
                    href="/services"
                    class="hover:underline rounded-sm p-2 hidden lg:flex align-center"
                    >Our Services</a
                >

                <a
                    href="/contact"
                    class="hover:underline rounded-sm p-2 hidden lg:flex align-center"
                    >Get in Touch</a
                >
            </div>
        </div>
        <!-- Responsive Menu for Small Screens -->
        <div
            class="absolute h-[100vh - 56px] bg-v-charcoal transition-all right-0"
            :class="{
                'w-[100vw]': !navOn,
                'w-0': navOn,
            }"
        >
            <div
                class="flex flex-col text-sm gap-x-4 pr-4 text-white p-4 transition-all"
            >
                <div class="text-2xl font-bold pb-2 block whitespace-nowrap">
                    Navigation
                </div>

                <a href="/about" class="block whitespace-nowrap py-3 uppercase"
                    >About Us</a
                >
                <a
                    href="/services"
                    class="block whitespace-nowrap rounded-sm py-3 uppercase"
                    >Our Services</a
                >

                <a
                    href="/contact"
                    class="block whitespace-nowrap rounded-sm py-3 uppercase"
                    >Get in Touch</a
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navOn: true,
        };
    },

    created() {
        this.navOn = true;
    },

    methods: {
        toggleNav() {
            this.navOn = !this.navOn;
        },
    },
};
</script>

<style scoped>
.rotate-45 {
    transform: rotate(45deg);
}

.opacity-0 {
    opacity: 0;
}
</style>
