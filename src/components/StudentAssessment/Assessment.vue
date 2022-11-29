<template>
    <div>
        <button type="button" class="btn btn-primary" @click="openAssessmentModal()"> Open</button>
    </div>
    <div>
        <button type="button" class="btn btn-primary" @click="openConfirmDialog()"> Open Confirm Dialog </button>
    </div>
    {{ this.isShowAssessmentModal }}
    <DialogConfirm v-show="this.isShowDialogConfirm" v-on:onClickEventModal="closeConfirmDialog" :Title="title" :content="content"></DialogConfirm>

    <AssessmentDetailModal v-show="this.isShowAssessmentModal" v-on:onclose="closeAssessmentModal()">
    </AssessmentDetailModal >
</template>
<script>
import AssessmentDetailModal from './AssessmentDetailModal.vue';
import DialogConfirm from '../Modal/DialogConfirm.vue';
export default {
    name: "TeacherInventionPlan",
    components: {
        AssessmentDetailModal,
        DialogConfirm,
    },
    data() {
        return {
            isShowAssessmentModal: false,
            isShowDialogConfirm: false,
            title: "Xác nhận thực hiện thao tác",
            content: "Bạn có chắc chắn muốn thực hiện thao tác này ?",
        };
    }, methods: {
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

    }
}
</script>
<style scoped>

</style>