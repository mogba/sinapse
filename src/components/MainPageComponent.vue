<template>
    <div>
        <navbar />
        <div class="container">
            <div class="custom-section utilities-bar-sticky-position">
                <div class="columns utilities-bar-center-items">
                    <div class="column is-centered is-narrow" @click="mostrarModal()">
                        <add-post-button />
                    </div>
                    <div class="column is-centered">
                        <div class="control has-icons-left">
                            <input class="input" type="search" placeholder="Digite para pesquisar">
                            <span class="icon is-small is-left">
                                <font-awesome-icon icon="search" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="section">
                    <div class="row columns is-multiline">
                        <post-card
                            :eventBus="eventBus"
                            :post="post" 
                            v-for="post in posts" 
                            v-bind:key="post.ID_POST" />
                    </div>
                </div>
            </div>
            <post-modal :eventBus="eventBus" />
        </div>
    </div>
</template>

<script>
import Navbar from "../components/NavbarComponent.vue";
import AddPostButton from "../components/AddPostButtonComponent.vue";
import PostCard from "../components/PostCardComponent.vue";
import PostModal from "../components/PostModalComponent.vue";

import Vue from "vue";

import api from "../services/services";

export default {
    name: 'MainPage',
    components: {
        Navbar,
        AddPostButton,
        PostCard,
        PostModal,
    },
    data() {
        return {
            eventBus: {},

            posts: [],
        }
    },
    created() {
        this.eventBus = new Vue();
    },
    mounted() {
        this.carregarPosts();

        this.eventBus.$on("evento-click-post-card", (postSelecionado) => this.mostrarModal(postSelecionado));
    },
    methods: {
        carregarPosts() {
            api.get("posts").then(response => {	
                console.log("posts carregados do banco: " + JSON.stringify(response.data));	
                this.posts = response.data;	
           });

            /*
            this.posts = [
                {
                    ID_POST: 1,
                    TITULO: "Um título fictício",
                    CARD: "",
                    DESCRICAO: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
                {
                    ID_POST: 2,
                    TITULO: "Estudos - Resumo de Node.js",
                    CARD: "https://source.unsplash.com/h-ACUrBngrw/1280x720",
                    DESCRICAO: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
                {
                    ID_POST: 3,
                    TITULO: "Lista de compras",
                    CARD: "https://www.papodemamaeamelia.com.br/wp-content/uploads/2020/05/lista-loja-e1619988624693.jpeg",
                    DESCRICAO: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
                {
                    ID_POST: 4,
                    TITULO: "Respostas da prova de desenvolvimento web",
                    CARD: "https://imagensemoldes.com.br/wp-content/uploads/2018/06/Emoji-Diabinho-Sorridente-PNG.png",
                    DESCRICAO: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
                {
                    ID_POST: 5,
                    TITULO: "Estudos - Elixir",
                    CARD: "",
                    DESCRICAO: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
            ]
            */
        },
        mostrarModal(postSelecionado) {
            this.eventBus.$emit("evento-mostrar-modal", postSelecionado);
        },

        testar(post) {
            alert(post);
        }
    }
}
</script>

<style>
.custom-section {
    padding: 0.2rem 1.5rem;
}

@media screen and (min-width: 1024px) {
    .custom-section {
        padding: 0.2rem 3rem;
    }
}

.utilities-bar-center-items {
    align-items: center;
}

.utilities-bar-sticky-position {
    position: sticky;
    top: 20px;
    z-index: 1;
}
</style>