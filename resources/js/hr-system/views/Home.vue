<template class="home">
    <div>


    <div class="home_wrapper">
        <div class="home_container">
            <v-layout row wrap >
                <v-flex
                        xs12
                        md6
                        sm6
                >
                    <div class="home__title">
                        <div class="home__title_wrapper">
                            <h1>Easy to use <span class="span-red">HR software</span><br/> designed for SMEs</h1>
                            <span class="separatoxr"></span>
                        </div>

                        <p> Say goodbye to lost paperwork, mismatched documents <br> and outdated personnel files with our easy online service.</p>

                        <div class="home__title_btn">
                            <v-btn class="white_btn" color="primary" medium><router-link  to="/about">Find out more </router-link> </v-btn>
                            <v-btn class="pink_btn" color="error" medium> <router-link  to="/register">Subscribe</router-link> </v-btn>
                        </div>

                    </div>
                </v-flex>

                <v-flex
                        xs12
                        md6
                        sm6
                        align-center
                        class="svg-col"
                >
                    <v-card color="primary" class="white--text">
                        <v-card-title text--white>
                            <div>
                                <div class="headline">Dashboard hr</div>
                                <span class="">Get started with your <strong>14 day free trial</strong> and transform how you manage your employees </span>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <router-link  to="/register"><v-btn flat dark>Start here</v-btn></router-link>
                        </v-card-actions>
                    </v-card>

                </v-flex>

            </v-layout>
        </div>







    </div>
        <div class="home_container">
        <v-layout row wrap >

            <v-flex
                    xs12
                    md6
                    sm6
                    align-center
                    class="svg-col"
            >
                <v-card color="primary" class="white--text">
                    <v-card-title text--white>
                        <div>
                            <div class="headline">Lorem upsum</div>
                            <span class="">The success of your company is about managing your employees — not paper. </span>
                        </div>
                    </v-card-title>

                </v-card>

            </v-flex>
            <v-flex
                    xs12
                    md6
                    sm6
            >
                <div class="home__title">
                    <div class="home__title_wrapper">
                        <h1><span class="span-red">Simple</span>, affordable pricing</h1>
                        <span class="separatoxr"></span>
                    </div>

                    <p>One set price for your whole company – no hidden costs!</p>

                </div>
            </v-flex>


        </v-layout>
        </div>
    </div>

</template>
<style>

    .svg-shape {
        visibility: hidden;
    }
    .one {
        visibility: visible;

    }
   /* #group{
        visibility: hidden;
        opacity: 0;
    }*/
</style>

<script>
    import {TimelineMax } from "gsap";
    export default {
        data: () => ({
            login: false
        }),
        components: {

        },
        computed: {

        }  ,
        methods: {


        },
        mounted() {

        }
    }
</script>

