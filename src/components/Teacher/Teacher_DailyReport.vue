<template>
  <div v-show="!this.$store.state.isLoading">
    <div class="col-12 d-flex flex-row-reverse" style="margin-top: 20px;">
      <button type="button" class="btn btn-light col-3 text-center" @click="openCreateDayReportModal()"> + Tạo báo cáo
        ngày</button>
    </div>
    <div class="col-12">
      <div class="ItemList d-flex justify-content-between" v-for="rep in this.listReport" :key="rep">
        <p class="">Báo cáo ngày {{ rep.createdDate }}</p>
        <button type="btn" class="btn btn-light" @click="openDayReportModal(rep)">Xem chi tiết</button>
      </div>
    </div>
    <DayReportDetailModal :reportProp="this.selectedReport" v-if="this.isShowDayReportModal"
      v-on:onclose="closeShowDayReportModal"></DayReportDetailModal>
    <CreateReportDay v-show="this.isShowCreateDayReportModal" v-on:onclose="closeCreateDayReportModal"></CreateReportDay>
    <Paging :totalPage="this.totalPage" v-show="this.isShowPaging" v-on:onClickToPage="onClickToPage" id="paging">
    </Paging>
  </div>
</template>
<script>
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, StudentAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import Paging from "../Paging.vue";
import DayReportDetailModal from '@/components/DailyReport/DayReportDetailModal.vue';
import CreateReportDay from "./CreateReportDay.vue";


export default {
  name: "Teacher_DailyReport",
  components: {
    Paging,
    DayReportDetailModal,
    CreateReportDay
  },
  created() {
    this.getListReports(0)
  },
  data() {
    return {
      listReport: [],
      totalPage: 7,
      isShowDayReportModal: false,
      isShowCreateDayReportModal: false,
      selectedReport: {},
      isShowPaging: true,
    };
  }, methods: {
    openDayReportModal(rep) {
      this.selectedReport = { ...rep };
      this.isShowDayReportModal = true;
    },
    openCreateDayReportModal() {
      this.isShowCreateDayReportModal = true;
    },

    closeShowDayReportModal() {
      this.isShowDayReportModal = false;
    },
    closeCreateDayReportModal() {
      this.isShowCreateDayReportModal = false;
    },
    updateIsLoading(newLoading) {
      this.$store.commit("setIsLoading",newLoading)
    },
    updateListReports(newListReports) {
      this.listReport = [...newListReports];
    },
    onClickToPage(pageIndex) {
      this.getListReports(pageIndex);
    },
    updateTotalPage(newTotalPage) {
      if (newTotalPage == 1) {
        this.isShowPaging = false;
      } else {
        this.isShowPaging = true;
        this.totalPage = newTotalPage;
      }
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
  }
}
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
  margin-top: 50px;
}
</style>