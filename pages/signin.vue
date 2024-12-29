<template>
    <div>
      <h1 align="center">Sign in</h1>
      <form @submit.prevent="handleSignIn">
        <div>
          <v-text-field
            v-model="signInPayload.username"
            :rules="rules"
            label="Username"
          />
        </div>
        <div>
          <v-text-field
            v-model="signInPayload.password"
            :rules="rules"
            label="Password"
          />
        </div>
        <v-btn
          class="text-none mb-4"
          color="primary"
          size="x-large"
          variant="flat"
          block
          type="submit"
        >
          Sign in
        </v-btn>
      </form>
      <router-link to="/signup">Sign up</router-link>
    </div>
</template>

<script>
export default {
  name: 'SignInPage',
  layout: 'custom',
  data(){
    return{
      loading: false,
      signInPayload: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSignIn(){
      try{
        this.loading = true
        this.$nuxt.$loading.start()
        
        const res = await this.$axios.$post('/signin', this.signInPayload)
        console.log(res)
        localStorage.setItem('token', res.token)
        this.$router.push('/')
      } catch(err){ 
        console.log(err)        
      } finally{
        // this.loading = false 
        this.$nuxt.$loading.finish()
      }
    }
  }
}
</script>