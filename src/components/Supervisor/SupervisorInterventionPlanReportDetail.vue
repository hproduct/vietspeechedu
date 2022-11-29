<template>
    <div style="padding: 1rem;">
        <div class="col-12 d-flex justify-content-between">
            <button type="button" class="btn btn-light col-3" @click="backButtonClick()">Quay lại</button>
            <h4 class="bolder">{{ ReportTitle }}</h4>
        </div>
        <div class="ItemList d-flex flex-column" v-for="rep in listReport" :key="rep">
            <p class="time">{{ rep.createdDate }}-{{ rep.createdTime }}</p>
            <p class="Title">{{ rep.interventionReportContent }}</p>
            <p class="correct">Độ chính xác: {{ rep.score_evaluate }}</p>
            <p class="correct">Bởi giáo viên: {{ rep.createdBy }}</p>
        </div>
        <Paging :totalPage="this.totalPage" v-show="this.isShowPaging" v-on:onClickToPage="onClickToPage" id="paging">
        </Paging>
    </div>

</template>
<script>
import router from '@/router/Router';
import Paging from '../Paging.vue';

export default {
    name: "SupervisorInterventionPlanReportDetail",
    components: {
        Paging
    },
    methods: {
        onClickToPage(pageIndex) {
            this.getListInteventionPlanReport(pageIndex);
        },
        backButtonClick(){
            router.push('/supervisor/student-detail/intervention-plan-report');
        }
    },
    data() {
        return {
            ReportTitle: "Kế hoạch can thiệp từ ngày 1/5/2022 đến 31/8/2022",
            totalPage: 5,
            isShowPaging: true,
            listReport: [
                { createdDate: "22-10-2022", createdTime: "19:00", interventionReportContent: "content1", score_evaluate: "8.5/10", createdBy: "Dương Thành Long" },
                { createdDate: "22-10-2022", createdTime: "19:00", interventionReportContent: "content1", score_evaluate: "8.5/10", createdBy: "Dương Thành Long" },]
        }
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