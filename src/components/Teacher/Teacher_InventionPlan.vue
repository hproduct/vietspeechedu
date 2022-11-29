<template>
    <div v-show="!this.$store.state.isLoading">
        <div class="col-12 d-flex flex-row-reverse" style="margin-top: 20px;">
            <button type="button" class="btn btn-light col-4 text-center" @click="openInventionModal()"> + Thêm kế hoạch
                can thiệp</button>
        </div>
        {{ this.isShowInventionModal }}
        <div class="col-12">
            <div class="ItemList d-flex justify-content-between" v-for="rep in this.listReport" :key="rep">
                <p class="bolder">{{ rep.title }}</p>
                <p class="approve" v-show="rep.isApprove">Chấp thuận</p>
                <p class="reject" v-show="!rep.isApprove">Từ chối</p>
                <button type="btn" class="btn btn-light" @click="openDayReportModal(rep)">Xem chi tiết</button>
            </div>
        </div>

    </div>
    <Paging :totalPage="this.totalPage" v-show="this.isShowPaging" v-on:onClickToPage="onClickToPage" id="paging">
    </Paging>
</template>
<script>
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, StudentAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import Paging from "../Paging.vue";
import DayReportDetailModal from '@/components/DailyReport/DayReportDetailModal.vue';
import CreateReportDay from "./CreateReportDay.vue";


export default {
    name: "TeacherInventionPlan",
    components: {
        Paging,
        DayReportDetailModal,
        CreateReportDay
    },
    data() {
        return {
            listReport: [{ title: 'Kế hoạch can thiệp 3 tháng từ 1/5/2021 đến 31/8/2021', isApprove: true }, { title: 'Kế hoạch can thiệp 3 tháng từ 1/5/2021 đến 31/8/2021', isApprove: false }],
            totalPage: 7,
            isShowInventionModal: false,
            selectedReport: {},
            isShowPaging: true,
        };
    }, methods: {
        openInventionModal() {
            this.isShowInventionModal = true;
        },

        closeInventionModal() {
            this.isShowDayReportModal = false;
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