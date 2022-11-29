<template>
    <div class="col-12 assessment-form" style="padding: 1rem;">
        <div class="col-12 margin-top-1rem d-flex justify-content-between">
            <button type="button" class="btn btn-light col-3" @click="backButtonClick()"> Quay lại</button>
            <p class="bolder">Kế hoạch đánh giá ngày {{currentDate()}}</p>
        </div>
        <div class="d-flex d-inline-flex col-12 margin-top-1rem">
            <p class="col-4">Loại đánh giá: </p>
            <div class="col-8">
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input " value="type1" name="AssessmentTypeName"
                            v-model="AssessmentType">trẻ chưa nói được
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" value="type2" name="AssessmentTypeName"
                            v-model="AssessmentType">Trẻ đã nói được
                    </label>
                </div>
            </div>
        </div>
        <h5 class="text-center margin-top-1rem">PHIẾU KIỂM TRA ĐÁNH GIÁ TẠI CHỖ</h5>
        <div class="col-12 margin-top-1rem">
            <div class="col-12 d-inline-flex">
                <p class="col-3">Người đánh giá :</p>
                <p class="col-9">{{ AssessmentReport.TeacherName }}</p>
            </div>
        </div>
        <div class="col-12 ">
            <div class="col-12 d-inline-flex">
                <p class="col-3">Họ và tên trẻ :</p>
                <div class="col-9">
                    <input type="text" class="form-control" v-model="AssessmentReport.ChildrenName" />
                </div>
            </div>
        </div>
        <div class="d-flex d-inline-flex col-12 ">
            <p class="col-4">Giới tính: </p>
            <div class="col-3 d-flex justify-content-between">
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" value="nam" name="SexName"
                            v-model="AssessmentReport.Sex">Nam
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" value="nữ" name="SexName"
                            v-model="AssessmentReport.Sex">Nữ
                    </label>
                </div>
            </div>
        </div>
        <div class="col-12 ">
            <div class="col-12 d-inline-flex">
                <p class="col-3">Ngày tháng năm sinh :</p>
                <div class="col-4">
                    <input type="date" class="form-control" v-model="AssessmentReport.DOB" />
                </div>
            </div>
        </div>
        <div v-for="part in AssessmentReport.ContentPart1" :key="part" class="input-area margin-top-1rem"
            v-show="AssessmentType == 'type1'">
            <p class=" bolder">{{ part.title }}</p>
            <table class="table">
                <tr class="col-12" v-for=" row in part.content" :key="row">
                    <td class="col-3">
                        {{ row.subtitle }}
                    </td>
                    <td class="col-9">
                        <input type="text" class="form-control" v-model="row.subcontent" />
                    </td>
                </tr>
            </table>
        </div>
        <div v-for="part in AssessmentReport.ContentPart2" :key="part" class="input-area margin-top-1rem"
            v-show="AssessmentType == 'type2'">
            <p class=" bolder">{{ part.title }}</p>
            <table class="table">
                <tr class="col-12" v-for=" row in part.content" :key="row">
                    <td class="col-3">
                        {{ row.subtitle }}
                    </td>
                    <td class="col-9">
                        <input type="text" class="form-control" v-model="row.subcontent" />
                    </td>
                </tr>
            </table>
        </div>
        <div class="col-12 margin-top-1rem" v-show="AssessmentType != null">
            <p class="col-12 bolder"> 4. Các quan sát Khác</p>
            <textarea class="col-12 form-control" v-model="AssessmentReport.other"></textarea>
        </div>
        <div class="col-12 margin-top-1rem" v-show="AssessmentType != null">
            <p class="col-12 bolder"> KẾT LUẬN BAN ĐẦU</p>
            <textarea class="col-12 form-control" v-model="AssessmentReport.conclusion"></textarea>
        </div>
        <div class="col-12 margin-top-1rem d-flex flex-row-reverse ">
            <button type="button" class="btn btn-primary text-center col-2" @click="SaveButtonClick()">Lưu</button>
        </div>

    </div>

</template>
<script>
import router from '@/router/Router';

