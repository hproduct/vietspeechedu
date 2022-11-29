<template>
    <div>
        <h3 class="text-center bolder"> Học sinh: {{ StudentName }}</h3>
        <h4 class="text-center bolder">Học phí đã nộp</h4>
        <div class="col-12 d-flex justify-content-end  margin-top-1rem">
            <button type="button" class="btn btn-light col-3 text-center border-ccc" @click="openNewFeeModal()">+ Tạo khoảng thu</button>
        </div>
        <div class="col-12 margin-top-1rem">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Ngày tạo</th>
                        <th>Người thu</th>
                        <th>Số tiền</th>
                        <th>Nội dung</th>
                        <th>Người nộp</th>
                        <th>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="fee in listFee" :key="fee">
                        <td>{{ fee.CreatedDate }}</td>
                        <td>{{ fee.Receiver }}</td>
                        <td>{{ fee.amount }}</td>
                        <td>{{ fee.Content }}</td>
                        <td>{{ fee.Delivery }}</td>
                        <td>{{ fee.DeliveryPhone }}</td>
                    </tr>
                </tbody>

            </table>
        </div>
        
    </div>
    <NewFeeModal v-show="this.isShowNewFeeModal" v-on:onclose="closeNewFeeModal()"></NewFeeModal>
</template>
<script>
import NewFeeModal from './NewFeeModal.vue';

export default {
    name: "StaffStudentFee",
    components: {
        NewFeeModal
    },
    props: {

    },
    methods: {
        closeNewFeeModal() {
            this.isShowNewFeeModal = false;
        },
        openNewFeeModal() {
            this.isShowNewFeeModal = true;
        },
    },
    data() {
        return {
            StudentName: "Lê Sơn Hải",
            isShowNewFeeModal: false,
            listFee: [{ CreatedDate: "22/10/2022", Receiver: "Dương Thành Long", amount: "1.000.000 VND", Content: "Phụ huynh đóng tiền cho cháu là 1 tr", Delivery: "Lê Sơn Hải", DeliveryPhone: "0983xxxxxx" },
            { CreatedDate: "22/10/2022", Receiver: "Dương Thành Long", amount: "1.000.000 VND", Content: "Phụ huynh đóng tiền cho cháu là 1 tr", Delivery: "Lê Sơn Hải", DeliveryPhone: "0983xxxxxx" },
            { CreatedDate: "22/10/2022", Receiver: "Dương Thành Long", amount: "1.000.000 VND", Content: "Phụ huynh đóng tiền cho cháu là 1 tr", Delivery: "Lê Sơn Hải", DeliveryPhone: "0983xxxxxx" },
            { CreatedDate: "22/10/2022", Receiver: "Dương Thành Long", amount: "1.000.000 VND", Content: "Phụ huynh đóng tiền cho cháu là 1 tr", Delivery: "Lê Sơn Hải", DeliveryPhone: "0983xxxxxx" },]


        }
    }
}
</script>
<style scoped>
.border-ccc {
    border-color: #ccc;
}

.margin-top-1rem {
    margin-top: 1rem;
}
</style>
