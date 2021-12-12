<template>
    <div>
        <div class="container">
            <div class="section">
                <div>
                        <div class="columns">
                            <div class="column is-narrow">
                                <button class="button is-primary" @click="buscar()">
                                    Buscar
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <button class="button is-primary" @click="criar()">
                                    Criar
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <button class="button is-primary" @click="atualizar()">
                                    Atualizar
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <button class="button is-primary" @click="excluir()">
                                    Excluir
                                </button>
                            </div>
                        </div>
                        <textarea 
                            class="input"
                            type="text"
                            name="campoQueRecebeRespostas" 
                            id="campoQueRecebeRespostas" 
                            cols="30" 
                            rows="10"
                            style="height: 300px;"
                            v-text="dados" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "../services/services";

export default {
    name: "ComponenteTesteRequisicoes",
    data() {
        return {
            dados: {
                id: "",
                oof: "",
                ooof: "",
                oooof: "",
                ooooof: "",
                oooooof: ""
            }
        }
    },
    mounted() {
    },
    methods: {
        buscar() {
            /*
            axios.get(url).then(response => {
                this.processos = response.data;
                this.processosSemFiltro = response.data;
            });
            */
           api.get("teste").then(response => {
               console.log(response.data)
           })
        },
        criar() {
            api.post("teste",{
                    "nome_sinapse": "Post do Front", 
                    "nome_usuario": "Axios Minusculo"
                }).then((response) => {
                    console.log(response)
                });
            /*
            api.post("url", {
                    oof: this.dados.oof,
                    ooof: this.dados.ooof,
                    oooof: this.dados.oooof,
                    ooooof: this.dados.ooooof,
                    ooooooof: this.dados.oooooof
                })
                .then(response =>{
                    alert(response.data);
                });
            */
        },
        atualizar() {
            api
                .put("url", {
                    oof: this.dados.oof,
                    ooof: this.dados.ooof,
                    oooof: this.dados.oooof,
                    ooooof: this.dados.ooooof,
                    ooooooof: this.dados.oooooof
                })
                .then(response =>{
                    alert(response.data);
                });
        },
        excluir() {
            if(!confirm("Quer mesmo excluir?")){
                return;
            }
            
            api
                .delete("url" + this.dados.id)
                .then(response =>{
                    this.refreshData();
                    alert(response.data);
                });
        },
    }
}
</script>

<style>
.button {
    height: 50px;
    border-radius: 50px;
}
</style>