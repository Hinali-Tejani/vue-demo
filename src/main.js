import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vuelidate from "vuelidate";
import store from "../store/store";

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    store,
    render: (h) => h(App),
});
