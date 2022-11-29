<template>
    <div class="sideBar" style="width: 100%; ">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link disabled" href="" >Nhân viên: {{TeacherName}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="/Staff/Student-list" >Danh sách học sinh </a>
                <a class="nav-link " href="" >Danh sách giáo viên chuyên môn </a>
                <a class="nav-link " href="/Staff/take-attendance" >Điểm danh </a>
                <a class="nav-link " href="" >Lịch hẹn </a>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.sideBar{
    background-color: #E2E2E9;
}
.selected{
    color: red!important;
}
.nav-link{
    color: gray;
}
.gen2 {
    padding-left: 2rem !important;
}
</style>
<script>

export default {
    name: "StaffSideBar",
    components: {
    }, 
    props: {
        
    },
    methods: {
        
    },
    data() {
        return {
            TeacherName: "Lê Sơn Hải",
        }
    }
}
</script>