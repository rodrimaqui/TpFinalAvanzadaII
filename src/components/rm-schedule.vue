<template>
    <div>

        <b-form-input id="exampleInput1"
                      type="text" v-model="date"
                      placeholder='Please set the date'
        ></b-form-input>
        <br>
        <b-button type="submit" variant="primary" @click='search' :disabled="!dateOk" >Search</b-button>
        <button type='submit' </button>
                  <br>
        <rm-spinner v-if='loading'></rm-spinner>
        <div v-for='c in calendar'>

          <b-card border-variant="info"
                  :img-src="c.img"
                  img-alt="Image"
                  img-top
                   style="max-width: 40rem;"
                  :header="c.raceName"
                  header-tag="header"
                  :footer="c.locality"
                  footer-tag="footer"
                  :title="c.circuitName">
                  <p class="card-text">The race was in {{c.date}}</p>
                  <b-button :href="c.url"
                        variant="primary">More Info In wikipedia</b-button>
          </b-card>
        </div>
    </div>
</template>
<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name: 'rmSchedule',
    components:{
      rmSpinner
    },
    data(){
      return{
        calendarObj: {
          img: '',
          raceName: '',
          locality:'',
          circuitName: '',
          url:'',
          date: ''

        },
        date: '',
        calendar: [],
        loading: false
      }
    },
    computed:{
      dateOk(){
        return this.date >= 1950 && this.date <= 2017;
      }
    },
    methods:{

      search(){
        this.calendar = [];
        this.loading = true;
        this.$http.get("http://ergast.com/api/f1/"+this.date+".json?callback=")
        .then((response) => {
          const aux = response.data.MRData.RaceTable.Races;

        aux.forEach((n) => {
            this.calendarObj.raceName = n.raceName;
            this.calendarObj.date = n.date;
            this.calendarObj.locality = n.Circuit.Location.locality;
            this.calendarObj.circuitName = n.Circuit.circuitName;
            this.calendarObj.url = n.Circuit.url;
            //this.searchPhotografy(n.Circuit.Location.country);
            this.calendar.push(Object.assign({}, this.calendarObj));
            //this.clearObject();
            this.loading = false;
          });

        }).catch((error) => {
          this.loading = false;
          console.log(error);
        });
      },

      clearObject(){
        this.calendarObj.raceName = '',
        this.calendarObj.locality = '',
        this.calendarObj.circuitName = '',
        this.calendarObj.url = '',
        this.calendarObj.img = ''
      },

      searchPhotografy(name){
        this.$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCESbb8aksvTXgiGEaTZ4Ev9Mw2lOCpI40&cx=008826416416088798084:ria9zrnc1gk&q="+name)
        .then((response) => {

          this.calendarObj.img = response.data.items[0].pagemap.cse_image[0].src;
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
  mounted(){

  }
}

</script>
<style>
</style>
