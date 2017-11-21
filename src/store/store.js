
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
      driverResult: [],
    },
    getters:{

      getOneResult: (state, getters) => (season,stage,position) => {
        const aa = state.driverResult.filter(n =>  n.season == season && n.stage == stage && n.position == position);
        //console.log(aa);
        return  aa;
      },
      getName:(state, getters) => (season,stage,position) => {
        const aa = state.driverResult.filter(n =>  n.season == season && n.stage == stage && n.position == position);
        //console.log(aa);
        return  aa[0].driverSurename;
      }
    },
    mutations:{
      addResultDriver(state,resultDriver){
        state.driverResult = resultDriver;
      },


    }
});
/* mutations son los metodos   se llama con comiut
state, es la data   se llama con .state
getters computed se llama .getters*/
