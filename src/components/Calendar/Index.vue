
<template>
<v-layout row wrap>
  <v-flex xs12 md12>
    <p class='headline text-xs-center font-weight-bold page-title'>SCHEDULE</p>
  </v-flex>
  <div class="calendar-holder">
    <calendar :events="events" />
  </div>
  <div class="form-holder">
    <h3>Schedule an event</h3>
    <event-form />
  </div>
</v-layout>
</template>
<script>
import Calendar from '@/components/Calendar/Calendar'
import EventForm from '@/components/Calendar/EventForm'
// import Pusher from 'pusher-js';
export default {
  name: 'app',
  components: {
    Calendar,
    EventForm
  },
  data(){
    return {
      events: [{
        title     :  'event1',
        start     : '2018-07-09',
        cssClass  : 'blue',
        YOUR_DATA : {}
      },
      {
        title     : 'event2',
        start     : '2018-07-10',
        end       : '2018-07-13',
        cssClass  : ['orange']
      }] 
    }
  }
}
</script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
.main {
  display: flex;
  align-items: center;
}
.calendar-holder {
  width: 65%;
}
.form-holder {
  width: 35%;
}
.form-holder > h3 {
  /* color:#9692af; */
  text-transform: uppercase;
  font-size: 16px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 10px;
}
</style>