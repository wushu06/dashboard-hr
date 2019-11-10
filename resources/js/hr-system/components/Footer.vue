<template>
    <footer
            color="primary"
    >
        <v-card
                color="white"
                flat

                class=" white--text text-xs-center"
        >

            <v-card-text>
                <v-btn

                        class="mx-3"
                        icon
                >
                    <a href="mailto:nourwushu@gmail.com">
                        <v-icon size="24px">i-nav fas fa-envelope-open-text</v-icon>
                    </a>
                </v-btn>
                <v-btn
                        v-for="icon in icons"
                        :key="icon.title"
                        class="mx-3 white--text"
                        icon
                >
                    <router-link :to=icon.link>
                        <v-icon size="24px">{{ icon.icon }}</v-icon>
                    </router-link>
                </v-btn>
                <v-btn
                        class="mx-3"
                        icon
                >
                    <a href="tel:+447825984061">
                        <v-icon size="24px">i-nav fas fa-phone-volume</v-icon>
                    </a>
                </v-btn>
            </v-card-text>



            <v-divider color="white"></v-divider>

            <v-card-text class="">
                <p>&copy;{{new Date().getFullYear()}} — <strong>DashboardHR</strong></p>
            </v-card-text>
        </v-card>
    </footer>
</template>
<script>
    export default {
        data: () => ({
            icons: [
                {  icon: 'i-nav fab fa-facebook', link: 'https://www.facebook.com/nourwushu' },
                {  icon: 'i-nav fab fa-twitter', link: 'https://twitter.com/NoureddineLatre' },

            ]
        })
    }
</script>