import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        faqs: JSON.parse(localStorage.getItem("faqs")),
    },
    getters: {
        faqs: (state) => state.faqs,
    },
    mutations: {
        setFaqs(state) {
            state.faqs = JSON.parse(localStorage.getItem("faqs"));
        },
    },
});
