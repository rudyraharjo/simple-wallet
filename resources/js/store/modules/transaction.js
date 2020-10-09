// State
const state = {
    listTransactions: [],
    name: "",
    username: "",
    email: "",
    wallet_balance: "",
}

// getters
const getters = {
    GET_DATA(state){
        return state.listTransactions !== null
    },
}

// mutations
const mutations = {
    MUT_GET(state, payload) {
        state.listTransactions = payload.transaction;
        state.name = payload.name;
        state.username = payload.username;
        state.email = payload.email;
        state.wallet_balance = payload.wallet_balance;
    },
    MUT_GET_DATA_USER(state, payload){
        state.listDataUser = payload
    },
    MUT_ADD(state, payload){
        state.listTransactions.push(payload.result[0])
    },
    MUT_UPDATE(state, payload){
        console.log(payload)
        //const idx = state.listTransactions.map(t => t.id).indexOf(payload.result.id)
        //state.listTransactions.splice(idx, 1, payload.result)
    },
    MUT_DELETE(state, payload){
        state.listTransactions.splice(payload, 1)
    },
    MUT_DELETE_ALL(state, payload){
        state.listTransactions = []
    }
}

// actions
const actions = {

    ACT_LOADTRANSACTIONS(context, credentials) {  
              
        const Type = JSON.parse(localStorage.getItem('ses_storage')).token.token_type
        const Token = JSON.parse(localStorage.getItem('ses_storage')).token.access_token
        axios.defaults.headers.common['Authorization'] = Type +' '+ Token

        return new Promise((resolve, reject) => {
            axios.get(credentials)
            .then(res => {
                if(res.data.success){
                    //console.log(res.data.result);
                    context.commit('MUT_GET', res.data.result)
                    //resolve(res.data.result.transaction)
                } else {
                    reject('No Data')
                }
            })
            .catch(err => {
                reject(err)
            })
        });
    },
    ACT_SAVE_DEPOSIT(context, credentials) {
        
        const Type = JSON.parse(localStorage.getItem('ses_storage')).token.token_type
        const Token = JSON.parse(localStorage.getItem('ses_storage')).token.access_token
        axios.defaults.headers.common['Authorization'] = Type +' '+ Token
        
        return new Promise((resolve, reject) => {
            axios.post('user/PostDeposit', credentials,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if(res.data.success){
                    context.commit('MUT_DELETE_ALL', res.data)
                    resolve(res.data)
                } else {
                    //console.log(res.data.error)
                    reject('Failed add table . Please Form Field')
                }
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        });
        
    },
    ACT_SAVE_WITHDRAW(context, credentials) {
        
        const Type = JSON.parse(localStorage.getItem('ses_storage')).token.token_type
        const Token = JSON.parse(localStorage.getItem('ses_storage')).token.access_token
        axios.defaults.headers.common['Authorization'] = Type +' '+ Token
        
        return new Promise((resolve, reject) => {
            axios.post('user/PostWithdraw', credentials,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if(res.data.success){
                    context.commit('MUT_DELETE_ALL', res.data)
                    resolve(res.data)
                } else {
                    //console.log(res.data.error)
                    reject('Failed add table . Please Form Field')
                }
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        });
        
    },
    ACT_SAVE_TRANSFER(context, credentials) {
        
        const Type = JSON.parse(localStorage.getItem('ses_storage')).token.token_type
        const Token = JSON.parse(localStorage.getItem('ses_storage')).token.access_token
        axios.defaults.headers.common['Authorization'] = Type +' '+ Token
        
        return new Promise((resolve, reject) => {
            axios.post('user/PostTransfer', credentials,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if(res.data.success){
                    context.commit('MUT_DELETE_ALL', res.data)
                    resolve(res.data)
                } else {
                    //console.log(res.data.error)
                    reject(res.data)
                }
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        });
        
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}