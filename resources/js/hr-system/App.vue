<script src="main.js"></script>
<template>
  <v-app>
      <Header />
    <v-spacer></v-spacer>
    <router-view/>
    <v-spacer></v-spacer>
      <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
   Header, Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
