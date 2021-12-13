<template>
    <div class="column is-3 is-narrow">
        <div class="card large">
            <div class="card-content" v-show="post.ID_POST > 0">
                <div class="content">
                    {{post.DESCRICAO}}
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
            ID_POST: -1,
            linkImagem: "",
            DESCRICAO: "",
        },
    },
    mounted() {
        this.adicionarImagemDoPostAoCard();
    },
    methods: {
        adicionarImagemDoPostAoCard() {
            //if (!this.post || !this.post.linkImagem)
            //    return;

            const cardStyle = this.$el.querySelector("div.card").style;
            cardStyle.backgroundImage = `url("https://media.istockphoto.com/photos/abstract-background-wallpaper-picture-id952039286?b=1&k=20&m=952039286&s=170667a&w=0&h=LmOcMt7FHxFUAr2bOSfTUPV9sQhME6ABtAYLM0cMkR4=")`;
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