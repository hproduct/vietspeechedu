<template>
  <div class="home">
    <!-- v-on:testFunc run when homepage emit signal 'testFunc'-->
    <HomepageSlide
      v-on:testFunc="
        this.setIsShowEvaluateFormRequest(true)
      "
    ></HomepageSlide>
    <Teleport to="body">
      <EvaluateRequestModal
        class="EvaluateRequestModal"
        v-show="this.isShowEvaluateFormRequest"
        v-on:oncloseRequest="
          this.setIsShowEvaluateFormRequest(false)
        "
      >
      </EvaluateRequestModal>
    </Teleport>

    <HeaderCardDesk></HeaderCardDesk>

    <BenefitBoard></BenefitBoard>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import LoginModal from "@/components/Modal/LoginModal.vue";
import LoaingPage from "@/components/LoadingPage.vue";
import HomepageSlide from "@/components/Header/HomePageSlide.vue";
import EvaluateRequestModal from "@/components/Modal/EvaluateRequestForm.vue";
import HeaderCardDesk from "@/components/Header/HeaderCardDesk.vue";
import BenefitBoard from "@/components/Header/BenefitBoard.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    LoginModal,
    LoaingPage,
    HomepageSlide,
    EvaluateRequestModal,
    HeaderCardDesk,
    BenefitBoard,
  },
  methods: {
    setIsShowEvaluateFormRequest(isShowEvaluateForm) {
      this.isShowEvaluateFormRequest = isShowEvaluateForm;
      if (isShowEvaluateForm) {
        document.getElementsByTagName("body")[0].classList.add("modal-open");
      } else {
        document.getElementsByTagName("body")[0].classList.remove("modal-open");
      }
      if (isShowEvaluateForm) {
        state.isShowModal = false;
      }
    },
  },
  data() {
    return {
      isShowModal: false,
      isShowEvaluateFormRequest: false,
    };
  },
};
</script>

<style scoped>
.home {
  position: relative;
}

.EvaluateRequestModal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
}
</style>
