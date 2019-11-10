<template>
    <v-container>

        <h1>Contact us </h1>
        <p>Leave a message and we will get back to you as soon as possible.</p>

        <v-form @submit.prevent="submit" id="check-contact-form">

            <v-text-field
                    v-model="email"
                    v-validate="'required|email'"
                    :error-messages="errors.collect('email')"
                    label="E-mail"
                    data-vv-name="email"
                    required
            ></v-text-field>
            <v-textarea

                    v-model="name"

                    :error-messages="errors.collect('name')"
                    label="Your message"
                    data-vv-name="name"
                    required
            ></v-textarea>



            <v-btn type="submit" color="primary" form="check-contact-form" @click="submit">Send</v-btn>


            <v-snackbar
                    v-model="snackbar"
                    bottom="bottom"
                    right="right"
                    :timeout="timeout"

            >
                {{message}}
                <v-btn
                        color="pink"
                        flat
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>

        </v-form>
    </v-container>
</template>
<script>

    import Vue from 'vue';
    import VeeValidate from 'vee-validate';
    import { mapState, mapGetters } from 'vuex';

    Vue.use(VeeValidate);

    export default {
        $_veeValidate: {
            validator: 'new'
        },



        data: () => ({
            name: '',
            email: '',
            emailSent:'',
            timeout: 6000,
            snackbar: false
        }),
        watch: {
            message (newCount, oldCount) {
                this.snackbar = true


                this.loading = false

            }
        },

        computed: {
            ...mapGetters([
                'message'
            ]),
        },

        methods: {
            submit () {
                let once = true
                const email = {
                    email: this.email,
                    text: this.name,
                    subject: 'Contact form',
                    postUrl: 'contact-us/',
                    getUrl: '',
                    commit: '',
                }


                this.$validator.validateAll().then((res) => {
                    if(res && once){
                        this.$store.commit('MESSAGE', 'Sending...')


                        this.$store.dispatch('post', email)

                        this.clear();
                        once = false
                    }

                }).catch(() => {
                    // Failed
                });


                },
                clear () {
                    this.name = ''
                    this.email = ''

                    this.$validator.reset()

                }

        }

    }
</script>