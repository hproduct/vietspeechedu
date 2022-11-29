<template>
    <div id="loadingPage" class="text-center modal-dialog-centered" >
        <div>
            <img src="../assets/logo2.png" alt=""/>
            <p>Loading ...</p>
            <div class="spinner-grow text-success"></div>
            <div class="spinner-grow text-success"></div>
            <div class="spinner-grow text-success"></div>
        </div>
    </div>

</template>
<script>
</script>
<style scoped>
#loadingPage{
    width: 40%;
    margin-top: 10%;
    background-color: rgba(220, 220, 220, 0.4);
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
}

#loadingPage img{
    width: 55%;
    margin: 0;
}

#loadingPage p{
    margin: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 25px;
}

#loadingPage div{
    margin: auto;
}
</style>