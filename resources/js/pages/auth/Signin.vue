<template>
    <v-layout align-center justify-center style="margin-top: 6%;">
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>{{title}}</v-toolbar-title>
              </v-toolbar>
              <form method="POST">
                <v-card-text>
                    <v-text-field prepend-icon="person" v-model="form.username" label="Username / Email" type="text"></v-text-field>

                    <v-text-field prepend-icon="lock" v-model="form.password" label="Password" type="password"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn
                    v-on:click="GoRegis()"
                    text
                    color="primary"
                    x-small
                    >
                    Belum Memiliki Akun
                    </v-btn>
                    <v-spacer></v-spacer>
                    
                    <v-btn v-on:click="DoLogin()" :loading="btnLoading" color="primary">
                        Login
                    </v-btn>
                </v-card-actions>
              </form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'signin',
        data(){
            return {
                btnLoading: false,
                form: {
                    email: '',
                    password: ''
                },
            }
        },
        methods: {
            GoRegis(){
                this.$router.push({ name: 'signup' })
            },
            DoLogin(){
                
                this.btnLoading = true
                if (this.form.username != "" && this.form.password) {
                    const FormValue = this.form
                    this.$store.dispatch('auth/AC_SIGNIN', FormValue)
                    .then((res)=>{
                        this.$router.push({ name: 'dashboard' })
                    }).catch(err=>{
                        toast.fire({
                            type: 'error',
                            title: err
                        });
                    }).finally(()=>{
                        this.btnLoading = false
                    });
                } else {
                    toast.fire({
                        type: 'error',
                        title: 'Unauthorized Please Check Email & Password'
                    });
                    this.btnLoading = false
                }
            }
        },
        computed:{
            ...mapState({
                title: state => state.auth.title
            })
        }
    }
</script>