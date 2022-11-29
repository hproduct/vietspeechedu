<template>
    <div class="modal-bg" @click.self="onClickCloseModal()">
        <div class="modal-dialog modal-dialog-centered modal modal-lg modal-child" id="LoginModal">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between">
                    <h5>Thêm mới báo cáo hoạt động can thiệp</h5>
                    <button class="btn btn-secondary" @click="onClickCloseModal()">
                        &times;
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <div class="input-area">
                        <p class="title bolder">Tên hoạt động:</p>
                        <div>
                            <textarea class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="input-area">
                        <p class="title bolder">Thang điểm (0-10)</p>
                        <div>
                            <textarea class="form-control"></textarea>
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
  