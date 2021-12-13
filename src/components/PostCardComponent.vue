		<template>
        <div class="column is-3 is-narrow" @click="emitirEventoParaMostrarModal()">
            <div class="card large">
                <div class="card-custom-size">
                    <div class="card-content" v-show="post.ID_POST > 0">
                        <div class="content content-titulo">
                            {{post.TITULO}}
                            <div class="background-icon">
                                <span class="icon-twitter"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'PostCard',
    props: {
        eventBus: {},

        post: {
            ID_POST: -1,
            TITULO: "",
            CARD: "",
            DESCRICAO: "",
        },
    },
    mounted() {
        this.adicionarImagemDoPostAoCard();
    },
    methods: {
        adicionarImagemDoPostAoCard() {
            if (!this.post || !this.post.CARD)
                return;

            const cardStyle = this.$el.querySelector("div.card").style;
            cardStyle.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url("${this.post.CARD}")`;
            // cardStyle.backgroundImage = `url("https://media.istockphoto.com/photos/abstract-background-wallpaper-picture-id952039286?b=1&k=20&m=952039286&s=170667a&w=0&h=LmOcMt7FHxFUAr2bOSfTUPV9sQhME6ABtAYLM0cMkR4=")`;

            const cardTituloStyle = this.$el.querySelector("div.content-titulo").style;
            cardTituloStyle.color = "white";
        },

        emitirEventoParaMostrarModal() {
            this.eventBus.$emit("evento-click-post-card", this.post);
        }
    }
}
</script>

<style>
.card {
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.card-content {
    font-weight: bold;
}

.card-custom-size {
    min-height: 200px;
}
</style>