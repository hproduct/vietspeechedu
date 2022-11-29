<template>
    <div style="padding: 1rem;">
        <div class="col-12">
            <div class="ItemList d-flex justify-content-between" v-for="rep in this.listDate">
                <p class="bolder">{{ rep.Day }}, ngày {{ rep.Date }} tháng {{ rep.Month }} năm {{ rep.Year }}</p>
                <button type="btn" class="btn btn-light col-3" @click="onClickButtonTakeAttendace()">Điểm danh</button>
            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router/Router';


export default {
    name: "StaffTakeAttendance",
    components: {

    },
    props: {

    },
    methods: {
        GetAllDayOfWeek() {
            const current = new Date();
            // Starting Monday not Sunday
            current.setDate((current.getDate() - current.getDay() + 1));
            for (var i = 0; i < 7; i++) {
                this.listDate[i].Date = current.getDate();
                this.listDate[i].Month = current.getMonth() + 1;
                this.listDate[i].Year = current.getFullYear();
                current.setDate(current.getDate() + 1);
            }
        },
        onClickButtonTakeAttendace(){
            router.push({path:'/Staff/attendance-detail'});
        }
    },
    created() {
        this.GetAllDayOfWeek();
    },
    data() {
        return {
            StudentName: "Lê Sơn Hải",
            listDate: [{ Day: "Thứ Hai", Date: 22, Month: 11, Year: 2022 },
            { Day: "Thứ Ba", Date: 23, Month: 11, Year: 2022 },
            { Day: "Thứ Tư", Date: 24, Month: 11, Year: 2022 },
            { Day: "Thứ Năm", Date: 25, Month: 11, Year: 2022 },
            { Day: "Thứ Sáu", Date: 26, Month: 11, Year: 2022 },
            { Day: "Thứ Bảy", Date: 27, Month: 11, Year: 2022 },
            { Day: "Chủ Nhật", Date: 28, Month: 11, Year: 2022 },
            ]

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

.ItemList p {
    margin-top: auto !important;
    margin-bottom: auto !important;
    margin-left: 20px;
}

.ItemList button {
    background-color: #e2e2e9;
    color: black;
    border: 1px solid #ccc;
    width: 20%;
}
</style>