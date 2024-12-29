<template>
  <div>
    <h1 align="center">Sign up</h1>
    <form @submit.prevent="handleSignUp">
        <div>
          <v-text-field 
            v-model="userPayload.name"
            :rules="rules"
            label="name"
          />
        </div>
        <div>
          <v-text-field
            v-model="userPayload.username"
            :rules="rules"
            label="Username"
          />
        </div>
        <div>
          <v-text-field
            v-model="userPayload.password"
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
          Sign up
        </v-btn>
      </form>
      <router-link to="/signin">Sign in</router-link>
      <v-snackbar
        v-model="showToast"
        :timeout="1000"
        absolute
        color="red"
        rounded="pill"
        center
        top
      >
        {{ message }}
      </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  layout: 'custom',
  data(){
    return {
      isLoading: false,
      showToast: false,
      message: '',
      userPayload: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleSignUp(){
      try{
        this.isLoading = true
        const res = await this.$axios.$post('/signup', this.userPayload)
        localStorage.setItem('token', res.token)
        this.$router.push('/')
      } catch(err){
        this.showToast = true
        this.message = err.response.data
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>