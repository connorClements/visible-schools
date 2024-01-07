export default {
    content: [
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        screens: {
            xs: "425px",

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        fontWeight: {
            hairline: 100,
            thin: 200,
            extralight: 300,
            light: 400,
            normal: 500,
            medium: 600,
            demibold: 700,
            bold: 800,
            extrabold: 900,
        },
        fontSize: {
            sm: "1rem",
            base: "1.2rem",
            lg: "1.4rem",
            xl: "1.6rem",
            "2xl": "1.8rem",
            "3xl": "2.2rem",
            "4xl": "2.6rem",
            "5xl": "3.2rem",
            "6xl": "3.8rem",
        },
        extend: {
            backgroundImage: {
                logo: "url('/resources/img/logo.svg')",
                "home-image": "url('/resources/img/book.jpg')",
                "cta-image": "url('/resources/img/badge.jpg')",
                "about-image": "url('/resources/img/bags.jpg')",
                "about-image-2": "url('/resources/img/about-image.jpg')",
                "bio-image": "url('/resources/img/headphones.jpg')",
                "services-image": "url('/resources/img/abc.jpg')",
                "sportskit-image": "url('/resources/img/sportskit.jpg')",
                "yearbook-image": "url('/resources/img/notebooks.jpg')",
                "banner-image": "url('/resources/img/banner.jpg')",
                "hoodie-image": "url('/resources/img/hoodie.jpg')",
                "chalkboard-image": "url('/resources/img/chalkboard.jpg')",
                "prospectus-image": "url('/resources/img/prospectus.jpg')",
                "schoolbag-image": "url('/resources/img/schoolbag.jpg')",
                "seo-image": "url('/resources/img/seo.jpg')",
                "sign-image": "url('/resources/img/sign.jpg')",
                "socialmedia-image": "url('/resources/img/social-media.jpg')",
                "stationery-image": "url('/resources/img/stationery.jpg')",
                "website-image": "url('/resources/img/website.jpg')",
                "contact-image": "url('/resources/img/contact-image.jpg')",
                "specsavers-image": "url('/resources/img/specsavers.png')",
                "savills-image": "url('/resources/img/savills.png')",
                "euronics-image": "url('/resources/img/euronics.png')",
                "fine-food-image": "url('/resources/img/fine-food.png')",
            },
            colors: {
                "v-light-gray": "#e5e3de",
                "v-gray": "#d0d2cf",
                "v-dark-gray": "#becbcf",
                "v-dark-blue": "#54677a",
                "v-light-pink": "#d5c5c1",
                "v-charcoal": "#3b3c3e",
                "v-blue": "#416875",
                "v-green": "#708a82",
                "v-gray-blue": "#4a6774",
                "visible-blue": "#17B3AE",
            },
        },
    },
    plugins: [],
};
