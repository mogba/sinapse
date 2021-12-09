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
                        <!-- <a class="navbar-item is-active">
                        Home
                        </a>
                        <a class="navbar-item">
                        Examples
                        </a> -->
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
            <div class="section">
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
}
</script>