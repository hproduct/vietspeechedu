<template>
  <DashboardHeader v-if="this.$store.state.isLogin"></DashboardHeader>
  <Header v-else></Header>
  <div class="min-vh-80">
    <router-view />
  </div>
  <Footer></Footer>
  <Teleport to="body">
    <LoadingPage v-show="this.$store.state.isLoading"></LoadingPage>
  </Teleport>
</template>

<style lang="scss">
#app {
  font-family: Arial, "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cropper-crop-box, .cropper-view-box {
    border-radius: 50%;
}
.min-vh-80{
  min-height: 80vh;
}
</style>
<script>
import LoadingPage from "@/components/LoadingPage.vue";
import Footer from "@/components/Footer.vue"
import DashboardHeader from '@/components/Header/DashboardHeader.vue'
import Header from '@/components/Header/Header.vue'

export default {
  name: "HomeView",
  components: {
    Footer,
    DashboardHeader,
    Header,
    LoadingPage
  }
};
</script>
