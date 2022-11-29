<template>
  <div v-show="!this.$store.state.isLoading">
    <div class="col-12" v-show="!this.$store.state.isLoading">
      <div
        class="ItemList d-flex justify-content-between"
      v-for="rep in this.listReport" :key="rep"
    >
      <p class="">Báo cáo ngày {{ rep.createdDate }}</p>
      <button type="btn" class="btn btn-light" @click="openDayReportModal(rep)">Xem chi tiết</button>
    </div>
    <DayReportDetailModal
      :reportProp = "this.selectedReport"
      v-if="this.isShowDayReportModal"
      v-on:onclose="closeShowDayReportModal"
    ></DayReportDetailModal>
    </div>
    <Paging
      :totalPage="this.totalPage"
      v-show="this.isShowPaging"
      v-on:onClickToPage="onClickToPage"
      id="paging"
    ></Paging>
    
  </div>
</template>

<script>
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, StudentAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import Paging from "@/components/Paging.vue";
import DayReportDetailModal from "./DayReportDetailModal.vue";

export default {
  name: "DayReport",
  components: {
    Paging,
    DayReportDetailModal,
  },
  methods: {
    updateIsLoading(loadingState) {
      this.$store.commit("setIsLoading", loadingState);
    },

    onClickToPage(pageIndex) {
      this.getListReports(pageIndex);
    },

    updateListReports(newListReports) {
      this.listReport = [...newListReports];
    },

    updateTotalPage(newTotalPage) {
      if (newTotalPage == 1) {
        this.isShowPaging = false;
      } else {
        this.isShowPaging = true;
        this.totalPage = newTotalPage;
      }
    },

    openDayReportModal(rep) {
      document.getElementsByTagName("body")[0].classList.add("modal-open");
      this.selectedReport = { ...rep };
      this.isShowDayReportModal = true;
    },

    closeShowDayReportModal() {
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
      this.isShowDayReportModal = false;
    },

    getListReports(pageIndex) {
      let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
      this.updateIsLoading(true);
      FetchApiWithCustomHeader(
        StudentAPI.GetListDailyReport +
          `/${this.$route.params.id}/${pageIndex}/3`,
        Method.GET,
        {
          Content_Type: ContentType.JSON,
          Authorization: `${tokenType} ${token}`,
        },
        null,
        null,
        (response) => {
          if (response.result === "OK") {
            this.updateListReports(response.data.resultList);
            if (response.totalPage != 1 && this.totalPage == 0) {
              this.updateTotalPage(response.data.totalPage);
            }
            this.updateIsLoading(false);
          } else {
            // do something
          }
          this.updateIsLoading(false);
        }
      );
    },
  },
  created() {
    this.getListReports(0);
  },
  watch: {
    $route: function (newVal, oldVal) {
      this.getListReports(0);
    },
  },
  data() {
    return {
      listReport: [],
      totalPage: 0,
      isShowDayReportModal: false,
      selectedReport: {},
      isShowPaging: false,
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
