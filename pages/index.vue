<template>
  <div>
    <v-file-input
      v-model="newImage"
      show-size
      counter
      accept=".jpg, .jpeg, .png"
      label="File input"
      @change="uploadImage"
    ></v-file-input>
    <h1>Uploaded images</h1>
    <ImageTable :user-images="images"/>
    <v-snackbar
      :timeout="1000"
      :value="showToast"
      absolute
      rounded="pill"
      center
      top
      color="green"
    >
      {{ message }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data(){
    return {
      message: '',
      showToast: false,
      newImage: null,
      images: []
    }
  },

  created(){
    this.fethImages()
  },

  methods: {
    async uploadImage(file){
      try{
        if(!this.newImage){
          return
        }
        const token = localStorage.getItem('token')
        const formData = new FormData()
        formData.append('image', file)

        const res = await this.$axios.$post('/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          token
        }})
        this.images = [res, ...this.images]
        this.showToast = true
        this.message = 'Image uploaded'
      } catch(err){
        this.showToast = true
        this.message = err.response.data
      } finally{
        this.newImage = null
      }
    },

    async fethImages(){
      try{
        const token = localStorage.getItem('token')
        const res = await this.$axios.$get('/images', { headers: { token }})
        this.images = res.rows
      } catch(err){
        console.log(err)
      }
    }
  },
}
</script>
