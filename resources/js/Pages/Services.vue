<script setup>
import Layout from "../Layouts/Layout.vue";
import Contact from "../Components/Contact.vue";
</script>

<template>
    <Layout>
        <div
            class="bg-chalkboard-image bg-contain bg-no-repeat bg-center bg-scroll min-h-[60vh] xs:min-h-[70vh] sm:min-h-[80vh] flex justify-center items-center text-black"
        >
            <div
                data-aos="zoom-out"
                class="flex flex-col text-center bg-gray-100 px-4 py-3 opacity-80 rounded-2"
            >
                <div class="text-4xl">Our Services</div>
            </div>
        </div>
        <div data-aos="fade-up" class="grid grid-cols-6 gap-2 py-2">
            <div class="overflow-hidden col-span-6 lg:col-span-3">
                <div
                    class="p-8 bg-prospectus-image bg-cover min-h-[60vh] flex items-center justify-center"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Prospectuses</div>
                        <div class="p-4">
                            Craft compelling prospectuses that tell your
                            school's unique story and captivate prospective
                            students and parents
                        </div>
                        <a
                            href="/services/prospectuses"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="overflow-hidden col-span-6 lg:col-span-3">
                <div
                    class="p-8 bg-yearbook-image bg-cover min-h-[60vh] flex items-center justify-center"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Yearbooks</div>
                        <div class="p-4">
                            Create lasting memories with beautifully designed
                            yearbooks that capture the essence of each school
                            year
                        </div>
                        <a
                            href="/services/yearbooks"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="col-span-6 lg:col-span-2 overflow-hidden">
                <div
                    class="p-8 bg-stationery-image bg-cover min-h-[60vh] flex items-center justify-center col-span-4"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Branded Merchandise</div>
                        <div class="p-4">
                            Enhance school spirit with branded pens, rulers,
                            tote bags, and water bottles, perfect for giveaways
                            and promotions
                        </div>
                        <a
                            href="/services/merchandising"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="overflow-hidden col-span-6 lg:col-span-4">
                <div
                    class="p-8 bg-hoodie-image bg-cover min-h-[60vh] flex items-center justify-center"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Leaver Hoodies</div>
                        <div class="p-4">
                            Commemorate the end of an era with stylish and
                            personalized leaver hoodies for your students.
                        </div>
                        <a
                            href="/services/leavers-hoodies"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="overflow-hidden col-span-6 lg:col-span-3">
                <div
                    class="p-8 bg-schoolbag-image bg-cover bg-center min-h-[60vh] flex items-center justify-center"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Book Bags</div>
                        <div class="p-4">
                            Customize book bags with your school's logo for a
                            practical and branded accessory.
                        </div>
                        <a
                            href="/services/book-bags"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="overflow-hidden col-span-6 lg:col-span-3">
                <div
                    class="p-8 bg-sportskit-image bg-cover min-h-[60vh] flex items-center justify-center"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Sports Kits</div>
                        <div class="p-4">
                            Outfit your teams in high-quality sports kits that
                            instill a sense of pride and unity
                        </div>
                        <a
                            href="/services/sports-kits"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="col-span-6 lg:col-span-4 overflow-hidden">
                <div
                    class="p-8 bg-sign-image bg-cover bg-center min-h-[60vh] flex items-center justify-center col-span-4"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Signage</div>
                        <div class="p-4">
                            Make a statement with eye-catching signage solutions
                            that enhance your school's visibility and branding
                        </div>
                        <a
                            href="/services/signage"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="overflow-hidden col-span-6 lg:col-span-2">
                <div
                    class="p-8 bg-banner-image bg-cover min-h-[60vh] flex items-center justify-center"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Roller Banners</div>
                        <div class="p-4">
                            Portable and attention-grabbing roller banners that
                            are perfect for school events and presentations.
                        </div>
                        <a
                            href="/services/banners"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>

            <div class="col-span-6 lg:col-span-3 overflow-hidden">
                <div
                    class="p-8 bg-socialmedia-image bg-cover min-h-[60vh] flex items-center justify-center"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Social Media Marketing</div>
                        <div class="p-4">
                            Elevate your school's online presence with effective
                            social media marketing strategies.
                        </div>
                        <a
                            href="/services/social-media"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="col-span-6 lg:col-span-3 overflow-hidden">
                <div
                    class="p-8 bg-website-image bg-cover min-h-[60vh] flex items-center justify-center col-span-3"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">Website Development</div>
                        <div class="p-4">
                            Create a user-friendly and informative school
                            website that engages visitors and parents
                        </div>
                        <a
                            href="/services/web-dev"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
            <div class="col-span-6 lg:col-span-6 overflow-hidden">
                <div
                    class="p-8 bg-seo-image bg-cover min-h-[60vh] flex items-center justify-center col-span-2"
                >
                    <div class="p-4 opacity-80 text-black bg-white text-center">
                        <div class="text-3xl p-2">SEO</div>
                        <div class="p-4">
                            Improve your school's online visibility with search
                            engine optimization to attract more prospective
                            students
                        </div>
                        <a
                            href="/services/seo"
                            class="underline text-sm p-6 hover:no-underline uppercase"
                            >See more</a
                        >
                    </div>
                </div>
            </div>
        </div>
        <Contact />
    </Layout>
</template>
