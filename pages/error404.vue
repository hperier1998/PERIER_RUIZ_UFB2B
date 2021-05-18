<template>
  <div>
    <Navbar/>
      <div class="container">
          <h1>Error 404</h1>
      </div>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'

  export default {
    components: { Navbar, Footer }
  }
</script>