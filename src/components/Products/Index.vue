<template>
<v-layout row wrap>
  <v-flex xs12 md12>
    <p class='headline text-xs-center font-weight-bold page-title'>PRODUCT</p>
  </v-flex>
  <v-flex xs12 md12>
      <v-layout
        row
        wrap
      >
      <v-flex xs12 md12>
        <v-btn color="primary" large>Add new Product</v-btn>
      </v-flex>
      <v-flex xs12 md12> 
        <v-layout
          row
          wrap
        >     
          <v-flex xs4 md4> 
            <v-card class="card-box">
              <p class='title text-xs-center font-weight-bold'> Top Product </p>
            </v-card>
          </v-flex>
          <v-flex xs4 md4> 
            <v-card class="card-box">
              <p class='title text-xs-center font-weight-bold'> Least Fat </p>
            </v-card>
          </v-flex >
          <v-flex xs4 md4> 
            <v-card class="card-box">
              <p class='title text-xs-center font-weight-bold'> Most Calories </p>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      </v-layout>


  </v-flex>
  <v-flex xs12 md12>
    <v-container>
      <v-layout
        row
        wrap
      >
      <v-flex xs3 md3>
        <v-card style="padding: 0px 15px">
          <br>
            <p class='title text-xs-left font-weight-bold'>Filters</p>
            <v-divider/>
            <br/>
            <v-select
            solo
            label="select category of food">
            </v-select>
            <v-slider
              :max="400"
              :thumb-size="24"
              thumb-label="always"
              label="Max Calories"
            ></v-slider>
             <v-slider
              :max="50"
              :thumb-size="24"
              thumb-label="always"
              label="Max Fat"
            ></v-slider>
             <v-slider
              :max="100"
              :thumb-size="24"
              thumb-label="always"
              label="Max Carbs"
            ></v-slider>
             <v-slider
              :max="10"
              :thumb-size="24"
              thumb-label="always"
              label="Max Protein"
            ></v-slider>
             <v-slider
              :max="1"
              :thumb-size="24"
              thumb-label="always"
              label="Max Iron"
            ></v-slider>
        </v-card>
      </v-flex>
      <v-flex xs1 md1/>
      <v-flex xs8 md8>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :rows-per-page-items="numberOfRow"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.calories }}</td>
            <td class="text-xs-right">{{ props.item.fat }}</td>
            <td class="text-xs-right">{{ props.item.carbs }}</td>
            <td class="text-xs-right">{{ props.item.protein }}</td>
            <td class="text-xs-right">{{ props.item.iron }}</td>
          </template>
        </v-data-table> 
      </v-flex>
      </v-layout>
    </v-container>
  </v-flex>

</v-layout>
</template>

<script>
  export default {
    data () {
      return {
        numberOfRow: [
          15,
          30,
          { 'text': '$vuetify.dataIterator.rowsPerPageAll', 'value': -1 }
        ],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
      }
    }
  }
</script>

<style>

.page-title {
  height: 35px;
}
.card-box {
  padding: 10px 20px;
  margin: 5px 10px 0px 10px;
}
</style>
