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
                class="flex flex-row items-center font-regular text-base gap-x-4 text-black"
            >
                <a @click="toggleNav" class="p-2 lg:hidden flex items-center"
                    ><i
                        v-if="navOn === true"
                        class="fa-solid fa-bars text-2xl"
                    ></i
                    ><i v-else class="fa-solid fa-x text-2xl"></i
                ></a>
                <a
                    href="/about"
                    class="hover:underline p-2 hidden lg:flex items-center"
                    >About Us</a
                >
                <span @mouseover="mouseover" @mouseleave="mouseleave">
                    <a
                        href="/services"
                        class="rounded-sm p-2 hidden lg:flex items-center"
                        ><span class="hover:underline">Our Services</span>
                        <i class="fa fa-chevron-down text-[12px] ps-1"></i
                    ></a>
                    <div
                        v-if="isOpen"
                        class="absolute w-64 bg-white shadow-lg rounded-b-md"
                    >
                        <div class="flex flex-col">
                            <div class="p-3 hover:underline">
                                <a href="/services/book-bags">Book Bags</a>
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/banners">Roller Banners</a>
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/leavers-hoodies">
                                    Leavers Hoodies</a
                                >
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/sports-kits">Sports Kits</a>
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/merchandising"
                                    >Merchandise</a
                                >
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/prospectuses"
                                    >Prospectuses</a
                                >
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/seo">SEO</a>
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/signage">Signage</a>
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/social-media"
                                    >Social Media</a
                                >
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/web-dev"
                                    >Website Development</a
                                >
                            </div>
                            <div class="p-3 hover:underline">
                                <a href="/services/yearbooks">Yearbooks</a>
                            </div>
                        </div>
                    </div>
                </span>

                <a
                    href="/contact"
                    class="hover:underline rounded-sm p-2 hidden lg:flex items-center"
                    >Get in Touch</a
                >
            </div>
        </div>
        <!-- Responsive Menu for Small Screens -->
        <div
            class="fixed bg-v-charcoal transition-all right-0 max-h-[80%] overflow-y-scroll"
            :class="{
                'w-[100vw]': !navOn,
                'w-0': navOn,
            }"
        >
            <div
                class="flex flex-col relative h-auto text-sm gap-x-4 pr-4 text-white p-4 transition-all"
            >
                <div class="h-full">
                    <div
                        class="text-2xl font-bold pb-2 block whitespace-nowrap"
                    >
                        Navigation
                    </div>

                    <a
                        href="/about"
                        class="block whitespace-nowrap py-3 uppercase"
                        >About Us</a
                    >
                    <a
                        href="/services"
                        class="block whitespace-nowrap rounded-sm py-3 uppercase"
                        >Our Services</a
                    >
                    <div class="flex flex-col">
                        <div class="p-3 hover:underline">
                            <a href="/services/book-bags">Book Bags</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/banners">Roller Banners</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/leavers-hoodies">
                                Leavers Hoodies</a
                            >
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/sports-kits">Sports Kits</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/merchandising">Merchandise</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/prospectuses">Prospectuses</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/seo">SEO</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/signage">Signage</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/social-media">Social Media</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/web-dev">Website Development</a>
                        </div>
                        <div class="p-3 hover:underline">
                            <a href="/services/yearbooks">Yearbooks</a>
                        </div>
                    </div>
                    <a
                        href="/contact"
                        class="block whitespace-nowrap rounded-sm py-3 uppercase"
                        >Get in Touch</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navOn: true,
            isOpen: false,
        };
    },

    created() {
        this.navOn = true;
    },

    methods: {
        toggleNav() {
            this.navOn = !this.navOn;
        },

        mouseover: function () {
            this.isOpen = true;
        },
        mouseleave: function () {
            this.isOpen = false;
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
