<template>
  <div>
    <Navbar/>

    <div class="spacing">
      <h1 class="text-center"> Liste des Défis </h1>

      <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==1'>
        <div>
          <b-table striped hover :items="defilist"></b-table>
        </div>
        <div class="sesbutton-position">
          <b-button pill class="btn-color" size="lg" router-link :to="'Creationdefi'">Créer un défi</b-button>
          <b-button pill class="btn-color" size="lg" router-link :to="'Modifdefi'">Modifier un défi</b-button>
        </div>

        <div>
          <b-form @submit="onSubmit" v-if="show">
            <br>
            <select ref="selectdefi" v-model="selectdefi" name="selectdefi" id="selectdefi" required="" class="selectdefi"></select> 
            <br>
            <br>
            <select ref="selectStatut" v-model="selectStatut" name="selectStatut" id="selectStatut" required="">
              <option value="" disabled> Choisissez Un Statut</option>
              <option value="Valider"> Accepter le depot </option>
              <option value="Refuser"> Refuser le depot </option>
            </select>
            <br>
            <br>
            <input v-model="points" name="points" id="points" type="text" placeholder="Point" required="">
            <br>
            <br>
            <b-button type="submit" class="btn-color">Envoyer</b-button>
          <br>
          <br>
          </b-form>
        </div>

        <div>
          <div class="depotContainer"></div>
        </div>
      </div>

    </div>
    <Footer/>  
  </div>
</template>

<style>
.sesbutton-position {
  text-align: center;
  margin-bottom: 1em;
}

.spacing {
  margin-top: 10em;
}

.btn-color{
  background-color: #e77a35 !important;
  border: 4px solid #e77a35  !important;
}
</style>

<script>

  import Navbar from './headernavbar.vue'

  import Footer from './footer.vue'

  import ses from '../services/ses'

  export default {
    beforeMount(){
      this.getDefi()
    },

    mounted:async function(){
          let mainContainer = document.getElementsByClassName('depotContainer')[0]
          let select = document.getElementsByClassName('selectdefi')[0]
          let proofs = await ses.getAllProofs()
          proofs = proofs.data
          console.log(proofs)
          proofs.forEach(proof => {
          let option = document.createElement("option")
          option.append(proof.Titre + ' - ' + proof.Nom + ' ' + proof.Prenom)
          option.value= proof.proofid + ' ' + proof.userid
          select.append(option)
          let container = document.createElement('div')
          container.classList.add('depotContainer')
          let spacing = document.createElement('br')
          spacing.classList.add('spacing')
          let proofPicture = document.createElement('img')
          proofPicture.src = require(('../img/uploads/' + proof.Attachement))
          proofPicture.width = (200)
          proofPicture.height = (200)
          let proofTitre = document.createElement('h2')
          proofTitre.innerHTML = proof.Titre + ' : ' + proof.Nom + ' ' + proof.Prenom
          let proofStatut = document.createElement('h4')
          proofStatut.innerHTML = 'Statut: ' + proof.Statut
          mainContainer.append(container)
          container.append(spacing)
          container.append(spacing)
          container.append(proofTitre)
          container.append(proofPicture)
          container.append(proofStatut) 
          container.append(spacing)
          })
        },

    data() {
        return {
          defilist: [],
          
          form: {
          }, show: true
        }
      },

    components: { Navbar, Footer },

    methods: {
        onSubmit(event) {
        event.preventDefault()
        this.getValidateProof()
        },

        async getDefi(){
          let response = await ses.getDefi()
          this.defilist = response.data
        },

        async getValidateProof(){
          let ids = this.$refs.selectdefi.value.split(" ")
          let userID = ids[1]
          let proofID = ids[0]

          await ses.addPoints({
            userID:userID,
            points:this.points
          })

          await ses.validateProof({
            proofID:proofID,
            statut:this.$refs.selectStatut.value
          })
        }
    }
  }
</script>