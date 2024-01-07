<script setup>
import Header from "../Components/Header.vue";
import Footer from "../Components/Footer.vue";
</script>

<template>
    <div class="min-h-full flex flex-col w-100 overflow-hidden">
        <Header />

        <div class="mt-[64px] sm:mt-[134px]">
            <slot />
        </div>
        <Footer />
    </div>
</template>
