<template >
    <v-card flat color="transparent" class="subscribe">

        <v-container>
            <h1>Subscription:</h1>
            <v-alert
                    v-model="note"

                    :type="color"

            >
                <span v-html="note"></span>.
            </v-alert>
            <div v-if="this.invoice && this.admin">

                <a  :href="this.invoice" target="_blank">
                    <v-btn  fab  class="grey-color admin_add" small>
                        <v-icon color="black">fas fa-download</v-icon>
                    </v-btn>

                </a>
            </div>
            <p></p>
            <div  v-if="this.admin">
                <h2 class="subscribe_package" v-if="invoice">Update package</h2>
                <h2 class="subscribe_package" v-else>Choose package</h2>
                <v-layout row>
                    <v-flex pa-0  xs12 sm12>
                        <v-slider
                                class="subscribe_slider"
                                :tick-labels="seasons"
                                :value="1"
                                min="0"
                                max="3"
                                thumb-label
                                thumb-size="60"
                                always-dirty
                                :hint="`Number of employees: ${hint}`"
                                :label="`${price} monthly`"
                                persistent-hint
                                thumb-label="always"
                        >
                            <template v-slot:thumb-label="props">
                              <span>
                                {{ season(props.value) }}
                              </span>
                            </template>
                        </v-slider>
                        <h2 class="subscribe_billing">Billing details</h2>
                        <form>
                            <v-text-field
                                    v-model="name"
                                    :error-messages="nameErrors"
                                    label="First name"
                                    required
                                    @input="$v.name.$touch()"
                                    @blur="$v.name.$touch()"
                            ></v-text-field>
                            <v-text-field
                                    v-model="surname"
                                    :error-messages="surnameErrors"
                                    label="Last name"
                                    required
                                    @input="$v.surname.$touch()"
                                    @blur="$v.surname.$touch()"
                            ></v-text-field>

                            <v-text-field
                                    v-model="address"
                                    :error-messages="addressErrors"
                                    label="Address"
                                    name="address"
                                    required
                                    @input="$v.address.$touch()"
                                    @blur="$v.address.$touch()"
                            ></v-text-field>
                            <v-text-field
                                    v-model="postCode"
                                    :error-messages="postCodeErrors"
                                    label="Post code"
                                    required
                                    @input="$v.postCode.$touch()"
                                    @blur="$v.postCode.$touch()"
                            ></v-text-field>
                            <v-text-field
                                    v-model="city"
                                    :error-messages="cityErrors"
                                    label="City"
                                    required
                                    @input="$v.city.$touch()"
                                    @blur="$v.city.$touch()"
                            ></v-text-field>
                            <h2 class="subscribe_card">Card details</h2>
                            <card class='stripe-card'
                                  :class='{ complete }'
                                  stripe='pk_test_GGlKVvETnl09kbeJqlmf9YTh00vXQqQZfv'
                                  :options='stripeOptions'
                                      @change='complete = $event.complete'
                            />

                            <v-btn color="primary"  @click='pay' :disabled='!complete' >Checkout</v-btn>
                        </form>
                    </v-flex>
                </v-layout>
            </div>

        </v-container>
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
    </v-card>
</template>
<style>
    .StripeElement {
        box-sizing: border-box;

        height: 40px;

        padding: 10px 12px;

        border: 1px solid transparent;
        border-radius: 4px;
        background-color: white;

        box-shadow: 0 1px 3px 0 #e6ebf1;
        -webkit-transition: box-shadow 150ms ease;
        transition: box-shadow 150ms ease;
    }

    .StripeElement--focus {
        box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
        border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
        background-color: #fefde5 !important;
    }
