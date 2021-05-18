<template>
  <div>
    <Navbar/>
    <div class="spacing">
        <h1 class="text-center"> Classement De La Session Active </h1>
        
        <div>
          <b-table striped hover :items="scores"></b-table>
        </div>

        <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==0'>
          <h2>Mon Classement</h2>
          <b-table striped hover :items="userscore"></b-table>
        </div>
    </div>
    

    <Footer/>
    
  </div>
</template>

<style>
.sesbutton-position {
  text-align: center;
  margin-bottom: 2em;
}

.spacing {
  margin-top: 10em;
  margin-bottom: 10em;
}
</style>

<script>
  import FlipCountdown from 'vue2-flip-countdown'

  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'

  import score from '../services/score'

  export default {
    beforeMount(){
      this.getScore()
      this.userScore()
    },
    components: { FlipCountdown, Navbar, Footer },

    data() {
      return {
        slide: 0,
        sliding: null,
        scores: [],
        userscore:[]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      async getScore(){
        let response = await score.getScore()
        this.scores = response.data
      },
      async userScore(){
        let res = await score.userScore({id:this.$store.state.user.user.ID})
        this.userscore.push(res.data)
      }
    }
  }
</script>