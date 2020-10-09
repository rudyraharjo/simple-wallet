<template>
    <v-layout>
        <v-flex xs12>
            <v-layout column>
                
                <div class="app-page-title grey lighten-4">
                    <div class="page-title-wrapper">                       
                        <v-alert
                        type="success"
                        prominent
                        text
                        >
                            Saldo {{ WalletBalance }}
                        </v-alert>
                        <div class="page-title-actions">
                            <div class="my-2">
                                <v-btn color="primary" dark class="mb-2" @click="ModalDeposit()">
                                    Deposit
                                </v-btn>
                                &nbsp;
                                <v-btn color="secondary" dark class="mb-2" @click="ModalWithdraw()">
                                    Withdraw
                                </v-btn>
                                &nbsp;
                                <v-btn color="warning" dark class="mb-2" @click="ModalTransfer()">
                                    Transfer
                                </v-btn>
                            </div>
                        </div>

                    </div>
                </div>
                
                <br />
                
                <v-card>
                    <v-card-title>
                    History Transactions
                    <v-spacer></v-spacer>
                    </v-card-title>
                    <v-data-table
                    :headers="headers"
                    :items="itemtransaction"
                    :search="search"
                    ></v-data-table>
                </v-card>

                <v-row justify="center">

                    <v-dialog v-model="dialogDeposit" persistent max-width="600px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">Deposit</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="editTextDeposit.input_deposit" label="Nominal Deposit"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="CloseDialogDeposit">Cancel</v-btn>
                                <v-btn color="primary" :loading="btnLoading" @click="SaveDeposit">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-dialog v-model="dialogWithdraw" persistent max-width="600px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">Withdraw</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="editTextWithdraw.input_withdraw" label="Nominal Withdraw"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="CloseDialogWithdraw">Cancel</v-btn>
                                <v-btn color="primary" :loading="btnLoading" @click="SaveWithdraw">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    
                    <v-dialog v-model="dialogTransfer" persistent max-width="600px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">Transfer Saldo</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="editTextTF.input_username" label="Username"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="editTextTF.input_value_transfer" label="Nominal Transfer"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="CloseDialogTransfer">Cancel</v-btn>
                                <v-btn color="primary" :loading="btnLoading" @click="SaveTransfer">Kirim</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                </v-row>  

            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        data: () => ({
            search: '',
            headers: [
                { text: 'ID', value: 'ID' },
                { text: 'Nama', align: 'left', value: 'name',},
                { text: 'status', value: 'status' },
                { text: 'Keterangan', value: 'description' },
                { text: 'Saldo', align: 'right', value: 'amount' },
            ],
            btnLoading: false,
            editTextTF: {
                input_username:"",
                input_value_transfer:0
            },
            editTextWithdraw: {
                input_withdraw:0
            },
            editTextDeposit: {
                input_deposit:0
            },
            dialogDeposit:false,
            dialogWithdraw:false,
            dialogTransfer: false, 
            dialogDelete:false,

        }),
        watch: {
            dialogTransfer (val) {
                val || this.CloseDialogTransfer()
            },
            dialogWithdraw (val) {
                val || this.CloseDialogWithdraw()
            },
            dialogDeposit (val) {
                val || this.CloseDialogDeposit()
            },
        },
        mounted (){
            
        },
        created() {
            this.loadTransactions();
        },
        methods: {
            ModalDeposit(){
                this.dialogDeposit = true
            },
            ModalWithdraw(){
                this.dialogWithdraw = true
            },
            ModalTransfer(){
                this.dialogTransfer = true
            },
            CloseDialogTransfer () {
                this.dialogTransfer = false
                this.btnLoading = false
                setTimeout(() => {
                    this.editTextTF.input_username = "";
                    this.editTextTF.input_value_transfer = 0;
                }, 300)
            },
            CloseDialogWithdraw () {
                this.dialogWithdraw = false
                this.btnLoading = false
                setTimeout(() => {
                    this.editTextWithdraw.input_withdraw = 0;
                }, 300)
            },
            CloseDialogDeposit(){
                this.dialogDeposit = false
                this.btnLoading = false
                setTimeout(() => {
                    this.editTextDeposit.input_deposit = 0;
                }, 300)
            },
            SaveDeposit(){
                this.btnLoading = true
                this.$store.dispatch('transaction/ACT_SAVE_DEPOSIT', this.editTextDeposit)
                .then(res =>{
                    this.loadTransactions();
                    toast.fire({
                        type: 'success',
                        title: res.message
                    });
                    
                })
                .catch(err => {
                    toast.fire({
                        type: 'error',
                        title: err
                    });
                })
                .finally(()=>{
                    this.btnLoading = false
                    this.CloseDialogDeposit()
                });
            },
            SaveWithdraw(){
                this.btnLoading = true
                this.$store.dispatch('transaction/ACT_SAVE_WITHDRAW', this.editTextWithdraw)
                .then(res =>{
                    this.loadTransactions();
                    toast.fire({
                        type: 'success',
                        title: res.message
                    });
                    
                })
                .catch(err => {
                    toast.fire({
                        type: 'error',
                        title: err
                    });
                })
                .finally(()=>{
                    this.btnLoading = false
                    this.CloseDialogWithdraw()
                });
            },
            SaveTransfer(){
                this.btnLoading = true
                this.$store.dispatch('transaction/ACT_SAVE_TRANSFER', this.editTextTF)
                .then(res =>{
                    
                    this.loadTransactions();
                    toast.fire({
                        type: 'success',
                        title: res.message
                    });
                    
                    
                })
                .catch(err => {
                    console.log(err)
                    
                    toast.fire({
                        type: 'error',
                        title: err.message +' '+ err.result
                    });
                    
                })
                .finally(()=>{
                    this.btnLoading = false
                    this.CloseDialogTransfer()
                });
            },
            loadTransactions(url){
                url = url || 'user';
                this.$store.dispatch('transaction/ACT_LOADTRANSACTIONS', url)
            },
            
        },
        computed:{
            itemtransaction () {
                return this.$store.state.transaction.listTransactions
            },
            WalletBalance(){
                return this.$store.state.transaction.wallet_balance
            }
        }
            
    }
</script>