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
            <div class="container">0
                <div class="section">
                    <div class="row columns is-multiline">
                        <post-card :post="post" v-for="post in posts" v-bind:key="post.ID_POST" />
                    </div>
                </div>
            </div>
            <post-modal :eventBus="eventBus" :post="postSelecionado" />
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

            postSelecionado: {},
            posts: [],
        }
    },
    created() {
        this.eventBus = new Vue();
    },
    mounted() {
        this.carregarPosts();
    },
    methods: {
        carregarPosts() {
            api.get("posts").then(response => {	
                console.log(response.data);	
                this.posts = response.data;	
           });

            // this.posts = [
            //     {
            //         id: 1,
            //         linkImagem: "https://source.unsplash.com/h-ACUrBngrw/1280x720",
            //         conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
            //     },
            //     {
            //         id: 2,
            //         linkImagem: "https://source.unsplash.com/h-ACUrBngrw/1280x720",
            //         conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
            //     },
            //     {
            //         id: 3,
            //         linkImagem: "",
            //         conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
            //     },
            //     {
            //         id: 4,
            //         linkImagem: "https://source.unsplash.com/h-ACUrBngrw/1280x720",
            //         conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
            //     },
            // ]
        },
        mostrarModal() {
            this.eventBus.$emit("eventoMostrarModal");
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