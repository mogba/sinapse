<template>
    <div>
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="../assets/logo.png" alt="Logo Sinapse">
                    </a>
                </div>
                <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Últimas sinapses visitadas
                            </a>
                            <div class="navbar-dropdown is-boxed">
                                <a class="navbar-item" href="admin.html">
                                    Admin
                                </a>
                                <a class="navbar-item" href="forum.html">
                                    Forum
                                </a>
                                <a class="navbar-item" href="cover.html">
                                    Cover
                                </a>
                                <a class="navbar-item" href="cards.html">
                                    Cards
                                </a>
                                <a class="navbar-item" href="blog.html">
                                    Blog
                                </a>
                                <hr class="navbar-divider">
                                <a class="navbar-item" href="search.html">
                                    Search
                                </a>
                                <a class="navbar-item is-active" href="kanban.html">
                                    Kanban
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="section search-box">
                <div class="columns">
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
                        <post-card :post="{}" />
                        <post-card :post="post" v-for="post in posts" v-bind:key="post.id" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Alternância de visibilidade dos itens do menu da barra de navegação ao clicar */
// import { navbarToggle } from '../scripts/navbar-toggle';
// mounted: function() {
//     this.$nextTick(navbarToggle())
// }

import PostCard from "../components/PostCardComponent.vue";

export default {
    name: 'MainPage',
    components: {
        PostCard,
    },
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.testar();
    },
    methods: {
        testar() {
            this.posts = [
                {
                    id: 1,
                    linkImagem: "https://source.unsplash.com/h-ACUrBngrw/1280x720",
                    conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
                {
                    id: 2,
                    linkImagem: "https://source.unsplash.com/h-ACUrBngrw/1280x720",
                    conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
                {
                    id: 3,
                    linkImagem: "",
                    conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
                {
                    id: 4,
                    linkImagem: "https://source.unsplash.com/h-ACUrBngrw/1280x720",
                    conteudo: "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted."
                },
            ]
        }
    }
}
</script>

<style>
.search-box {
    padding: 0px;
    margin: 0px;
}
/* Alternância de visibilidade dos itens do menu da barra de navegação */
/* .navbar-dropdown {
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 2px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
}

.navbar-item:hover .navbar-dropdown{
    display: block;
}

@media screen and (max-width: 1088px){
    .navbar-dropdown{
        display: none;
    }
} */
</style>