import api from './api'

export default {
    register(data){
        console.log(data)
        return api().post('/Users', data)
    },

    login(data){
        return api().post('/Login', data)
    },

    modify(data){
        return api().post('/Modify', data)
    },

    refreshVueX(data){
        return api().post('/Refresh', data)
    },

    addUsersession(data){
        return api().post('/Addusersession', data)
    }
}