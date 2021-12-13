<template>
    <div id="postModal" class="modal is-clipped">
        <div class="modal-background"></div>
        <div class="modal-card modal-card-custom-size">
            <header class="modal-card-head">
                <!-- <p class="modal-card-title">{{post.titulo}}</p> -->
                <div class="column">
                    <input 
                        class="input column" 
                        type="text" 
                        placeholder="Adicionar um título ao post..."
                        @value="post.titulo" />
                </div>
                <div class="column is-narrow">
                    <button class="delete is-danger" aria-label="close" @click="esconderModal()"></button>
                </div>
            </header>

            <section class="modal-card-body">
                <!-- {{post.conteudo}} -->
                <div class="container">
                    <div class="file is-boxed">
                        <div class="conteudo-imagem">
                            <label class="file-label" for="campoUploadImagem">

                                <input 
                                    id="campoUploadImagem"
                                    class="file-input" 
                                    type="file" 
                                    name="imagem" 
                                    accept="image/x-png,image/jpeg,image/jpg"
                                    onchange="">

                                <span class="file-cta">
                                    <!-- <div class="file-components"> -->
                                        <span class="file-icon">
                                            <font-awesome-icon icon="upload" />
                                        </span>
                                        <span class="file-label">
                                            Adicionar uma image ao post...
                                        </span>
                                    <!-- </div> -->
                                </span>

                            </label>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <textarea class="textarea conteudo-texto" placeholder="e.g. Hello world"></textarea>
                </div>
            </section>
            
            <footer class="modal-card-foot">
                <div class="buttons is-right">
                    <button id="botaoExcluirPost" class="button is-danger" @click="excluirPost()" :disable="post.id > 0">Excluir</button>
                    <button class="button is-success" @click="salvarPost()">Salvar</button>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostModal",
    props: {
        eventBus: {},
    },
    data() {
        return {
            post: {
                id: -1,
                titulo: "",
                conteudo: ""
            },
        }
    },
    mounted() {
        this.eventBus.$on("eventoMostrarModal", () => this.mostrarModal());
    },
    beforeDestroy() {
        this.eventBus.$off("eventoMostrarModal");
    },
    methods: {
        // CRUD do post
        salvarPost() {
            if (this.post.id > 0)
            {
                // put
                alert("Alterou registro")
                return;
            }
            
            alert("Criou registro")
            // post
        },
        excluirPost() {
            alert("Excluiu registro")
            // delete
        },

        // Anexo da imagem
        atualizarPrevisualizacaoImagem(campoUploadImagem) {
            const imagem = campoUploadImagem.get(0).files[0];

            if (imagem) {
                
                alert("Sucesso em obter a imagem.");
                return;
            }

            alert("Error ao obter a imagem.");
        },

        // Alternância de visibilidade do modal
        mostrarModal() {
            console.log("chegou no post modal");

            const modal = document.getElementById("postModal");
            modal.classList.add("is-active");
        },
        esconderModal() {
            const modal = document.getElementById("postModal");
            modal.classList.remove("is-active");
        }
    }
}
</script>

<style>
.modal-card-head {
    padding: 10px;
}

.modal-card-custom-size {
    height: 80%;
}


#modal-card-custom-size {
    width: 80%;

}

.conteudo-imagem {
    width: 100%;
}

.conteudo-imagem>input
.conteudo-imagem>span {
    display: none;
}

.conteudo-texto {
    margin-top: 20px;
}

.file-components {
    width: 100%;
    height: 200px;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
