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
    <div class="text-center">
      <v-pagination
        v-model="currentPage"
        :length="totalOfPage"
      ></v-pagination>
    </div>
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
      currentPage: 1,
      totalOfPage: 1,
      images: []
    }
  },
  
  watch: {
    currentPage() {
      this.fethImages();
    },
    images(newImages){
      if(newImages.length > 5){
        this.images = newImages.slice(0, 5)
      }
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
      } finally{
        this.newImage = null
      }
    },

    async fethImages(){
      try{
        const token = localStorage.getItem('token')
        const res = await this.$axios.$get('/images', { 
          params: {pageNo: this.currentPage},
          headers: { token }
        })
        
        this.totalOfPage = Math.ceil(res.count / 5)
        this.images = res.rows
      } catch(err){
        if(err.response.status === 401){
          this.$router.push('/signin')
        }
        this.showToast = true
        this.message = err.response.data
      }
    }
  },
}
</script>
