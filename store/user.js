export const state = () => ({
  })
  
  export const mutations = {
    add(state, usr) {
      state.user = usr
      state.isConnected = true
    },

    logout(state){
      state.user = null
      state.isConnected = false
    }
  }