<template>
    <div class="column is-4">
        <div class="card large">
            <!-- <div class="card-image">
                <figure class="image is-16by9"><img :src="post.linkImagem" alt="Image"></figure>
            </div> -->
            <!-- <div class="card-content">
                <i class="fa-plus-square fa-10x"></i> -->
                
                <!-- <span class="icon is-large" v-show="!post.id">
                    <font-awesome-icon icon="plus-square 9x" />
                </span> -->
            <!-- </div> -->
            

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
        // post: Object,
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
            // card.style.backgroundColor = "red";
        }
    }
}
</script>

<style>
.card {
    overflow: hidden;
    max-height: 220px;
    max-width: 220px;
    background-size: cover;
}

.card-content {
    font-weight: bold;
}

/* .card-image {
    width: 100px;
    height: 100px;
} */
</style>