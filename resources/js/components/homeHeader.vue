<template>
    <div class="header">
        <v-app-bar
                class="header_nav" color="white"
        >

            <a href="/">

                <img :src="iconUrl" alt="" height="40" >
            </a>

            <v-spacer></v-spacer>
            <div class="d-flex" v-if="!signedIn">
                <v-toolbar-title class="mr-4"><a href="/login">Login</a></v-toolbar-title>
                <v-toolbar-title><a href="/register">Register</a></v-toolbar-title>
            </div>
            <div class="d-flex" style="margin-right: 50px;" v-else>
                <v-toolbar-title class="mr-4"><a :href='"/employee/"+currentUser.id'>Profile</a></v-toolbar-title>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
    export default {

        computed: {
            iconUrl () {
                return require('../assets/images/d.svg')
                // The path could be '../assets/img.png', etc., which depends on where your vue file is
            },

        },


    }
</script>