export default {
    name: "CreateAssessment",
    components: {},
    props: {
        AssessmentType: String,
        Sex: String,

    }, methods: {
        currentDate() {
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
            return date;
        },
        SaveButtonClick(){
            console.log(this.AssessmentReport);
        },
        backButtonClick(){
            router.push({path: '/supervisor/student-detail/assessment'});
        }

    },
    data() {
        return {
            AssessmentReport: {
                date: "2022-10-10",
                ChildrenName: "Lê Sơn Hải",
                TeacherName: "Dương Thành Long",
                DOB: "05/11/2000",
                Sex: "Nam",
                ContentPart1: [
                    {
                        title: "1. Giao tiếp",
                        content: [
                            { subtitle: " Focus 34", subcontent: "content1" },
                            { subtitle: " Hồ sơ ngữ dụng", subcontent: "content3" },
                            { subtitle: " Khác", subcontent: "content4" },
                        ]
                    },
                    {
                        title: "2. Ngôn ngữ",
                        content: [
                            { subtitle: " Vốn từ hiểu ", subcontent: "content1" },
                            { subtitle: " Vốn từ nói (Vocal Exp)", subcontent: "content2" },
                            { subtitle: " Lặp lại âm không có nghĩa (NWR)", subcontent: "content3" },
                            { subtitle: " Lặp lại câu (SenRep) ", subcontent: "content1" },
                            { subtitle: " Kể truyện theo tranh/ lời kể (MAIN)", subcontent: "content2" },
                            { subtitle: " Nhận thức âm vị (PhAM_VI)", subcontent: "content3" },
                            { subtitle: " Gọi tên nhanh (RAN) ", subcontent: "content1" },
                            { subtitle: " Lặp lại từ có nghĩa và không có nghĩa (WNWR)", subcontent: "content2" },
                            { subtitle: " Khác", subcontent: "content3" },
                        ]
                    },
                    {
                        title: "3. Lời nói",
                        content: [
                            { subtitle: " OMA", subcontent: "content1" },
                            { subtitle: " Âm lời nói (VSA)", subcontent: "content2" },
                            { subtitle: " Tính dễ hiểu (ICS)", subcontent: "content3" },
                            { subtitle: " Giọng", subcontent: "content1" },
                            { subtitle: " Âm lượng", subcontent: "content2" },
                            { subtitle: " Độ trôi chảy", subcontent: "content3" },
                            { subtitle: " Khác", subcontent: "content3" },
                        ]
                    }
                ],
                ContentPart2: [
                    {
                        title: "1. Giao tiếp",
                        content: [
                            { subtitle: " Focus34", subcontent: "content1" },
                            { subtitle: " CSBS", subcontent: "content2" },
                            { subtitle: " Hồ sơ ngữ dụng", subcontent: "content3" },
                            { subtitle: " Khác", subcontent: "content3" },
                        ]
                    },
                    {
                        title: "2. Ngôn ngữ",
                        content: [
                            { subtitle: " Kỹ năng hiểu sớm", subcontent: "content1" },
                            { subtitle: " CDI", subcontent: "content2" },
                            { subtitle: " REEL", subcontent: "content3" },
                            { subtitle: " Rossetti", subcontent: "content1" },
                            { subtitle: " Vốn từ hiểu (VocalRec)", subcontent: "content2" },
                            { subtitle: " Khác", subcontent: "content3" },
                        ]
                    },
                    {
                        title: "3. Khác",
                        content: [
                            { subtitle: " OMA", subcontent: "content1" },
                            { subtitle: " Kỹ năng chơi", subcontent: "content2" },
                            { subtitle: " Tập trung chú ý", subcontent: "content3" },
                            { subtitle: " Bắt chước", subcontent: "content1" },
                            { subtitle: " Luân phiên", subcontent: "content2" },
                            { subtitle: " Khác", subcontent: "content3" },
                        ]
                    }
                ],
                other: "",
                conclusion: "",
            },
        }
    }
};
</script>
<style scoped>
input.form-control {
    background-color: white !important;
}

.assessment-form {
    height: 600px;
    overflow: scroll;
}

.margin-top-1rem {
    margin-top: 1rem;
}
</style>