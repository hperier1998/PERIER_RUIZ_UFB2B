import api from './api'

export default {
    getScore(){
        return api().get('/score')
    },
    userScore(id){
        return api().post('/userscore',id)
    }
}