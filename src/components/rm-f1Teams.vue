<template>
   <div>
     <b-row>
       <b-col>
     <b-form-input id="exampleInput1"
                   type="number" v-model="season"
                   placeholder='Please set the season'
     ></b-form-input>
     <br/>
     <b-button type="submit" :disabled='!checkInPut' variant="primary" @click='getDrivers' >Search</b-button>
   </b-col>
 </b-row>
    <rm-spinner v-if='loading'></rm-spinner>
    <b-row>
      <b-col>
      <div v-for='t in teams'>

          <b-card
          :title="t.name"
          bg-variant="dark"
          :img-src="t.img"
          img-alt="Image"
          img-top
          tag="article"
          text-variant="white"
          class="mb-2">
          <p class="card-text">
            {{t.name}}
            <br/>
            {{t.nationality}}
            <br/>
            <a :href='t.url'>More Info in Wikipedia</a>
          </p>
          </b-card>
          <br>
          </div>
      </b-col>
    </b-row>
   </div>
</template>
<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name: 'rmF1Teams',
    components:{
      rmSpinner
    },
    data(){
      return{
        loading: false,
        season:'',
        team:{
          name:'',
          nationality:'',
          url: '',
          img:''
        },
        teams:[]
      }
    },
    computed:{
      checkInPut(){
        return this.season >= 1950 && this.season <= 2017;
      }
    },
    methods:{
      getDrivers(){
        this.teams = [];
        this.loading = true;
        this.$http.get('http://ergast.com/api/f1/'+this.season+'/constructors.json')
        .then((response) => {
          const aux = response.data.MRData.ConstructorTable.Constructors;

          aux.forEach((n) => {
            this.team.name = n.name;
            this.team.nationality = n.nationality;
            this.team.url = n.url;

            this.teams.push(Object.assign({},this.team));

            this.loading = false;
          });

          for(let i = 0; i < this.teams.length; i++){

            let name = this.teams[i].name;

            this.searchImg(name,i);

          };
        })
        .catch((error) => {
          console.log(error);
        })
      },
      searchImg(name,index){
        this.$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCESbb8aksvTXgiGEaTZ4Ev9Mw2lOCpI40&cx=008826416416088798084:ria9zrnc1gk&q="+name)
        .then((response) => {

          if(response.data.items[0].pagemap.cse_image){
            this.teams[index].img = response.data.items[0].pagemap.cse_image[0].src;
          }
        else{
            return undefined;
          }
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
