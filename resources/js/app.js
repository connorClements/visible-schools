import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        return pages[`./Pages/${name}.vue`];
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)

            .mount(el);
    },
});
