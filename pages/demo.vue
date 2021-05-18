<template>
  <div>
    <Navbar/>

    <div>
      <h1 class="demo-title">Titre de la Demo</h1>
      <h5 class="text-center"> Ici vous pouvez experiencé On The Road A Game : At Home avant de vous inscricre! </h5>
      <h3 class="defi-title"> Le Défi </h3>
      <p class="description-position"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu nisi. Phasellus vitae aliquet ipsum, ut pretium sapien. In fermentum sem et accumsan venenatis. Duis dignissim sed felis vitae ultricies. Phasellus urna diam, vulputate eu rhoncus eu, tristique eu quam. Pellentesque nec lectus arcu. Vivamus nibh purus, dignissim eu eleifend in, sodales nec orci. Integer elementum iaculis faucibus. Praesent iaculis sit amet mi a sodales. In hac habitasse platea dictumst. Cras a eros feugiat, gravida ligula in, vestibulum dolor. Nulla vestibulum, leo non euismod facilisis, neque sapien interdum leo, ut ultricies risus leo id felis. Suspendisse diam massa, semper in accumsan quis, sodales sed velit. </p>
      <p class="description-position"> Praesent lobortis, arcu interdum rhoncus elementum, libero ipsum volutpat magna, in aliquet tellus enim id nulla. Proin interdum commodo enim, non imperdiet nisl viverra quis. Nulla non tortor facilisis erat posuere sagittis. Praesent est lectus, varius eu lectus auctor, luctus condimentum nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras sed tempus metus. Pellentesque a tellus non augue dictum pretium. Sed vestibulum nunc non ex aliquam, rutrum bibendum ligula dictum. Aliquam id leo non ex iaculis viverra. Ut facilisis lectus eget vestibulum consequat. Vivamus nec accumsan libero, a tincidunt ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut enim tortor. Vestibulum congue finibus dolor in euismod.</p>
    </div>

    <div>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/EvxFepfovjk"
        allowfullscreen
      ></b-embed>
    </div>

    <Footer/>

  </div>
</template>

<style>
.demo-title {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

.defi-title {
  text-align: center;
  margin-top: 1em;
  margin-bottom: 1em;
}

.description-position {
  text-align: center;
  margin-left: 0.5em;
  margin-right: 0.5em;
  margin-bottom: 1.5em;
}


</style>

<script>
  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'

  export default {
    components: { Navbar, Footer }
  }

</script>