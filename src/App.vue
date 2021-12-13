<template>
    <div id="app">
        <head></head>
        <body>
            <main-page />
            <!-- <componente-teste-requisicoes /> -->
            <!-- <post-modal /> -->
        </body>
    </div>
</template>

<script>
import MainPage from "./components/MainPageComponent.vue";
// import ComponenteTesteRequisicoes from "./components/ComponenteTesteRequisicoes.vue";
// import PostModal from "./components/PostModalComponent.vue";

export default {
    name: 'App',
    components: {
        MainPage,
        // ComponenteTesteRequisicoes,
        // PostModal
    }
}
</script>

<style lang="scss">

</style>
