<template>
    <div class="errorContainer">
        <img src="@/assets/error.png" />
        <h2>{{ $store.state.error.message || "ERROR" }}</h2>
        <h1>{{ $store.state.error.code || "PLEASE TRY AGAIN" }}</h1>
    </div>
</template>

<script>
export default {
    name: "ErrorView"
}
</script>

<style scoped>
.errorContainer {
    width: max-content;
    height: 600px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.errorContainer img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
}
</style>