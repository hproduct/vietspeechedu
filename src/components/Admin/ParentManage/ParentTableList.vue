<template>
    <!-- search bar -->
    <div class="d-inline-flex col-12">
        <h5 class="float-left col-7" style="padding-top: 1rem;">Danh Sách phụ huynh</h5>
        <div class="d-flex justify-content-end float-right col-5" style=";padding:0.5rem; margin-bottom: 10px;">
            <input type="text" class=" form-control" placeholder="Search">
            <div class="input-group-append">
                <button class="btn btn-success" type="submit">Search</button>
            </div>
        </div>
    </div>
    <!-- table -->
    <table id="my-table" class="table table-hover table-bordered" style="margin-top: 10px;">
        <thead class="thead-light">
            <tr>
                <th v-for="th in columns" :key="th">
                    <span>{{ th.text }}</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="td in entries" :key="td">
                <td>{{ td.accountId }}</td>
                <td>
                    <div class="d-flex">
                        <img class="small_img" :src="td.avatar">
                        <div class="ms-1 my-auto">
                            {{ td.fullName }}
                        </div>
                    </div>
                </td>
                <td>{{ td.dateCreate }}</td>
                <td>Phụ Huynh</td>
                <td>{{ td.status }}</td>
                <td class="text-center align-middle">
                    <button type="button" class="btn btn-secondary" @click="genDetailLink(td.id)">Xem chi tiết</button>
                </td>
            </tr>
        </tbody>
    </table>
    <!-- pagging -->
    <PagingVue :totalPage = "this.totalpage" :currentPage = "this.currentPage" v-on:onClickToPage = "onMoveToPage"/>
</template>

<script>
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { Method, AccountAPI, ContentType } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import PagingVue from '@/components/Paging.vue';
import router from "@/router/Router";

export default {
    name: "ParentTableList",
    components: {
        PagingVue
    },
    methods: {
        updateIsLoading(newLoading) {
            this.$store.commit('setIsLoading', newLoading)
        },

        onMoveToPage(pageIndex) {
            this.currentPage = pageIndex
            router.push({ path: `list-parent`, query : { page: pageIndex } } )
        },

        updateParentList(data) {
            this.entries = [...data]
        },

        updateTotalPage(newTotalPage) {
            if (newTotalPage == 1) {
                this.isShowPaging = false
            }
            else {
                this.isShowPaging = true
                this.totalpage = newTotalPage;
            }
        },

        getListParrentAccount(pageIndex) {
            let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
            let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
            this.updateIsLoading(true);
            FetchApiWithCustomHeader(
                AccountAPI.GetListAccountByRoleName + `/PARENT/${pageIndex}/1`,
                Method.GET,
                {
                    Content_Type: ContentType.JSON,
                    Authorization: `${tokenType} ${token}`,
                },
                null,
                null,
                (response) => {
                    if (response.result === "OK") {
                        this.updateParentList(response.data.resultList)
                        this.updateTotalPage(response.data.totalPage)
                    } else {
                        // TODO
                    }
                    this.updateIsLoading(false);
                }
            );
        },

        initCurrentPage() {
            if (this.$route.query.page !== "0" && this.$route.query.page > 0  && this.$route.query.page <= this.totalpage) {
                this.currentPage = this.$route.query.page
            } else {
                this.currentPage = 1
            }
        }
    },
    created() {
        this.getListParrentAccount(0)
        this.initCurrentPage() 
    },
    data() {
        return {
            columns: [
                { name: 'id', text: 'ID' },
                { name: 'name', text: 'Tên' },
                { name: 'dateCreate', text: 'Ngày tạo' },
                { name: 'role', text: 'Chức vụ' },
                { name: 'status', text: 'Trạng thái' },
                { name: 'view', text: 'Action' },
            ],
            entries: [
                
            ],
            searchContent: this.$route.query.search || "",
            totalpage: 0,
            currentPage: this.$route.query.page || 1,
            isShowPaging: false
        }
    }
}
</script>
<style scoped>
td {
    vertical-align: middle !important;
}
.small_img{
    width: 72px;
    height: 72px;
    border-radius: 50px;
}
</style>