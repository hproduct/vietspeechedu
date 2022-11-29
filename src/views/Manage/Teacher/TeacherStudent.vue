<template>
    <div>
        <MenuListVue :listNav="this.listNav"></MenuListVue>
        <RouterView></RouterView>
    </div>
</template>
<script>
import MenuListVue from '@/components/List/MenuList.vue';

export default {
    name: "Teacher_StudentDetail",
    components: {
        MenuListVue,
    }, 
    props: {
    },
    methods: {
        getAllRouter() {
            return [
                { id: 1, message: 'Báo cáo ngày', path: `/teacher/student-teacher/daily-report/${this.$route.params.id}`, isSelected: false },
                { id: 2, message: 'Báo cáo quá trình can thiệp', path: `/teacher/student-teacher/invention-report/${this.$route.params.id}`, isSelected: false },
                { id: 3, message: 'Kế hoạch can thiệp', path: `/teacher/student-teacher/invention-plan/${this.$route.params.id}`, isSelected: false },
                { id: 4, message: 'Các nhu cầu của trẻ', path: `/teacher/student-teacher/request/${this.$route.params.id}`, isSelected: false },
                { id: 5, message: 'Lịch học', path: `/teacher/student-teacher/student-scheduler/${this.$route.params.id}`, isSelected: false },
                { id: 6, message: 'Đánh giá trẻ', path: `/teacher/student-teacher/assessment/${this.$route.params.id}`, isSelected: false },                    
                { id: 7, message: 'Thông tin cá nhân', path: `/teacher/student-teacher/student-info/${this.$route.params.id}`, isSelected: false },
            ]
        }
    },
    data() {
        return {
            listNav: this.getAllRouter(),
        }
    }
}
</script>
<style scoped>

</style>