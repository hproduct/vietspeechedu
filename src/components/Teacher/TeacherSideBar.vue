<template>
    <div class="sideBar" style="width: 100%; ">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link " href="/teacher/teacher-scheduler" >Giáo viên: {{TeacherName}}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link " href="/teacher/student-list" >Danh sách học sinh</a>
                <a class="nav-link gen2 disabled selected" v-show="this.$route.fullPath.includes('student-detail')" >Học sinh: "Lê Sơn Hải"</a>
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
import { ListScreen } from '@/constant/ListScreen';
export default {
    name: "TeacherSideBar",
    components: {
    }, 
    props: {
        
    },
    methods: {
        
    },
    data() {
        return {
            TeacherName: "Lê Sơn Hải",
            listNav: ListScreen.TeacherDashboardList,
        }
    }
}
</script>