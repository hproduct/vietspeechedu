<template>
    <div>
        <MenuListVue :listNav="listNav"></MenuListVue>
        <RouterView></RouterView>
    </div>
</template>
<script>
import MenuListVue from '@/components/List/MenuList.vue';


export default {
    name: "SupervisorDashboard",
    components: {
        MenuListVue,

    },
    props: {

    },
    methods: {
        onClickToPage(pageIndex) {
            this.getListAssessment(pageIndex);
        },
    },
    data() {
        return {
            TeacherName: "Lê Sơn Hải",
            listNav: [{ id: 1, message: 'Báo cáo ngày', path: '', isSelected: false },
            { id: 2, message: 'Báo cáo quá trình can thiệp', path: '/supervisor/student-detail/intervention-plan-report', isSelected: false },
            { id: 3, message: 'Kế hoạch can thiệp', path: '', isSelected: false },
            { id: 4, message: 'Đánh giá trẻ', path: '/supervisor/student-detail/assessment', isSelected: false },
            { id: 5, message: 'Thông tin cá nhân', path: '/supervisor/student-detail/info', isSelected: false },]

        }
    }
}
</script>
<style>

</style>