</style>
<script>
    import { validationMixin } from 'vuelidate'
    import { required,  minLength,sameAs, email } from 'vuelidate/lib/validators'
    import { Card, createToken } from 'vue-stripe-elements-plus'
    import { mapState, mapGetters } from 'vuex';
    import moment from 'moment';

    export default {
        mixins: [validationMixin],
        validations: {
            city: { required },
            address: { required },
            postCode: { required },
            name: { required },
            surname: { required },

        },
        data: () => ({
            name: '',
            surname: '',
            address: '',
            city: '',
            postCode: '',
            seasons: [
                'Basic',
                'Bronze',
                'Silver',
                'Gold'
            ],
            package: 'plan_F35fcQyG7adY5F',
            price: '£5',
            hint: '1-10',
            complete: false,
            stripeOptions: {
                hidePostalCode: true
                // see https://stripe.com/docs/stripe.js#element-options for details
            },
            snackbar: false,
            timeout: 8000,
            userId: '',
            note: '',
            color: 'success',
            invoice: '',
            admin: false
        }),
        computed: {
            ...mapGetters([
                'message'
            ]),
            nameErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('First name is required.')
                this.$v.valid = errors.length <= 0
                return errors
            },
            surnameErrors () {
                const errors = []
                if (!this.$v.surname.$dirty) return errors
                !this.$v.surname.required && errors.push('Last name is required.')
                return errors
            },
            addressErrors () {
                const errors = []
                if (!this.$v.surname.$dirty) return errors
                !this.$v.surname.required && errors.push('Address is required.')
                return errors
            },
            cityErrors () {
                const errors = []
                if (!this.$v.name.$dirty) return errors
                !this.$v.name.required && errors.push('First name is required.')
                this.$v.valid = errors.length <= 0
                return errors
            },
            postCodeErrors () {
                const errors = []
                if (!this.$v.surname.$dirty) return errors
                !this.$v.surname.required && errors.push('Post code is required.')
                return errors
            },
        },
        components: { Card },
        watch: {
            message (newCount, oldCount) {

                this.snackbar = true
                this.errors = newCount

            }
        },
        methods: {
            pay () {

                // createToken returns a Promise which resolves in a result object with
                // either a token or an error key.
                // See https://stripe.com/docs/api#tokens for the token object.
                // See https://stripe.com/docs/api#errors for the error object.
                // More general https://stripe.com/docs/stripe.js#stripe-create-token.
                if (this.$v.$invalid) {
                    this.$store.commit('MESSAGE', 'Invalid entries.')
                    this.snackbar = true;
                } else {
                    this.$store.commit('MESSAGE', 'Processing...')
                    const metaData = this.$store.getters.companyName

                    createToken().then(
                        (val) =>{
                            const data = {
                                companyName:metaData.company_name,
                                name: this.name,
                                email: metaData.email,
                                surname: this.surname,
                                address: this.address,
                                city: this.city,
                                postCode: this.postCode,
                                package: this.package,
                                token:val.token.id,
                                user_id: this.userId,
                                stripe_id: metaData.stripe_id
                            }

                            this.$store.dispatch('subscribe', data)
                            this.clear()
                        }

                    ).catch(err=> {
                        this.$store.commit('MESSAGE', 'Payment failed!')
                    })
                  }



                this.$v.$touch()

            },
            clear () {
                this.$v.$reset()
                this.name = ''
                this.surname = ''
                this.address = ''
                this.postCode = ''
                this.city = ''

            },


            season (val) {

                switch (val) {
                    case 0:
                        this.price = '£5'
                        this.hint = '1-10'
                        this.package = 'basic' // basic
                        break;
                    case 1:
                        this.price = '£20'
                        this.hint = '11-20'
                        this.package = 'bronze' //bronze
                        break;
                    case 2:
                        this.price = '£50'
                        this.hint = '21-50';
                        this.package = 'silver' // silver
                        break;
                    case 3:
                        this.price = '£99'
                        this.hint = '51-100';
                        this.package = 'gold' //Gold
                        break;


                }
                return this.seasons[val]
            }
        },
        beforeMount(){
            this.$store.dispatch('checkToken');
            let period_end = this.$store.getters.companyName.current_period_end
            if(period_end) {
                let today = moment(new Date()).format('YYYY-MM-DD')
                if (today > period_end) {
                    this.note = 'Your account has expired, please subscribe again or make payment to continue'
                    this.color = 'error'

                } else {
                    this.note = 'Your current monthly bill ends '+period_end
                    this.color = 'success'
                }
            }
            this.invoice = this.$store.getters.companyName.invoice ?  this.$store.getters.companyName.invoice : ''
            if(this.$store.getters.companyName.is_superuser  === 1) {
               this.admin = true
            }
        },
        created(){
            const c = this.$store.getters.companyName;
            this.userId = c.user_id
            this.name = c.name
            this.surname = c.surname

        }
    }
</script>