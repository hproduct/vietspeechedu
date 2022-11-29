<template>
  <div v-show="!this.$store.state.isLoading">
        <div class="col-12 d-flex flex-row-reverse" style="margin-top: 20px;">
            <button type="button" class="btn btn-light col-4 text-center" @click="openInventionModal()"> + Thêm kế hoạch
                can thiệp</button>
        </div>
        {{ this.isShowInventionModal }}
        <div class="col-12">
            <div class="ItemList d-flex justify-content-between" v-for="rep in this.listAssessment" :key="rep">
                <p class="bolder">{{ rep.title }}</p>
                <button type="btn" class="btn btn-light" @click="openDayReportModal(rep)">Xem chi tiết</button>
            </div>
        </div>

    </div>
    <PagingVue :totalPage="this.totalPage" v-show="this.isShowPaging" v-on:onClickToPage="onClickToPage" id="paging">
    </PagingVue>
  <DialogConfirm
    v-show="this.isShowDialogConfirm"
    v-on:onClickEventModal="closeConfirmDialog"
    :Title= "'Xác nhận thực hiện thao tác'"
    :content="'Bạn có chắc chắn muốn thực hiện thao tác này ?'"
  ></DialogConfirm>

  <AssessmentDetailModal
    v-show="this.isShowAssessmentModal"
    v-on:onclose="closeAssessmentModal()"
  >
  </AssessmentDetailModal>
</template>

<script>
import AssessmentDetailModal from "@/components/StudentAssessment/AssessmentDetailModal.vue";
import DialogConfirm from "../Modal/DialogConfirm.vue";
import PagingVue from "../Paging.vue";

export default {
  name: "TeacherAssessment",
  components: {
    AssessmentDetailModal,
    DialogConfirm,
    PagingVue
  },
  data() {
    return {
      isShowAssessmentModal: false,
      isShowDialogConfirm: false,
      listAssessment: [{ rdId: "1" }],
      totalPage: 0,
      currentPage: this.$route.query.page || 0,
    };
  },
  methods: {
    openAssessmentModal() {
      this.isShowAssessmentModal = true;
    },

    closeAssessmentModal() {
      this.isShowAssessmentModal = false;
    },

    openConfirmDialog() {
      this.isShowDialogConfirm = true;
    },

    closeConfirmDialog(event) {
      this.isShowDialogConfirm = false;
    },

    getListAssessment(pageIndex) {
        
    }
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
    width: 15%;
}

#paging {
    
    position: relative;
    bottom: 0px;
}

.approve {
    color: green;
}

.reject {
    color: red;
}
</style>
