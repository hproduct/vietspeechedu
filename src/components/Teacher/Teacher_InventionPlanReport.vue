<template>
    <div class="col-12" v-show="!this.$store.state.isLoading">
        <div class="col-12 d-flex flex-row-reverse" style="margin-top: 10px;">
            <button type="button" class="btn btn-light col-3 text-center" @click="openCreateNewReportModal()"> + Tạo báo cáo mới</button>
        </div>
        <div class="ItemList d-flex flex-column" v-for="rep in listReport" :key="rep">
            <p class="time">{{ rep.createdDate }}-{{ rep.createdTime }}</p>
            <p class="Title">{{ rep.interventionReportContent }}</p>
            <p class="correct">Độ chính xác: {{ rep.score_evaluate }}</p>
            <p class="correct">Bởi giáo viên: {{ rep.createdBy }}</p>
        </div>
        <Paging :totalPage="this.totalPage" v-show="this.isShowPaging" v-on:onClickToPage="onClickToPage" id="paging"></Paging>
        <CreateNewInventionReport v-show="this.isShowCreateNewReportModal" v-on:onclose="this.closeCreateNewReportModal"></CreateNewInventionReport>
    </div>

</template>
<script>
import Paging from '../Paging.vue';
import CreateNewInventionReport from '@/components/Teacher/CreateNewInventionReport.vue'
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { Method, StudentAPI, ContentType } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";

export default {
    name: "InterventionPlanReport",
    components: {
        Paging,
        CreateNewInventionReport
    },
    methods: {
        updateIsLoading(newLoadingState) {
            this.$store.commit("setIsLoading", newLoadingState);
        },

        openCreateNewReportModal() {
            this.isShowCreateNewReportModal = true;
        },

        closeCreateNewReportModal() {
            this.isShowCreateNewReportModal = false;
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
            this.getInvertionPlanReport(pageIndex);
        },

        updateInteventionPlanReportList(newListReport) {
            this.listReport = [...newListReport]
        },

        getInvertionPlanReport(pageIndex) {
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
                this.updateInteventionPlanReportList(response.data.resultList);
                this.updateTotalPage(response.data.totalPage);
                } else {
                    // do something
                 }
                this.updateIsLoading(false);
            });
        }
    },
    created() {
        this.getInvertionPlanReport(0)
    },
    data() {
        return {
            listReport: [],
            totalPage: 0,
            isShowPaging: false,
            isShowCreateNewReportModal: false,
        };
    },
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