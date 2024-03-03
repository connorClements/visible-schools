<template>
    <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
    >
        <Slide v-for="image in items" :key="image.id">
            <div class="carousel__item">
                <img class="carousel-image" :src="image.url" />
            </div>
        </Slide>
    </Carousel>

    <Carousel
        id="thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
    >
        <Slide v-for="image in items" :key="image.id">
            <div class="carousel__item" @click="slideTo(image.id - 1)">
                <img :src="image.url" />
            </div>
        </Slide>
    </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
    name: "Slider",

    props: {
        items: {
            type: Array,
        },
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    data() {
        return {
            currentSlide: 0,
        };
    },

    methods: {
        slideTo(val) {
            this.currentSlide = val;
        },
    },
});
</script>
<style>
.carousel__item {
    min-height: 200px;
    max-height: 400px;
    width: auto;
    background-color: white;
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    color: white;
}

.carousel-image {
    max-height: 400px;
    width: auto;
}
</style>
