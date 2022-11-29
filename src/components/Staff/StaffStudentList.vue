<template>
    <div>
        <div class="container " style="margin-top: 1rem;">
            <div class="col-12 d-inline-flex">
                <p class="col-3  text-center"> Tìm kiếm học sinh :</p>
                <div class="col-7">
                    <input type="text " class="form-control" placeholder="Nhập tên hoặc nickname của học sinh ở đây" />
                </div>
                <div class="col-2 d-flex justify-content-between">
                    <button type="button" class="btn btn-info"> Tìm kiếm</button>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="card-wrap" v-for="stu in this.listStudent" :key="stu">
                <button type="submit" class="btn card-custom d-flex flex-column" @click="this.onClickToStudentId(stu.studentId)">
                    <img :src="stu.avatar || require('@/assets/avatar-demo.jpg')" class="rounded-circle" alt="">
                    <p class="text-center bolder">{{ stu.fullName }}</p>
                    <p class="text-center">{{ stu.nickName }}</p>
                </button>
            </div>

        </div>
        <Paging :totalPage="this.totalPage" v-if = "this.isShowPaging" v-on:onClickToPage="onClickToPage"></Paging>
    </div>
</template>
<script>

import Paging from '../Paging.vue';
import router from "@/router/Router";


export default {
    name: "StaffListStudent",
    components: {
        Paging
    },
    props: {

    },
    methods: {
        onClickToStudentId() {
            router.push( { path : '/Staff/student-detail'} )
        },
    },
    data() {
        return {
            listStudent: [{fullName:'Lê Sơn Hải', nickName:'chuột'},
            {fullName:'Lê Sơn Hải', nickName:'chuột'},
            {fullName:'Lê Sơn Hải', nickName:'chuột'},
            {fullName:'Lê Sơn Hải', nickName:'chuột'},
            {fullName:'Lê Sơn Hải', nickName:'chuột'},
            {fullName:'Lê Sơn Hải', nickName:'chuột'},
            {fullName:'Lê Sơn Hải', nickName:'chuột'},
            {fullName:'Lê Sơn Hải', nickName:'chuột'}

        ],
            totalPage: 0,
            isShowPaging: false
        }
    }
}
</script>
<style scoped>
.padding-top-5px {
    padding-top: 5px;
}

.card-wrap {

    display: inline-block;
    width: 25%;
    padding: 1.5rem;
}

.card-custom {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    background-color: #e6e6e6;
}

button.card-custom img {
    width: 80%;
    margin-left: 10%;
    margin-top: .5rem;
    margin-bottom: 1rem;

}

button.card-custom p {
    width: 100%;
    margin-bottom: 0px;
}

.bolder {
    font-weight: bold;
}
</style>