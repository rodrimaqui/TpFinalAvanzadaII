<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="520"
                img-height="140"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide caption="F1"
                        text="Maria Teres, the first woman to ever compete in Formula One racing,."
                        img-src="./../../build/img/f1.jpg"
      ></b-carousel-slide>


      <b-carousel-slide img-src="./../../build/img/f2.jpg">
      </b-carousel-slide>

      <router-link to="/chat">
      <b-carousel-slide
                      caption="CHAT"
                      text="Inside to the best race chat"
                      img-src="./../../build/img/f3.jpg">
      </b-carousel-slide>
       </router-link>



    </b-carousel>

  </div>
</template>

<script>
export default {
  name:'rmCousel',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue
