<template>
    <div class="calendar col-12">
        <div id="header_button_group" class="d-flex">
            <button type="button" class="btn btn-light" @click="setup()">Hôm nay</button>
            <button type="button" class="btn btn-secondary" @click="prevWeek()">Trước</button>
            <!-- get data from link -->
            <h3><span></span><strong>{{ this.listDate[0].Date }}/{{ this.listDate[0].Month }}/{{ this.listDate[0].Year }} – {{ this.listDate[6].Date
            }}/{{ this.listDate[6].Month }}/{{ this.listDate[6].Year }}</strong></h3>
            <button type="button" class="btn btn-secondary" @click="nextWeek()">Sau</button>
        </div>
        <div class="table-wrapper-scroll-y my-custom-scrollbar col-12">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th class="text-center" v-for="th in listDate" :key="th">{{th.Day}},{{th.Date}}/{{th.Month}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="td in listTime" :key="td">
                        <td>{{ td.time }}</td>
                        <td :class="{ attend: td.isSelected1 == 'attendance', absent: td.isSelected1 == 'absent' }">{{
                                td.message1
                        }}</td>
                        <td :class="{ attend: td.isSelected2 == 'attendance', absent: td.isSelected2 == 'absent' }">{{
                                td.message2
                        }}</td>
                        <td :class="{ attend: td.isSelected3 == 'attendance', absent: td.isSelected3 == 'absent' }">{{
                                td.message3
                        }}</td>
                        <td :class="{ attend: td.isSelected4 == 'attendance', absent: td.isSelected4 == 'absent' }">{{
                                td.message4
                        }}</td>
                        <td :class="{ attend: td.isSelected5 == 'attendance', absent: td.isSelected5 == 'absent' }">{{
                                td.message5
                        }}</td>
                        <td :class="{ attend: td.isSelected6 == 'attendance', absent: td.isSelected6 == 'absent' }">{{
                                td.message6
                        }}</td>
                        <td :class="{ attend: td.isSelected7 == 'attendance', absent: td.isSelected7 == 'absent' }">{{
                                td.message7
                        }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Teleport to="body">
            <LoaingPage v-show="this.$store.state.isLoading"></LoaingPage>
        </Teleport>
    </div>
</template>
<script>
import LoaingPage from "@/components/LoadingPage.vue";
import { DayOfWeek } from "@/constant/DayOfWeek";
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, StudentAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";

export default {
    name: "Schedule",
    props: {
        listTime: Array
    },
    created() {
        this.setup();
        this.GetAllDayOfWeek();
        this.getSlotList(1, 2, 1)

    },
    methods: {
        CalculationDate(stt) {
            var dateOfMonth = 0;
            if (this.month == 1 || this.month == 3 || this.month == 5 || this.month == 7 || this.month == 8 || this.month == 10 || this.month == 12) {
                dateOfMonth = 31;
            } else if (this.month == 4 || this.month == 6 || this.month == 9 || this.month == 11) {
                dateOfMonth = 30;
            } else if (this.month == 2 && (this.year % 400 == 0 || (this.year % 4 == 0 && this.year % 100 != 0))) {
                dateOfMonth = 29;
            } else dateOfMonth = 28;
            //alert(dateOfMonth);
            var date = (parseInt(this.day) + stt + dateOfMonth) % dateOfMonth;
            return (date != 0) ? date : dateOfMonth;
        },
        CalculationMonth(stt) {
            var dateOfMonth = 0;
            if (this.month == 1 || this.month == 3 || this.month == 5 || this.month == 7 || this.month == 8 || this.month == 10 || this.month == 12) {
                dateOfMonth = 31;
            } else if (this.month == 4 || this.month == 6 || this.month == 9 || this.month == 11) {
                dateOfMonth = 30;
            } else if (this.month == 2 && (this.year % 400 == 0 || (this.year % 4 == 0 && this.year % 100 != 0))) {
                dateOfMonth = 29;
            } else dateOfMonth = 28;
            if (stt > 0) {
                return ((parseInt(this.day) + stt) <= dateOfMonth) ? this.month : (((parseInt(this.month) + 1) > 12) ? 1 : (parseInt(this.month) + 1));
            } else {
                return ((parseInt(this.day) + stt) > 0) ? this.month : (((parseInt(this.month) - 1) < 1) ? 12 : (parseInt(this.month) - 1));
            }
        },
        CalculateYear(preMonth, postMonth) {
            if (preMonth == 12 && postMonth == 1) {
                return parseInt(this.year) + 1;
            }
            return this.year;
        },
        Booking(row, col, value, message) {
            console.log(row + " / " + col + " / " + value + " / " + message);
            switch (col) {
                case 1:
                    this.$data.listTime[row].isSelected1 = value;
                    this.$data.listTime[row].message1 = message;
                    break;
                case 2:
                    this.$data.listTime[row].isSelected2 = value;
                    this.$data.listTime[row].message2 = message;
                    break;
                case 3:
                    this.$data.listTime[row].isSelected3 = value;
                    this.$data.listTime[row].message3 = message;
                    break;
                case 4:
                    this.$data.listTime[row].isSelected4 = value;
                    this.$data.listTime[row].message4 = message;
                    break;
                case 5:
                    this.$data.listTime[row].isSelected5 = value;
                    this.$data.listTime[row].message5 = message;
                    break;
                case 6:
                    this.$data.listTime[row].isSelected6 = value;
                    this.$data.listTime[row].message6 = message;
                    break;
                case 7:
                    this.$data.listTime[row].isSelected7 = value;
                    this.$data.listTime[row].message7 = message;
                    break;
            }
        },
        updateLoading(newLoading) {
            this.$store.commit("setIsLoading", newLoading);
        },
        getSlotList(day, month, year) {
            let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
            let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
            this.updateLoading(true);
            FetchApiWithCustomHeader(
                StudentAPI.GetSlotList + `/${this.$route.params.id}`,
                Method.POST,
                {
                    Content_Type: ContentType.JSON,
                    Authorization: `${tokenType} ${token}`,
                },
                {
                    "day": 10,
                    "month": 10,
                    "year": 2022,
                    "studentId": 1
                },
                null,
                (response) => {
                    console.log(response);
                    let Date = response.startDate.split('-');
                    this.updateLoading(false);
                    console.log(response.slotStartDateResponses.length);
                    for (let i = 0; i < response.slotStartDateResponses.length; i++) {
                        console.log(i + "/" + response.slotStartDateResponses[i].slotDate)
                        for (let j = 0; j < this.listTime.length; j++) {
                            if (response.slotStartDateResponses[i].startTime.includes(this.listTime[j].time)) {
                                this.Booking(j, (response.slotStartDateResponses[i].slotDate - parseInt(Date[2]) + 1), response.slotStartDateResponses[i].attend, response.slotStartDateResponses[i].message);
                                if (parseInt(response.slotStartDateResponses[i].duration) > 0) {
                                    for (let e = 1; e < parseInt(response.slotStartDateResponses[i].duration); e++) {
                                        if (j + e < this.listTime.length) {
                                            this.Booking(j + e, (response.slotStartDateResponses[i].slotDate - parseInt(Date[2]) + 1), response.slotStartDateResponses[i].attend, response.slotStartDateResponses[i].message);
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            );
        },
        setup() {
            const current = new Date();
            this.day = current.getDate() - current.getDay() + 1;
            this.month = current.getMonth() + 1;
            this.year = current.getFullYear();
            // gọi lại api
        },
        prevWeek() {
            let currentmonth = this.month;
            this.month = this.CalculationMonth(-7);
            this.day = this.CalculationDate(-7);
            this.year = this.CalculateYear(currentmonth, this.month);
            // gọi lại api

        },
        nextWeek() {
            let currentmonth = this.month;
            this.month = this.CalculationMonth(7);
            this.day = this.CalculationDate(7);
            this.year = this.CalculateYear(currentmonth, this.month);
            // gọi lại api
        },
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
        }
    },
    data() {
        return {
            listDay: DayOfWeek.DAY_OF_WEEK,
            listTime: DayOfWeek.LIST_SLOT_EMPTY,
            day: Number,
            month: Number,
            year: Number,
            listDate: [{id:0, Day: "Thứ Hai", Date: 22, Month: 11, Year: 2022 },
            {id:1, Day: "Thứ Ba", Date: 23, Month: 11, Year: 2022 },
            {id:2, Day: "Thứ Tư", Date: 24, Month: 11, Year: 2022 },
            {id:3, Day: "Thứ Năm", Date: 25, Month: 11, Year: 2022 },
            {id:4, Day: "Thứ Sáu", Date: 26, Month: 11, Year: 2022 },
            {id:5, Day: "Thứ Bảy", Date: 27, Month: 11, Year: 2022 },
            {id:6, Day: "Chủ Nhật", Date: 28, Month: 11, Year: 2022 },
            ]
        }
    },
    computed: {},
};
</script>

<style scoped>
#header_button_group {
    margin-top: 20px;
    margin-bottom: 10px;
}

#header_button_group button {
    margin-left: 10px;
    margin-right: 10px;
}

.table {
    background-color: white !important;
}

.my-custom-scrollbar {
    position: relative;
    height: 500px;
    overflow: auto;
}

.table-wrapper-scroll-y {
    display: block;
}

td.attend {
    background-color: aquamarine !important;
    color: black;
    text-align: center;
}

td.absent {
    background-color: lightcoral !important;
    color: black;
    text-align: center;
}
</style>
