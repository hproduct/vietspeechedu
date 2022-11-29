<template>
    <div style="padding: 1rem;">
        <div class="col-12 d-flex flex-row-reverse ">
            <button type="button" class="btn btn-light col-3" @click="CreateAssessment()">+ tạo đánh giá mới</button>
        </div>
        <div class="col-12">
            <div class="ItemList d-flex justify-content-between" v-for="rep in this.listAssessment">
                <p class="">{{ rep.name }}</p>
                <button type="btn" class="btn btn-light" @click="openAssessmentModal()" >View</button>
            </div>
        </div>
        <Paging :totalPage="this.totalPage" v-show="this.totalPage != 0" v-on:onClickToPage="onClickToPage" id="paging">
        </Paging>
        <AssessmentDetailModal v-show="this.isShowAssessmentModal" v-on:onclose="closeAssessmentModal()">
        </AssessmentDetailModal>
    </div>

</template>
<script>
import router from '@/router/Router';
import Paging from '../Paging.vue';
import AssessmentDetailModal from '../StudentAssessment/AssessmentDetailModal.vue';

export default {
    name: "StudentAssessment",
    components: {
        Paging,
        AssessmentDetailModal

    },
    methods: {
        CreateAssessment() {
            router.push({ path: "create-assessment" });
        },
        openAssessmentModal() {
            this.isShowAssessmentModal = true;
        },

        closeAssessmentModal() {
            this.isShowAssessmentModal = false;
        },
    },
    data() {
        return {
            totalPage: 5,
            isShowAssessmentModal: false,
            listAssessment: [{ name: "Kết quả đánh giá tại chỗ từ ngày 10/3/2022" },
            { name: "Kết quả đánh giá tại chỗ từ ngày 15/8/2022" }
            ],
        };
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
    width: 10%;
}
</style>