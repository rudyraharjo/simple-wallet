// state
const state = {
    RoleName:'Role Name',
    title:'IdxWallet',
    S_CURRENT_USER: JSON.parse(localStorage.getItem('ses_storage')) || null
}

// getters
const getters = {
    IS_LOGGEDIN(state){
        return state.S_CURRENT_USER !== null
    },
    GET_USER_NAME(state){
        return state.S_CURRENT_USER.user.name
    },
    GET_USER_ROLE_NAME(state){
        return state.S_CURRENT_USER.user.role
    }
}

// mutations
const mutations = {
    MUT_GET_TOKEN(state, token) {
        state.S_CURRENT_USER = token
    },
    MUT_DESTROY_TOKEN(state) {
        state.S_CURRENT_USER = null
    },
}

// actions
const actions = {

    AC_SIGNIN(context, credentials) {
        
        return new Promise((resolve, reject) => {
            
            axios.post('/auth/signin', {
                username: credentials.username,
                password: credentials.password,
            })
            .then(res => {
                console.log(res)
                if(res.data.success){
                    localStorage.setItem('ses_storage', JSON.stringify(res.data.result))
                    context.commit('MUT_GET_TOKEN', res.data.result)
                    resolve(res.data.result)
                } else {
                    reject('Unauthorized . Please Check Email & Password')
                }
            })
            .catch(err => {
                //console.log(err)
              reject('Unauthorized . Please Check Email & Password')
            })
        });
    },
    AC_SIGNUP(context, credentials) {
        
        return new Promise((resolve, reject) => {
            axios.post('/auth/signup', {
                name:credentials.name,
                username:credentials.username,
                email: credentials.email,
                password: credentials.password,
            })
            .then(res => {
                if(res.data.success){
                    localStorage.setItem('ses_storage', JSON.stringify(res.data.result))
                    context.commit('MUT_GET_TOKEN', res.data.result)
                    resolve(res.data.result)
                } else {
                    reject('Unauthorized . Please Check Email & Password')
                }
            })
            .catch(err => {
                //console.log(err)
              reject('Unauthorized . Please Check Email & Password')
            })
        });
    },
    AC_SIGNOUT(context){

        if (context.getters.IS_LOGGEDIN) {
            
            const Type = context.state.S_CURRENT_USER.token.token_type
            const Token = context.state.S_CURRENT_USER.token.access_token

            axios.defaults.headers.common['Authorization'] = Type +' '+ Token

            return new Promise((resolve, reject) => {
                axios.post('/auth/logout').then(response => {
                    localStorage.removeItem('ses_storage');
                    context.commit('MUT_DESTROY_TOKEN')
                    resolve(response)
                }).catch(error => {
                    localStorage.removeItem('ses_storage')
                    context.commit('MUT_DESTROY_TOKEN')
                    reject(error)
                })
            });
    
        } else {
            
            return new Promise((resolve, reject) => {                
                context.commit('MUT_DESTROY_TOKEN')
                resolve("Force Remove state")
            });
            
        }
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}