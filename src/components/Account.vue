<template>
    <div class="d-inline-flex col-12">
        <button  type="button" class="btn btn-light d-inline-flex " id="account" v-for="acc in listAccount" :key="acc">
            <img id="avatar" class="rounded-circle" src="@/assets/avatar-demo.jpg" />
            <p class=" text-center " id="navbardrop" data-toggle="">
                {{ acc.Name }}
            </p>
        </button>
    </div>

</template>
<script>
export default {
    name: "Account",
    props: {
        listAccount: Array
    }
};
</script>
<style scoped>
#account{
    margin-left: 10px;
    margin-right: 10px;
    width: 20%;
    margin-top: 20px;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
}
#account p{
    margin: 1rem 0.5rem ;
    text-align: center;
}
</style>

