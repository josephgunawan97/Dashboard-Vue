<template>
  <v-app>
    <v-navigation-drawer
      v-model="navBar"
      class="primary"
      fixed
      clipped
      dark
      app
    >
      <v-layout justify-space-between column fill-height>
        <v-list class="pa-0">
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title style="text-align:center" class="headline">
                  <span class="font-weight-bold">DASHBOARD</span>
                  <span class="font-weight-thin"> x </span>
                  <span class="font-weight-bold">COM.</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <br>
            <v-list-group
              class="menu-dashboard"
              :prepend-icon="menu.icon"
              :key="menu.title"
              :append-icon="!menu.childMenus ? '' : 'keyboard_arrow_down'"
              :to="menu.link"
              v-for="menu in drawerItems"
            >
              <v-list-tile slot="activator"
                :to="menu.link"
                class="menu-title"
                >
                <v-list-tile-title>{{ menu.title }}</v-list-tile-title>
              </v-list-tile>
              <v-list-tile
                v-for="(submenu) in menu.childMenus"
                :key="submenu.title"
                :to="submenu.link"
              >
                <v-list-tile-title v-text="submenu.title"></v-list-tile-title>
              </v-list-tile>
            </v-list-group>
        </v-list>
        <v-btn
          justify-end
          @click="navBar = false"
        >
          <v-icon>dashboard</v-icon>Close / Open
        </v-btn> 
      </v-layout>
    </v-navigation-drawer>
  
    <v-content>    
      <transition name="slide">
        <div class="navBarToggle" v-if="!navBar">
          <v-btn @click="navBar = true" class="navBarToggleBtn primary" dark flat>
            <v-icon>dashboard</v-icon></v-btn> 
        </div>
      </transition>
      <v-container fluid fill-height >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      navBar: true
    }
  },
  computed: {
    drawerItems () {
      let drawerItems = []
      drawerItems = [
        { icon: 'trending_up',
          title: 'Dashboard',
          link: '/dashboard'
        },
        { icon: 'work',
          title: 'Product',
          link: '/product'
        },
        { icon: 'calendar_today',
          title: 'Schedule',
          link: '/schedule'
          // childMenus: [
          //   { title: 'index', link: '/' },
          //   { title: 'Fulfillment', link: '/' },
          //   { title: 'Summarize', link: '/summarize-purchase-orders' }
          // ]
        },
        // { icon: 'loyalty',
        //   title: 'Loyalty'
        //   // childMenus: [
        //   //   { title: 'index', link: '/' },
        //   //   { title: 'Fulfillment', link: '/' },
        //   //   { title: 'Summarize', link: '/summarize-purchase-orders' }
        //   // ]
        // },
        { icon: 'person',
          title: 'User',
          link: '/user'
        },
        // { icon: 'list_alt',
        //   title: 'Order',
        //   link: '/order'
        // },
        { icon: 'logout',
          title: 'Logout'
        },
        
      ]
      return drawerItems
    }
  }
}
</script>


<style>
.menu-dashboard, 
.menu-dashboard .v-list__group__header__prepend-icon .v-icon,
.menu-dashboard .v-list__group__header__append-icon .v-icon,
.v-navigation-drawer > .v-list .v-list__tile--active .v-list__tile__title {
  color: #ffffff;
} 

.v-navigation-drawer .v-list__group__header--active{
  border-left: #ffffff solid 5px;
}
.menu-dashboard .v-list__tile__title{
  color: #ffffff;
}
.menu-toolbar .v-toolbar__content{
   color: #ffffff;
}
.menu-toolbar .v-toolbar__side-icon .v-icon,
.menu-toolbar .v-btn{
   color: #ffffff;
}
.v-list__group__header :hover {
    opacity: 40;
}
.navBarToggle {
  width: 20px;
  height: 100%;
  background: #005695;
  display: block;
  position: absolute;
  left: 0;
}
.navBarToggleBtn {
  min-width: 0;
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  border-radius: 8px;
}
.navBarToggleBtn  .v-icon {
  font-size: 40px;
}
</style>