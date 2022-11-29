<template>
    <div class="modal-bg" @click.self="onClickCloseModal()">
        <div class="modal-dialog modal-dialog-centered modal modal-lg modal-child" id="LoginModal">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between">
                    <h5>Tạo báo cáo ngày</h5>
                    <button class="btn btn-secondary" @click="onClickCloseModal()">
                        &times;
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <div class="input-area">
                        <p class="title">Tích cực:</p>
                        <div>
                            <textarea class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="input-area">
                        <p class="title">Cần cải thiện:</p>
                        <div>
                            <textarea class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="container">
                        <p class="text-center bolder">Nhận xét học bán trú: </p>
                        <div class="col-12 d-inline-flex">
                            <div class="col-8 padding-left-30 d-inline-flex">
                                <div class="col-3">
                                    <p>Sức khỏe: </p>
                                    <p>Ăn uống: </p>
                                    <p>Giấc ngủ: </p>
                                </div>
                                <div class="col-8">
                                    <input type="text" class="customs-input w-100" />
                                    <input type="text" class="customs-input w-100" />
                                    <input type="text" class="customs-input w-100" />
                                </div>
                            </div>
                            <div class="col-4">
                                <p>Đi vệ sinh: <span><input type="number" class="customs-input w-100px" /></span> lần
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-primary col-3"> Gửi báo cáo</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "CreateDayReportDetailModal",
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
            report: this.reportProp
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

.input-area {
    border-radius: 10px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 1rem;
}

p.title {
    border-bottom: 1px solid #ccc;
}

.bolder {
    font-weight: bold;
}

.customs-input {
    display: inline-block;
    padding: 5px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
}

.w-100px {
    width: 100px;
}
</style>
  