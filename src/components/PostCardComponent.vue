<template>
    <div class="column is-3 is-narrow">
        <div class="card large">
            <div class="card-content" v-show="post.id > 0">
                <div class="content">
                    {{post.conteudo}}
                    <div class="background-icon">
                        <span class="icon-twitter"></span>
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
        post: {
            id: -1,
            linkImagem: "",
            conteudo: "",
        },
    },
    mounted() {
        this.adicionarImagemDoPostAoCard();
    },
    methods: {
        adicionarImagemDoPostAoCard() {
            if (!this.post || !this.post.linkImagem)
                return;

            const cardStyle = this.$el.querySelector("div.card").style;
            cardStyle.backgroundImage = `url("${this.post.linkImagem}")`;
        }
    }
}
</script>

<style>
.card {
    overflow: hidden;
    background-size: cover;
}

.card-content {
    font-weight: bold;
}
</style>