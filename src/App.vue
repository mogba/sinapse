<template>
    <div id="app">
        <head></head>
        <body>
            <main-page />
            <componente-teste-requisicoes />
        </body>
    </div>
</template>

<script>
import MainPage from "./components/MainPageComponent.vue";
//import ComponenteTesteRequisicoes from "./components/ComponenteTesteRequisicoes.vue";

export default {
    name: 'App',
    components: {
        MainPage,
        //ComponenteTesteRequisicoes
    }
}
</script>

<style lang="scss">

</style>
