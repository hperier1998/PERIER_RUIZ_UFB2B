<template>
  <div>
    <!-- Footer -->
    <div>
    <footer class="bg-color text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 class="text-uppercase">A propos de On The Road a Game</h5>

            <p>
              On The Road a Game est un voyage-jeu organisé par l'agence JMB Voyages.
              Mi-voyage mystère, mi-voyage aventure, 100% découverte, cette expérience unique vous ramène aux origines du voyage : la rencontre...
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Lien Rapides</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <router-link :to="'/'" class="text-dark">Acceuil</router-link>
              </li>
              <li>
                <router-link :to="'Demo'" class="text-dark">Défi Demo</router-link>
              </li>
              <li>
                <router-link :to="'Session'" class="text-dark">Session</router-link>
              </li>
              <li>
                <router-link :to="'Classement'" class="text-dark">Classement</router-link>
              </li>
              <li>
                <a href="https://www.ontheroadagame.fr/notre-equipe-de-voya-joueurs/" target="_blank" class="text-dark">A Propos</a>
              </li>
              <li>
                <a href="https://www.ontheroadagame.fr/goodies/" target="_blank" class="text-dark">Goodies</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

    </footer>
    <!-- Footer -->
    </div>
  </div>
</template>

<style>
.bg-color{
  background-color: #e77a35 !important;
}
</style>

<script>
</script>