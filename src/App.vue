<template>
    <div id="app">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h4>FAQS</h4>
            <b-button @click="$refs.modal.openModal()">Create the FAQ</b-button>
        </div>
        <create-modal ref="modal"></create-modal>
        <div>
            <faq-accordian></faq-accordian>
        </div>
    </div>
</template>

<script>
    import CreateModal from "./components/CreateModal.vue";
    import FaqAccordian from "./components/FaqAccordian.vue";
    import store from "../store/store";
    export default {
        components: { CreateModal, FaqAccordian },
        name: "App",
        store,
        data() {
            return {};
        },
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        padding: 30px;
    }
</style>
