<template>
  <div>
    <header>
     <b-navbar toggleable type="light" variant="light">
     <b-nav-toggle target="nav_text_collapse"></b-nav-toggle>
     <router-link to="/"><b-navbar-brand>Dates Of F1</b-navbar-brand></router-link>
     <b-collapse  is-nav id="nav_text_collapse">
       <b-nav is-nav-bar>
          <router-link to="/schedule"><a class="nav-link" href="#" >Schedule</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/results"><a class="nav-link" href="#" >Results</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/qualifying"><a class="nav-link" href="#" >Qualifying</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/standings"><a class="nav-link" href="#" >Standing</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/drivers"><a class="nav-link" href="#" >Drivers</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/f1Teams"><a class="nav-link" href="#" >F1 Teams</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/circuits"><a class="nav-link" href="#" >Circuits</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/lapsTimes"><a class="nav-link" href="#" >Laps Times</a></router-link>
       </b-nav>
       <b-nav is-nav-bar>
          <router-link to="/pitStop"><a class="nav-link" href="#" >Pit Stops</a></router-link>
       </b-nav>

    </b-collapse>
    </b-navbar>
    </header>
  </div>
</template>
<script>
    export default {
      name: 'rmTopMenu',
      data(){
        return{

        }
      }
    }
</script>
<style>

</style>
