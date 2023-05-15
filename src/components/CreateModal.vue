<template>
    <div>
        <b-modal v-model="showModal" :title="data?.id ? 'Edit the FAQ' : 'Create the FAQ'" @ok="submit" @hidden="reset">
            <label for="faq-que">Question</label>
            <b-form-input id="faq-que" v-model="faq.que" placeholder="Enter a question" class="mb-3 mt-1" :class="{ 'is-invalid': $v.faq.que.$error }"></b-form-input>
            <label for="faq-ans">Answer</label>
            <b-form-input id="faq-ans" v-model="faq.ans" placeholder="Enter an answer" class="my-1" :class="{ 'is-invalid': $v.faq.ans.$error }"></b-form-input>
        </b-modal>
    </div>
</template>

<script>
    import { required } from "vuelidate/lib/validators";
    const defaultFaq = { que: "", ans: "" };
    export default {
        props: {
            data: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                showModal: false,
                faq: JSON.parse(JSON.stringify(defaultFaq)),
            };
        },

        validations: {
            faq: {
                que: { required },
                ans: { required },
            },
        },

        methods: {
            openModal() {
                setTimeout(() => {
                    if (this.data?.id) {
                        this.faq = { ...this.data };
                    }
                }, 10);
                this.showModal = true;
            },

            submit(bvModalEvent) {
                this.$v.$touch();
                if (this.$v.$invalid) {
                    bvModalEvent.preventDefault();
                    return;
                }
                let newData = [];
                if (localStorage.getItem("faqs")?.length) {
                    const faqs = JSON.parse(localStorage.getItem("faqs"));
                    if (this.faq?.id) {
                        let edited = faqs.findIndex((d) => d.id === this.faq.id);
                        faqs[edited] = { ...this.faq };
                        newData = faqs;
                    } else {
                        newData = [...faqs, { id: Math.floor(Math.random() * 100), ...this.faq }];
                    }
                    localStorage.setItem("faqs", JSON.stringify(newData));
                } else {
                    localStorage.setItem("faqs", JSON.stringify([{ id: Math.floor(Math.random() * 100), ...this.faq }]));
                }
                this.$store.commit("setFaqs");
                this.$v.$reset();
            },

            reset() {
                this.faq = JSON.parse(JSON.stringify(defaultFaq));
            },
        },
    };
</script>
