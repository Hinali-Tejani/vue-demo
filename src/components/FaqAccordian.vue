<template>
    <div class="accordion" role="tablist">
        <b-card no-body class="mb-1" v-for="(faq, index) in faqs" :key="index">
            <b-card-header header-tag="header" class="p-2 pe-3 d-flex align-items-center justify-content-between" role="button">
                <div v-b-toggle="`accordion-${index}`" class="text-left flex-grow-1 text-truncate pe-2">{{ faq.que }}</div>
                <div class="d-flex">
                    <b-button class="me-2" size="sm" @click="editFaq(faq)">Edit</b-button>
                    <b-button size="sm" @click="deleteFaq(faq.id)">Delete</b-button>
                </div>
            </b-card-header>
            <b-collapse :id="`accordion-${index}`" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>{{ faq.ans }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <create-modal ref="modal" :data="selectedFaq"></create-modal>
    </div>
</template>

<script>
    import CreateModal from "./CreateModal.vue";
    import { mapGetters } from "vuex";

    export default {
        components: { CreateModal },
        data() {
            return {
                selectedFaq: {},
            };
        },

        computed: {
            ...mapGetters(["faqs"]),
        },

        methods: {
            editFaq(faq) {
                this.selectedFaq = faq;
                this.$refs.modal.openModal();
            },

            deleteFaq(id) {
                if (window.confirm("Are you sure you want to delete?")) {
                    const faqs = this.$store.state.faqs;
                    localStorage.setItem("faqs", JSON.stringify(faqs.filter((d) => d.id != id)));
                    this.$store.commit("setFaqs");
                }
            },
        },
    };
</script>

<style>
    .not-collapsed svg {
        transform: rotate(180deg);
        transition-duration: 200ms;
    }
</style>
