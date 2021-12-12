<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../assets/logo.png" alt="Logo Sinapse">
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <div class="navbar-burger-area">
                        <font-awesome-icon icon="bars" size="2x" />
                    </div>
                </a>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Últimas sinapses visitadas
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a 
                                class="navbar-item" 
                                v-for="sinapse in ultimasSinapsesVisitadas" 
                                v-bind:key="sinapse.nome"
                                :href="sinapse.link">
                                {{sinapse.nome}}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            ultimasSinapsesVisitadas: []
        }
    },
    mounted() {
        this.carregarUltimasSinapsesVisitadas();
        this.configurarMenuHamburguer();
    },
    methods: {
        carregarUltimasSinapsesVisitadas() {
            this.ultimasSinapsesVisitadas = [
                { nome: "Admin", link: "/" },
                { nome: "Forum", link: "/" },
                { nome: "Cover", link: "/" },
                { nome: "Cards", link: "/" },
                { nome: "Blog", link: "/" },
                { nome: "Search", link: "/" },
                { nome: "Kanban", link: "/" }
            ]
        },
        configurarMenuHamburguer() {
            document.addEventListener('DOMContentLoaded', () => {
                const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

                if ($navbarBurgers.length > 0) {
                    $navbarBurgers.forEach(el => {
                        el.addEventListener('click', () => {

                            const target = el.dataset.target;
                            const $target = document.getElementById(target);
                            
                            el.classList.toggle('is-active');
                            $target.classList.toggle('is-active');
                        });

                        el.addEventListener('resize', () => {
                            el.classList.toggle('is-active');
                        });
                    });
                }
            });
        }
    }
}
</script>

<style>
.navbar-burger-area {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>