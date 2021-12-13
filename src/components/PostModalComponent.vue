<template>
    <div id="postModal" class="modal is-clipped">
        <div class="modal-background"></div>
        <div class="modal-card modal-card-custom-size">
            <header class="modal-card-head">
                <div class="column">
                    <input 
                        class="input column" 
                        type="text" 
                        placeholder="Adicionar um título ao post..."
                        v-model="post.TITULO" />
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
                                <img 
                                    id="previsualizacaoImagem" 
                                    class="previsualizacao-imagem" />

                                <div class="file-cta">
                                    <!-- <input 
                                        class="input column" 
                                        type="text" 
                                        placeholder="Adicione a URL da sua imagem"
                                        v-model="linkImagem"
                                    /> -->

                                    <!-- <div class="file-components"> -->
                                        <span class="file-icon">
                                            <font-awesome-icon icon="upload" />
                                        </span>
                                        <span class="file-label">
                                            Adicionar uma imagem ao post
                                        </span>
                                    <!-- </div> -->
                                </div>

                                <input 
                                    id="campoUploadImagem"
                                    class="file-input" 
                                    type="file" 
                                    name="imagem" 
                                    accept="image/x-png,image/jpeg,image/jpg"
                                    @change="atualizarPrevisualizacaoImagem()">

                            </label>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <textarea 
                        class="textarea conteudo-texto" 
                        placeholder="Adicionar o conteúdo do post" 
                        v-model="post.DESCRICAO">
                    </textarea>
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
import api from "../services/services";

