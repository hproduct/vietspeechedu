<template>
    <div class="d-inline-flex col-12">
        <h5 class="float-left col-7" style="padding-top: 1rem;">{{ splitPath }}</h5>
        <div class="d-flex justify-content-end float-right col-5" style=";padding:0.5rem; margin-bottom: 10px;">
            <input type="text" class=" form-control" placeholder="Search">
            <div class="input-group-append">
                <button class="btn btn-success" type="submit">Search</button>
            </div>
        </div>
    </div>
    <table id="my-table" class="table table-hover table-bordered" style="margin-top: 10px;">
        <thead class="thead-light">
            <tr>
                <th v-for="th in columns" :key="th">
                    <span>{{ th.text }}</span>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="td in entries" :key="td">
                <td>{{ td.id }}</td>
                <td>{{ td.name }}</td>
                <td>{{ td.position }}</td>
                <td>{{ td.office }}</td>
                <td>{{ td.extension }}</td>

                <td>{{ td.salary }}</td>
                <td class="d-flex justify-content-center">
                    <button type="button" class="btn btn-secondary" @click="genDetailLink(td.id)">Xem chi tiết</button>
                </td>
            </tr>
        </tbody>
    </table>

    <div class="d-flex justify-content-between" style="padding: 1rem;">
        <ul class="float-right pagination justify-content-end">
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
            <li class="page-item" v-for="page in pagingList" :key="page" :class="{ active: page == this.currentpage }">
                <a class="page-link" href="javascript:void(0);">{{ page }}</a>
            </li>
            <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
        </ul>
    </div>

</template>

<script>
import router from "@/router/Router.js";
export default {
    name: 'DataTable',
    props: {
    },
    methods: {
        genDetailLink(id) {
            router.push({ path: this.$route.fullPath + "/detail/"});
        },
    },
    computed: {
        splitPath() {
            if (this.$route.fullPath.includes("list-student"))
                return "Danh sách học sinh:";
            else if (this.$route.fullPath.includes("list-parent"))
                return "Danh sách phụ huynh";
            else if (this.$route.fullPath.includes("list-teacher"))
                return "Danh sách giáo viên";
            else if (this.$route.fullPath.includes("list-supervisor"))
                return "Danh sách quản lý chuyên môn";
        },
        tableHeader() {
            return this.columns || [];
        },
        tableData() {
            return this.entries || [];
        },
        pagingList() {
            if (this.totalpage - this.currentpage >= 2) {
                return [this.currentpage, this.currentpage + 1, this.currentpage + 2];
            } else {
                return [this.totalpage - 2, this.totalpage - 1, this.totalpage];
            }
        },
    },
    data() {
        return {
            columns: [
                { name: 'id', text: 'ID' },
                { name: 'name', text: 'Name' },
                { name: 'position', text: 'Position' },
                { name: 'office', text: 'Office' },
                { name: 'extension', text: 'Extension' },
                { name: 'salary', text: 'Salary' },
            ],
            entries: [
                { id: 'id1', name: 'name1', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id2', name: 'name3', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id3', name: 'name4', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id4', name: 'name5', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id5', name: 'name6', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id6', name: 'name7', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id7', name: 'name8', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id8', name: 'name9', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
                { id: 'id9', name: 'name9', position: 'position1', office: 'office1', extension: 'extension1', salary: 'salary1' },
            ],
            totalpage: 10,
            currentpage: 1,
            totalRow: 57
        }
    },
    
}

</script>

<style scoped>
td {
    align-content: center;
    align-items: center;
}
</style>