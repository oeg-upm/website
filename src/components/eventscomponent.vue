<template>
    <div class="container fill">
        <div class="row mt-5">
            <div class="col-sm-12 col-lg-6">
                <h2>{{title}}</h2>
                <b-button variant="info" class="mt-3">{{date}}</b-button>
                <h5 class="mt-3"><b>{{subtitle}}</b></h5>
                <p class="mt-3">{{description}}</p>
            </div>
            <div class="col-sm-12 col-lg-6">
                <calendar
                :eventCategories="eventCategories"
                :events="events"
                ref="calendar"
                />
            </div>
        </div>
    </div>
</template>
 
<script>
import {Calendar} from 'vue-sweet-calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'
export default {
        name: 'eventscomponent',
        components: {Calendar},
        data() {
            return {
                eventCategories: [
        {
          id: 1,
          title: 'Personal',
          textColor: 'white',
          backgroundColor: 'Blue'
        },
        {
          id: 2,
          title: 'Company-wide',
          textColor: 'white',
          backgroundColor: 'red'
        }
      ],
      events: [
        {
          title: 'Event 1',
          start: '2019-04-02',
          end: '2019-04-04',
          repeat: 'monthly',
          categoryId: 1
        },
        {
          title: 'Event 2',
          start: '2019-04-08',
          end: '2019-04-09',
          repeat: 'yearly',
          categoryId: 1
        },
        {
          title: 'Event 3',
          start: '2019-04-10',
          end: '2019-04-11',
          repeat: 'never',
          categoryId: 2
        },
        {
          title: 'Event 4',
          start: '2019-04-23',
          end: '2019-04-23',
          repeat: 'monthly',
          categoryId: 2
        }
      ],
                title:String,
                subtitle:String,
                description:String,
                date:String

            }
        },
        methods:{
            goToday() {
                this.$refs.calendar.goToday()
            }
        },

        mounted() {
            this.title = "Scientific Event";
            this.subtitle = "7th LIDER Roadmapping Workshop at Madrid "
            this.date = "Sep 23rd 19"
            this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proidLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qgiat nore eu fugiat afugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
            if(window.location.href == 'http://localhost:8080/events/scientificEvents'){
                this.title = "Scientific Events";
            }else{
                this.title = "Social Events";
            }
}
    }
</script>