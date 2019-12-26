import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,


    routes: [

        {
            path: "/",
            name: "Cards",
            meta: {
                title: 'продаж'
            },

            component: () =>
                import("../components/CardsVue")
        },

        {
            path: "/aboutCard/:id",
            name: "AboutCard",

            component: () =>
                import("../components/AboutCard")
        }


    ]

});
