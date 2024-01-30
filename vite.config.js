import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";
import ViteFontsPlugin from "vite-plugin-fonts";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/sass/app.scss",
                "resources/js/app.js",
                "resources/css/app.css",
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        viteStaticCopy({
            targets: [{ src: "./resources/img/**", dest: "public/images" }],
        }),
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
    // build: {
    //     // Set the base path if your app is not hosted at the root of the domain
    //     base: "/public",
    //     // Set the public path if you are deploying to a non-root path
    //     assetsDir: "assets",
    //     terserOptions: {
    //         compress: {
    //             drop_console: true,
    //             // other terser options...
    //         },
    //     },
    // },
});
