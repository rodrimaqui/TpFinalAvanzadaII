<template>
  <div>
      <rm-spinner v-if='loading'></rm-spinner>
    <div v-for='result in results'>
    <b-card :title="result.driverSurename"
          :img-src="img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 50rem;"
          class="mb-2">
    <p class="card-text">
      Position: {{result.position}}
      <br/>
      Name: {{result.driverSurename}},{{result.driverName}}
      <br/>
      Season: {{result.season}}
      <br/>
      Stage: {{result.stage}}
      <br/>
      Points: {{result.points}}
      <br/>
      Team: {{result.team}}
      <br/>
      Laps: {{result.laps}}
      <br/>
      Time: {{result.time}}
      <br/>
      <div v-if='result.millis'>Miliiseconds: {{result.millis}}</div>
      <br/>
      Status: {{result.status}}
      <br/>
      <div v-if='result.fastTime'>Fast Time: {{result.fastTime}}</div>
      <br/>
      <div v-if='result.fastLap'> Fast Lap: {{result.fastLap}}</div>
      <br/>
      <div v-if='result.averageSpeed'>Average Speed: {{result.averageSpeed}}</div>

    </p>
  </b-card>
</div>

  </div>
</template>

<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name:'rmDetailResult',
    components:{
      rmSpinner
    },
    data(){
      return{
        results:'',
        img: '',
        name:'',
        loading: false
      }
    },
    computed:{
      getSeason(){
        return  this.$route.params.season;
      },
      getStage(){
        return this.$route.params.stage;
      },
      getPosition(){
        return this.$route.params.position;
      }

    },
    methods:{
      searchPhotografy(name){
        this.loading = true;
        this.$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCESbb8aksvTXgiGEaTZ4Ev9Mw2lOCpI40&cx=008826416416088798084:ria9zrnc1gk&q="+name)
        .then((response) => {
          if(response.data.items[0].pagemap.cse_image){
          this.img = response.data.items[0].pagemap.cse_image[0].src;
        }
          this.results = this.$store.getters.getOneResult(this.getSeason,this.getStage,this.getPosition);
          this.loading = false
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
      }
    },
    mounted(){
      this.name = this.$store.getters.getName(this.getSeason,this.getStage,this.getPosition);
      this.searchPhotografy(this.name);
      //this.results = this.$store.getters.getOneResult(this.getSeason,this.getStage,this.getPosition);
    }
  }
</script>

<style>

</style>
