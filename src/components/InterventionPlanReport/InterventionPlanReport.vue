<template>
  <div class="col-12" v-show="!this.$store.state.isLoading">
    <div
      class="ItemList d-flex flex-column"
      v-for="rep in listReport"
      :key="rep"
    >
      <p class="time">{{ rep.createdDate }}-{{ rep.createdTime }}</p>
      <p class="Title">{{ rep.interventionReportContent }}</p>
      <p class="correct">Độ chính xác: {{ rep.score_evaluate }}</p>
      <p class="correct">Bởi giáo viên: {{ rep.createdBy }}</p>
    </div>
  </div>
  <Paging
      :totalPage="this.totalPage"
      v-show="this.isShowPaging"
      v-on:onClickToPage="onClickToPage"
      id="paging"
    ></Paging>
</template>

<script>
import Paging from "../Paging.vue";
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { Method, StudentAPI, ContentType } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";

export default {
  name: "InterventionPlanReport",
  components: {
    Paging
  },
  methods: {
    updateIsLoading(newLoadingState) {
      this.$store.commit("setIsLoading", newLoadingState);
    },

    updateTotalPage(newTotalPage) {
      if (newTotalPage == 1) {
        this.isShowPaging = false
      }
      else {
        this.isShowPaging = true
        this.totalPage = newTotalPage;
      }
    },

    onClickToPage(pageIndex) {
      this.getListInteventionPlanReport(pageIndex);
    },

    updateInteventionPlanReportList(newListReport) {
      this.listReport = [...newListReport]
    },

    getListInteventionPlanReport(pageIndex) {
      let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
      this.updateIsLoading(true);
      FetchApiWithCustomHeader(
        StudentAPI.GetStudentIntenventionPlanList +`/${this.$route.params.id}/${pageIndex}/3`,
        Method.GET,
        {
          Content_Type: ContentType.JSON,
          Authorization: `${tokenType} ${token}`,
        },
        null,
        null,
        (response) => {
          if (response.result === "OK") {
            console.log(response.data.resultList[0])
            this.updateInteventionPlanReportList(response.data.resultList);
            this.updateTotalPage(response.data.totalPage);
          } else {
            // do something
          }
          this.updateIsLoading(false);
        }
      );
    },
  },
  created() {
    this.getListInteventionPlanReport(0)
  },
  data() {
    return {
      listReport: [],
      totalPage: 0,
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
.ItemList p.Title {
  margin-top: auto !important;
  margin-bottom: auto !important;
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
}

.ItemList p.time {
  margin-top: auto !important;
  margin-bottom: auto !important;
  margin-left: 20px;
  color: #808080;
  font-size: 15px;
}

.ItemList p.correct {
  margin-top: auto !important;
  margin-bottom: auto !important;
  margin-left: 40px;
}

.ItemList button {
  background-color: #e2e2e9;
  color: black;
  border: 1px solid #ccc;
  width: 10%;
}
</style>
