<template>
    <div class="sideBar" style="width: 100%; ">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link disabled" disabled>Quản lý tài khoản</a>
                <a class="nav-link gen2" href="/admin/list-parent">Phụ huynh</a>
                <a class="nav-link gen2" href="/admin/list-teacher">Giáo viên</a>
                <a class="nav-link gen2" href="/admin/list-supervisor">Quản lý chuyên môn</a>
                <a class="nav-link gen2" href="/admin/list-office-staff">nhân viên văn phòng</a>
                <a class="nav-link gen2" href="/admin/create-account">Tạo tài khoản mới</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" disabled>Quản lý học sinh</a>
                <a class="nav-link gen2" href="/admin/list-student">Danh sách học sinh</a>
                <a class="nav-link gen2" href="/admin/create-student">Tạo tài khoản mới</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/admin/all-activities">Nhật ký hoạt động</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "SideBar",
    components: {
    }, 
    
    methods: {
        
    },
    data() {
        return { 
        }
    }
}

</script>
<style scoped>
.sideBar{
    background-color: #E2E2E9;
}
.gen2 {
    padding-left: 2rem !important;
}


</style>