<template>
    <div class="modal-bg" @click.self="onClickCloseModal()">
        <div class="modal-dialog modal-dialog-centered modal modal-lg modal-child modal-dialog-scrollable" id="LoginModal">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between">
                    <h5>Kết quả đánh giá ngày {{ date }}</h5>
                    <button class="btn btn-secondary" @click="onClickCloseModal()">
                        &times;
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <h4 class="text-center"> PHIẾU KIỂM TRA ĐÁNH GIÁ TẠI CHỖ</h4>
                    <div class="col-12 d-inline-flex">
                        <p class="col-2 text-center bolder">Họ và tên: </p>
                        <p class="col-3 text-center">{{ AssessmentReport.ChildrenName }}</p>
                        <p class="col-3 text-center bolder">Người đánh giá: </p>
                        <p class="col-3 text-center">{{ AssessmentReport.TeacherName }}</p>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3 text-center bolder">Ngày tháng năm sinh: </p>
                        <p class="col-3 text-center">{{ AssessmentReport.DOB }}</p>
                        <p class="col-3 text-center bolder">Giới tính: </p>
                        <p class="col-3 text-center">{{ AssessmentReport.Sex }}</p>
                    </div>

                    <div v-for="part in AssessmentReport.ContentPart" :key="part" class="input-area">
                        <p class=" bolder">{{ part.title }}</p>
                        <div>
                            <div class="col-12 d-inline-flex" v-for=" row in part.content" :key="row">
                                <div class="col-3 border">
                                    <p>{{ row.subtitle }}</p>
                                </div>
                                <div class="col-9 border">
                                    <p>{{ row.subcontent }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input-area">
                        <p class=" bolder">4. Các quan sát khác:</p>
                        <div class="border" style="height: 100px;">
                        </div>
                    </div>
                    <div class="input-area">
                        <h5 class=" bolder">KẾT LUẬN BAN ĐẦU</h5>
                        <div class="border" style="height: 100px;">
                        </div>
                    </div>

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
            AssessmentReport: {
                date: "10/10/2022",
                ChildrenName: "Lê Sơn Hải",
                TeacherName: "Dương Thành Long",
                DOB: "05/11/2000",
                Sex: "Nam",
                ContentPart: [
                    {
                        title: "1. Giao tiếp",
                        content: [
                            {
                                subtitle: " title1",
                                subcontent: "content1"
                            },
                            {
                                subtitle: "title2",
                                subcontent: "content2"
                            },
                            {
                                subtitle: "title3",
                                subcontent: "content3"
                            },
                        ]
                    },
                    {
                        title: "2. Ngôn ngữ",
                        content: [
                            {
                                subtitle: " title1",
                                subcontent: "content1"
                            },
                            {
                                subtitle: "title2",
                                subcontent: "content2"
                            },
                            {
                                subtitle: "title3",
                                subcontent: "content3"
                            },
                        ]
                    },
                    {
                        title: "3. Khác",
                        content: [
                            {
                                subtitle: " title1",
                                subcontent: "content1"
                            },
                            {
                                subtitle: "title2",
                                subcontent: "content2"
                            },
                            {
                                subtitle: "title3",
                                subcontent: "content3"
                            },
                        ]
                    }
                ]
            },
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

div.border {
    border: 1px solid #ccc;
    padding: 5px 10px;
}

div.border p {
    margin: auto;
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
  