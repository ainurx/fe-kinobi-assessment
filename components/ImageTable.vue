<template>
  <div>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-center">
            Image
          </th>
          <th class="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="image in images"
          :key="image.id"
        >
          <td>{{ image.id }}</td>
          <td align="center">
            <img :src="image.image" :alt="image.image" style="width: 150px;" />
          </td>
          <td align="center">
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="primary"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
            >
              Detail
              <v-icon
                right
                dark
              >
                mdi-eye-outline
              </v-icon>
            </v-btn>
            <v-btn
              :loading="loading3"
              :disabled="loading3"
              color="pink"
              class="ma-2 white--text"
              @click="loader = 'loading3'"
            >
              Delete
              <v-icon
                right
                dark
              >
                mdi-delete
              </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-overlay :value="false">
    <img src="https://d2ds8ldfmzo99g.cloudfront.net/kinobi_test-1735400255591.png"/>
  </v-overlay>
</div>
  </template>
  
  <script>
  export default {
    name: 'ImageTable',
    props: ['userImages'], 
    data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id'
          },
          { text: 'Image', align: "center",  value: 'image' },
          { text: 'Action', align: "center", value: 'userId' },
        ],
        // images: this.userImages,
      }
    },
    computed: {
      images(){
        return this.userImages
      }
    },  
  }
  </script>
  