<template>
<v-layout row wrap>
  <v-flex xs12 md12>
    <p class='headline text-xs-center font-weight-bold page-title'>USER</p>
  </v-flex>
  <v-flex xs12 md12>
      <v-layout
        row
        wrap
      >
      <v-flex xs12 md12>
        <v-btn color="primary" large>Add new User</v-btn>
      </v-flex>
      <v-flex xs12 md12> 
        <v-layout
          row
          wrap
        >     
          <v-flex xs4 md4> 
            <v-card class="card-box">
              <p class='title text-xs-center font-weight-bold'> Top User </p>
            </v-card>
          </v-flex>
          <v-flex xs4 md4> 
            <v-card class="card-box">
              <p class='title text-xs-center font-weight-bold'> Least User </p>
            </v-card>
          </v-flex >
          <v-flex xs4 md4> 
            <v-card class="card-box">
              <p class='title text-xs-center font-weight-bold'> Most Active User </p>
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
            label="select Active / Inactive">
            </v-select>
            <v-slider
              :max="400"
              :thumb-size="24"
              thumb-label="always"
              label="Max Transaction"
            ></v-slider>
             <v-slider
              :max="50"
              :thumb-size="24"
              thumb-label="always"
              label="Max Purchase"
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
            <td><img :src="props.item.avatar"/></td>
            <td class="text-xs-right">{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.address }}</td>
            <td class="text-xs-right">{{ props.item.no_trasaction }}</td>
            <td class="text-xs-right">{{ props.item.total_purchase }}</td>
            <td class="text-xs-right">{{ props.item.status }}</td>
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
            text: 'Avatar',
            align: 'left',
            sortable: false,
            value: 'avatar'
          },
          { text: 'Nama', value: 'name' },
          { text: 'Alamat', value: 'address' },
          { text: 'Jumlah Transaksi', value: 'no_trasaction' },
          { text: 'Total Biaya', value: 'total_purchase' },
          { text: 'Status', value: 'status', 
            align: 'center',
            sortable: false
          }
        ],
        desserts: [
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=FrozenYogurt',
            name: 'Abigail',
            address: 6.0,
            no_trasaction: 24,
            total_purchase: 4.0,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Icecreamsandwich',
            name: "Astral",
            address: 9.0,
            no_trasaction: 37,
            total_purchase: 4.3,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Eclair',
            name: 'Eclar',
            address: 16.0,
            no_trasaction: 23,
            total_purchase: 6.0,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Cupcake',
            name: 'Mush',
            address: 3.7,
            no_trasaction: 67,
            total_purchase: 4.3,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Gingerbread',
            name: 'Phinx',
            address: 16.0,
            no_trasaction: 49,
            total_purchase: 3.9,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Jelly bean',
            name: "Sein",
            address: 0.0,
            no_trasaction: 94,
            total_purchase: 0.0,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Lollipop',
            name: 'Poodge',
            address: 0.2,
            no_trasaction: 98,
            total_purchase: 0,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Honeycomb',
            name: "Reinv",
            address: 3.2,
            no_trasaction: 87,
            total_purchase: 6.5,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=Donut',
            name: "Alfred",
            address: 25.0,
            no_trasaction: 51,
            total_purchase: 4.9,
            status: 'active'
          },
          {
            avatar: 'https://ui-avatars.com/api/?rounded=true&name=KitKat',
            name: "Kat",
            address: 26.0,
            no_trasaction: 65,
            total_purchase: 7,
            status: 'active'
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
