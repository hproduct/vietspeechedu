<template>
    <div>
        <div class="container " style="margin-top: 1rem;">
            <div class="col-12 d-inline-flex">
                <p class="col-3  text-center"> Tìm kiếm học sinh :</p>
                <div class="col-7">
                    <input type="text " class="form-control" v-model="this.searchContent" placeholder="Nhập tên hoặc nickname của học sinh ở đây" />
                </div>
                <div class="col-2 d-flex justify-content-between">
                    <button type="button" class="btn btn-info" @click="searchStudent()"> Tìm kiếm</button>
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
        <Paging :totalPage="this.totalPage" v-if = "false" v-on:onClickToPage="onMoveToPage"></Paging>
    </div>
</template>
<script>

import Paging from '../Paging.vue';
import router from "@/router/Router";
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, StudentAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";

export default {
    name: "ListStudent",
    components: {
        Paging
    },
    props: {

    },
    methods: {
        onClickToStudentId(id) {
            router.push( { path : `/teacher/student-teacher/daily-report/${id}`} )
        },

        updateLoadingState(newLoadingState) {
            this.$store.commit('setIsLoading', newLoadingState)
        },

        updateListStudent(data) {
            this.listStudent = [...data]
        },

        onMoveToPage(pageIndex) {
            this.currentPage = pageIndex
            router.push( { path: '/teacher/student-list' , query : { page : this.currentPage, search : this.searchContent} } )
        },

        updateTotalPage(newTotalPage) {
            if (newTotalPage == 1) {
                this.isShowPaging = false
            }
            else {
                this.isShowPaging = true
                this.totalPage = newTotalPage;
            }
        },

        searchStudent() {
            router.push( { path: '/teacher/student-list' , query : { page : this.currentPage, search : this.searchContent} } )
            this.getListStudent(this.currentPage, this.searchContent)
        },

        initCurrentPage() {
            if (this.$route.query.page !== "0" && this.$route.query.page > 0 && this.$route.query.page <= this.totalPage) {
                this.currentPage = this.$route.query.page
            } else {
                this.currentPage = 1
            }
        },

        getListStudent() {
            let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
            let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
            this.updateLoadingState(true);
            FetchApiWithCustomHeader(
                StudentAPI.GetStudentList + `/${this.currentPage - 1}/8?search=${this.searchContent}`,
                Method.GET,
                {
                    Content_Type: ContentType.JSON,
                    Authorization: `${tokenType} ${token}`,
                },
                null,
                null,
                (response) => {
                    if (response.result === "OK") {
                        this.updateListStudent(response.data.resultList);
                        this.updateTotalPage(response.data.totalPage)
                    } else {
                        this.updateListStudent([]);
                    }
                    this.updateLoadingState(false);
                }
            );
        },
    },
    created() {
        this.getListStudent()
        this.initCurrentPage()
    },
    data() {
        return {
            listStudent: [],
            totalPage: 0,
            isShowPaging: false,
            searchContent: this.$route.query.search || "",
            currentPage: this.$route.query.page || 1,
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