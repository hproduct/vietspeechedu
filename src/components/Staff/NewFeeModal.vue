<template>
    <div class="modal-bg" @click.self="onClickCloseModal()">
        <div class="modal-dialog modal-dialog-centered modal  modal-child modal-dialog-scrollable" id="LoginModal">
            <div class="modal-content">
                <div class="modal-header col-12 d-flex justify-content-between">
                    <h5 class="col-11 text-center">Tạo khoản thu học phí mới</h5>
                    <button class="btn btn-secondary" @click="onClickCloseModal()">
                        &times;
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <p><span class="bolder">Học sinh:</span> {{this.StudentName}}</p>
                    <div class="col-12 ">
                        <p class="col-9 bolder">Tên người đóng:</p>
                        <div class="col-12">
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-12 ">
                        <p class="col-9 bolder">Số điện thoại:</p>
                        <div class="col-12">
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-12 ">
                        <p class="col-9 bolder">Số tiền đóng:</p>
                        <div class="col-12">
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                    <div class="col-12 ">
                        <p class="col-9 bolder">Ghi chú:</p>
                        <div class="col-12">
                            <textarea type="text" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="col-12 ">
                        <p class="col-9 bolder">Tên người nhận:</p>
                        <div class="col-12">
                            <input type="text" class="form-control " disabled />
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center">
                    <button type="button" class="btn btn-primary col-5"> Tạo khoảng thu </button>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "NewFeeModal",
    props: {

    },
    methods: {
        onClickCloseModal() {
            this.$emit("onclose");
        },
    },
    components: {},
    data() {
        return {
            StudentName: "Lê Sơn Hải",
        }
    }
};
</script>
  
<style scoped>
.modal-child {
    width: 800px;
}

.modal-bg {
    /* let modal the only thing user can touch */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    /* background of modal */
    background-color: rgba(100, 100, 100, 0.4);

    /* center modal */
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-center {
    text-align: center;
}

.modal-header>.btn-secondary {
    border-radius: 5px;
    margin: 5px;
    border: none;
    --bs-btn-bg: #d9d9d9;
}

.padding-left-30 {
    padding-left: 30px;
}
</style>
  