<template>
  <rm-car></rm-car>
</template>
<script>

  import rmCar from './rm-car.vue';

  export default{
    name: 'rmAllNews',
    components:{
      rmCar
    },
    data(){
      return{
        allNews: [],

      }
    },
    methods: {

    },
    mounted(){

      /*this.$http.get('http://ergast.com/api/f1/seasons.json?callback=')
          .then((response) => {
            console.log(response.data.MRData)
          }).catch((error) => {
            console.log(error);
          });




  this.$http.get('https://en.wikipedia.org/w/api.php?action=query&titles=1957_Formula_One_season&prop=revisions&rvprop=content&format=json&&origin=*')
          .then((response) => {

            let aux = response.data.query.pages[1140111].revisions[0]['*'];
              console.log(aux)
              //console.log(aux.match(/\b\w{4,}\b/g))
            }).catch((error) => {
              console.log(error);
          });*/
          /*this.$http.get('https://en.wikipedia.org/w/api.php?action=query&titles=1957_Formula_One_season&prop=revisions&rvprop=content&format=json',
          {
            headers: {
              'Control-Allow-Credentials': 'false'

          }})
          .then((response) => {
              console.log(response)
            }).catch((error) => {
              console.log(error);
          });*/
        /*  this.$http({
            method:'get',
            url:'https://en.wikipedia.org/w/api.php?action=query&titles=1957_Formula_One_season&prop=revisions&rvprop=content&format=json',
            header:{

            }
          })*/

      /*this.$http.get('http://localhost:8080/news')
           .then((news) => {

           this.allNews = news.data._embedded.news;
         })
           .catch((error) => {
            console.log(error);
          })*/
    }
  }
</script>
<style>

</style>
