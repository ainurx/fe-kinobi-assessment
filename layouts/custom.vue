<template>
    <v-app>

        <v-container>
          <v-row no-gutters justify="center" align="center">
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
            <Nuxt />
            </v-col>
          </v-row>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        name: 'CustomLayout'
    }
</script>