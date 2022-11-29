<template>
  <div class="col-12">
    test
    <div class="ItemList d-flex justify-content-between" v-for="rep in this.listAssessment" :key="rep">
      <p class="">{{ rep.rdId }}</p>
      <button type="btn" class="btn btn-light" @click="openAssessmentModal()">View</button>
    </div>
  </div>
  <Paging :totalPage="this.totalPage" v-show="this.isShowPaging" v-on:onClickToPage="onClickToPage" id="paging">
  </Paging>
  <AssessmentDetailModal v-show="this.isShowAssessmentModal" v-on:onclose="closeAssessmentModal()"></AssessmentDetailModal>
</template>

<script>
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, StudentAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import Paging from "@/components/Paging.vue";
import AssessmentDetailModal from './AssessmentDetailModal.vue';


export default {
  name: "StudentAssessment",
  components: {
    Paging,
    AssessmentDetailModal
  },
  methods: {
    updateIsLoading(loadingState) {
      this.$store.commit("setIsLoading", loadingState);
    },

    onClickToPage(pageIndex) {
      this.getListAssessment(pageIndex);
    },

    updateListReports(newListAssessment) {
      this.listAssessment = [...newListAssessment];
    },

    updateTotalPage(newTotalPage) {
      if (newTotalPage == 1) {
        this.isShowPaging = false;
      } else {
        this.isShowPaging = true;
        this.totalPage = newTotalPage;
      }
    },
    openAssessmentModal() {
      this.isShowAssessmentModal = true;
    },

    closeAssessmentModal() {
      this.isShowAssessmentModal = false;
    },

    getListAssessment(pageIndex) {
        
    },
  },
  created() {
    this.getListAssessment(0);
  },
  data() {
    return {
      listAssessment: [],
      totalPage: 0,
      isShowPaging: false,
      isShowAssessmentModal: false,
    };
  },
};
</script>

<style scoped>
.ItemList {
  background-color: white;
  border: 1px solid #ccc;
  margin: 15px 10px;
  border-radius: 10px;
  padding: 5px;
}

.ItemList p {
  margin-top: auto !important;
  margin-bottom: auto !important;
  margin-left: 20px;
}

.ItemList button {
  background-color: #e2e2e9;
  color: black;
  border: 1px solid #ccc;
  width: 10%;
}
</style>