export default {
    name: "PostModal",
    props: {
        eventBus: {},
    },
    data() {
        return {
            post: {
                ID_POST: -1,
                TITULO: "",
                CARD: "",
                DESCRICAO: "",
            },
        }
    },
    mounted() {
        this.eventBus.$on("evento-mostrar-modal", (postSelecionado) => this.mostrarModal(postSelecionado));
    },
    beforeDestroy() {
        this.eventBus.$off("evento-mostrar-modal");
    },
    methods: {
        // CRUD do post
        salvarPost() {
            if (this.post.id > 0)
            {
                alert("Alterou registro")
                return;
            }
            api.post("create/posts", {
                    "id_sinapse" : 1, //Corrigir pra pegar o ID_SINAPSE de fato
                    "titulo" : this.post.TITULO,
                    "descricao" : this.post.DESCRICAO,
                    "publico" : 1,
                    "token_acesso" : "",
                    "card" : this.post.CARD,
                    "votos" : ""
                }).then((response) => {
                    console.log(response)
                    alert("Criou registro")
                });
        },
        excluirPost() {
            if (!confirm("Deseja mesmo excluir este post?")) {
                return;
            }

            console.log(this.id_post);
                console.log(this.post.id_post);
                console.log(this.ID_POST);
                console.log(this.post.ID_POST);

            api.delete("delete/posts", {
                data: {"id_post": this.post.ID_POST}
            }).then((response) => {
                console.log(response)
            })

            console.log("Excluiu registro")

            this.post = {
                ID_POST: -1,
                TITULO: "",
                DESCRICAO: "",
                CARD: ""
            }

            // delete
        },

        // Anexo da imagem
        atualizarCampoImagem() {
            const campoImagem = document.querySelector("input.file-input");
            campoImagem.setAttribute("src", this.post.CARD);
            this.atualizarPrevisualizacaoImagem();
        },
        atualizarPrevisualizacaoImagem(ulrNovaImagem) {
            if (!ulrNovaImagem) {
                const arquivoImagem = document.querySelector("input.file-input").files[0];

                if (arquivoImagem) {
                    this.lerArquivoECarregarPrevisualizacaoImagem(arquivoImagem);
                }
            }
            else {
                this.carregarPrevisualizacaoImagem(ulrNovaImagem);
            }

            this.adicionarEventosAlternanciaPrevisualizacao();
        },
        lerArquivoECarregarPrevisualizacaoImagem(arquivoImagem) {
            this.descarregarPrevisualizacaoImagem();

            const fileReader = new FileReader();

            fileReader.onload = () => this.carregarPrevisualizacaoImagem(fileReader.result);

            fileReader.readAsDataURL(arquivoImagem);

            console.log("Sucesso em carregar pré-visualização da imagem.");
        },
        carregarPrevisualizacaoImagem(urlImagem) {
            const previsualizacaoImagem = document.getElementById("previsualizacaoImagem");
            previsualizacaoImagem.setAttribute("src", urlImagem);
            previsualizacaoImagem.style.visibility = "visible";
        },
        descarregarPrevisualizacaoImagem() {
            const previsualizacaoImagem = document.getElementById("previsualizacaoImagem");
            previsualizacaoImagem.removeAttribute("src");
            previsualizacaoImagem.style.visibility = "hidden";

            const campoImagem = document.querySelector("input.file-input");
            campoImagem.value = null;

            console.log("Sucesso em descarregar pré-visualização da imagem.");
        },
        adicionarEventosAlternanciaPrevisualizacao() {
            // let containerConteudoImagem = document.querySelector("div.conteudo-imagem");

            // containerConteudoImagem.addEventListener(
            //     "mouseenter", 
            //     () => this.mostrarElementosImagem());

            // containerConteudoImagem.addEventListener(
            //     "mouseleave", 
            //     () => this.esconderElementosImagem());

            this.esconderElementosImagem();
            document.querySelector("div.file-cta").style.visibility = "hidden";
            document.querySelector("div.file-cta").style.position = "absolute";
            document.querySelector("div.file-cta").style.zIndex = "1";
        },
        removerEventosAlternanciaPrevisualizacao() {
            // let containerConteudoImagem = document.querySelector("div.conteudo-imagem");

            // containerConteudoImagem.removeEventListener(
            //     "mouseenter", 
            //     () => this.mostrarElementosImagem());

            // containerConteudoImagem.removeEventListener(
            //     "mouseleave", 
            //     () => this.esconderElementosImagem());
            
            this.mostrarElementosImagem();
            document.querySelector("div.file-cta").style.visibility = "visible";
            document.querySelector("div.file-cta").style.removeProperty("position");
            document.querySelector("div.file-cta").style.removeProperty("zIndex");
            this.mostrarElementosImagem();
        },
        mostrarElementosImagem() {
            document.querySelector("span.file-icon").style.visibility = "visible";
            document.querySelector("span.file-label").style.visibility = "visible";
        },
        esconderElementosImagem() {
            document.querySelector("span.file-icon").style.visibility = "hidden";
            document.querySelector("span.file-label").style.visibility = "hidden";
        },

        // Alternância de visibilidade do modal
        mostrarModal(postSelecionado) {
            if (postSelecionado) {
                this.post = postSelecionado;
                
                if (this.post.CARD)
                    this.atualizarPrevisualizacaoImagem(this.post.CARD);
            }

            const modal = document.getElementById("postModal");
            modal.classList.add("is-active");
        },
        esconderModal() {
            this.descarregarPrevisualizacaoImagem();
            this.removerEventosAlternanciaPrevisualizacao();

            this.post = {
                id: -1,
                titulo: "",
                conteudo: "",
                imagem: ""
            };

            const modal = document.getElementById("postModal");
            modal.classList.remove("is-active");
        },
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },

        createImage(file) {
            //var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };

            reader.readAsDataURL(file);
        },
    }
}
</script>

<style>
.modal-card-head {
    padding: 10px;
}

.modal-card-custom-size {
    height: 80%;
    width: 80%;
}

.conteudo-imagem {
    width: 100%;
    border-radius: 4px;
}

.conteudo-imagem>input
.conteudo-imagem>span {
    display: none;
}

div .conteudo-imagem,
label .file-label {
    overflow: hidden;
}

/* implementar pelo js */
/* 
.file-cta-position {
    position: absolute; 
    z-index: 1; 
    width: 100%; 
    height: 100%; 
    align-items: center; 
    text-align: center;
} */

.conteudo-texto {
    margin-top: 20px;
}

.previsualizacao-imagem {
    position: relative;
    z-index: 0;
    width: 100%;
    object-fit: cover;
    cursor: pointer;
}
</style>
