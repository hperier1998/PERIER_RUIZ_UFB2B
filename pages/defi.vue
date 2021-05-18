<template>
  <div>
    <Navbar/>

    <div class="spacing">
      <h1 class="text-center"> Liste des Défis </h1>

      <div v-if='this.$store.state.user.isConnected && this.$store.state.user.user.Admin==0 && this.$store.state.user.user.isParticipant==1'>
        <div>
          <b-table striped hover :items="defilist"></b-table>
        </div>

        <div>
          <b-form @submit="onSubmit" v-if="show">
            <br>
            <select ref="selected" v-model="selected" name="selectdefi" id="selectdefi" required=""></select> 
            <br>
            <br>
            <input type="file" ref="file" @change="selectFile" name="defiproof" accept="image/">
            <br>
            <br> 
            <b-button type="submit" class="btn-color">Envoyer</b-button>
          </b-form>
        </div>

           <h1 class="text-center"> Vos depots </h1>
          <div class="proofContainer">
          </div>
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
}

.proofContainer{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.depotcontainer{
  margin-left: 20px;
  margin-right: 20px;
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

    mounted: async function(){
      let utilisateurid = this.$store.state.user.user.ID
      let defis = await ses.getDefinames({ID:utilisateurid})
      defis = defis.data
      let select = document.getElementsByTagName('select')[0]
      console.log(select)
      defis.forEach(defi => {
        let option = document.createElement('option')
        option.append(defi.Titre)
        select.append(option)
      })
      let mainContainer = document.getElementsByClassName('proofContainer')[0]
      let proofs = await ses.getProofs({ID:this.$store.state.user.user.ID})
      proofs = proofs.data
      proofs.forEach(proof => {
        let container = document.createElement('div')
        container.classList.add('depotcontainer')
        let spacing = document.createElement('br')
        spacing.classList.add('spacing')
        let proofPicture = document.createElement('img')
        proofPicture.src = require(('../img/uploads/' + proof.Attachement))
        proofPicture.width = (200)
        proofPicture.height = (200)
        let proofTitre = document.createElement('h2')
        proofTitre.innerHTML = proof.Titre
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
          selected: '',
          
          form: {
            selected: '',
          }, show: true
        }
      },

    components: { Navbar, Footer },

    methods: {
        onSubmit(event) {
        event.preventDefault()
        this.sendAttachment()
        },

        selectFile(){
          this.file = this.$refs.file.files[0]
        },

        async sendAttachment(){
          console.log(this.selected)
          let defiID = await ses.getDefiByName({
            selecttitledefi:this.selected
          })
          console.log(defiID)
          defiID = defiID.data[0].ID_Defi
          let formData = new FormData();
          formData.append('file', this.file)
          let response = await ses.addPic(formData)
          if(response.status == 200){
            await ses.sendPic({
              pic:response.data.data.filename,
              ID:this.$store.state.user.user.ID,
              defiID:defiID
            })
          }
        },

        async getDefi(){
          let response = await ses.getDefi()
          this.defilist = response.data
        }
    }
  }
</script>