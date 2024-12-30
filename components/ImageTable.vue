<template>
  <div>
    <v-simple-table>
      <template #default>
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
                color="primary"
                class="ma-2 white--text"
                @click="onDetailClick(image.image)"
              >
                Detail
                <v-icon
                  right
                  dark
                >
                  mdi-eye-outline
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-overlay :value="detailImage.length > 0" @click="()=> detailImage = ''">
      <v-container>
        <img :src="detailImage"/>
      </v-container>
    </v-overlay>
  </div>
</template>
  
<script>
  export default {
    name: 'ImageTable',
    props: ['userImages'], 
    data () {
      return {
        detailImage: '',
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
      }
    },
    computed: {
      images(){
        return this.userImages
      }
    },  
    methods: {
      onDetailClick(image){
        this.detailImage = image
      }
    }
  }
  </script>
  