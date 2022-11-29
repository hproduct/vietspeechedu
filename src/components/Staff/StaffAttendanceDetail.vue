<template>
    <div class="col-12" style="padding: 1rem;">
        <h5 class="text-center bolder"> Thứ Hai, ngày 22 tháng 11 năm 2022</h5>
        <div class="col-12 mainForm" style="padding: 1rem;">
            <div v-for="stu in listStudent" :key="stu" class="d-inline-flex ItemList">
                <img :src="stu.avatar || require('@/assets/avatar-demo.jpg')" class="rounded-circle avatar" alt="" />
                <div class="col-3 d-flex flex-column">
                    <p class="text-center bolder">{{ stu.name }}</p>
                    <p class="text-center">{{ stu.nickname }}</p>
                </div>
                <div class="col-4 d-flex flex-column">
                    <p class="">Giáo viên: {{ stu.Teacher }}</p>
                    <p class="">Lịch học {{ stu.slot }}</p>
                </div>
                <div class="col-3">
                    <select class=" form-control custom-select">
                        <option selected value="Chưa điểm danh">Chưa điểm danh</option>
                        <option value="Đăng ký nhận khóa học">Có mặt</option>
                        <option value="Đăng ký học tại trung tâm">Vắng mặt</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-light col-3 border-ccc" @click="onclickExit()">Thoát</button>
        </div>

    </div>

</template>
<script>
import router from '@/router/Router';


export default {
    name: "StaffAttendanceDetail",
    components: {

    },
    props: {

    },
    methods: {
        onclickExit(){
            router.push({path: '/Staff/take-attendance'});
        }

    },
    created() {

    },
    data() {
        return {
            listStudent: [{ avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Chưa điểm danh' },
            { avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Có mặt' },
            { avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Vắng mặt' },
            { avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Chưa điểm danh' },
            { avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Chưa điểm danh' },
            { avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Chưa điểm danh' },
            { avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Chưa điểm danh' },
            { avatar: '', name: 'Lê Sơn Hải', nickname: 'chuột', Teacher: 'Dương Thành Long', slot: '9h-10h', status: 'Chưa điểm danh' },
            ]


        }
    }
}
</script>
<style scoped>
img.avatar {
    width: 10%;
    margin: .5rem;
}

.custom-select {
    display: inline-block;
    width: 100%;
    height: calc(2.25rem+2px);
    padding: .375rem 1.75rem .375rem .75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 15px !important;
    appearance: none;
    margin-top: 1.5rem;
}

.ItemList {
    border: #ccc solid 1px;
    background-color: whitesmoke;
    margin: .5rem;
    border-radius: 15px;
}

.ItemList p {
    margin: .5rem !important;

}

.mainForm {
    max-height: 550px;
    overflow-y: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.border-ccc{
    border: #ccc 1px solid;
}
</style>