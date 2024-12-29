  <template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-toolbar-title>Ainur assessment</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="handleLogout">
        Log out
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    handleLogout(){
      try{
        localStorage.clear()
        this.$router.push('/signin')
      } catch(err){

      }
    }
  }
}
</script>