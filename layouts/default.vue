<template>
  <v-app dark>
    <v-main>
      <NavBar />
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '~/components/common/NavBar.vue';

export default {
  name: 'DefaultLayout',
  components: {
    NavBar
  }
}
</script>
