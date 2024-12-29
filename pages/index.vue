<template>
  <div>
    <v-file-input
      show-size
      counter
      accept=".jpg, .jpeg, .png"
      label="File input"
      @change="uploadImage"
    ></v-file-input>
    <h1>Uploaded images</h1>
    <ImageTable :userImages="images"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data(){
    return {
      images: []
    }
  },

  created(){
    this.fethImages()
  },

  methods: {
    async uploadImage(file){
      try{
        const token = localStorage.getItem('token')
        const formData = new FormData()
        formData.append('image', file)

        const res = await this.$axios.$post('/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
          token
        }})
        console.log(res)
        // this.fethImages()
      } catch(err){
        console.log(err)
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
