<template>
    <div class="fixed">
        <button id="add-post-button" class="button is-primary">
            <font-awesome-icon icon="plus" size="2x" />
        </button>
    </div>
</template>

<script>
export default {
    name: "AddPostButton"
}
</script>

<style>
/* .fixed {
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding: 20px;
} */

#add-post-button {
    width: 50px;
    height: 50px;
    border-radius: 50px;
}
</style>