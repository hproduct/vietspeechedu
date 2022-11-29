<template>
    <div>
        <MenuList :listNav="listNav"></MenuList>
        <RouterView></RouterView>

    </div>
</template>
<script>
import MenuList from '../List/MenuList.vue';

export default {
    name: "StaffStudentDetail",
    components: {
        MenuList
    },
    props: {

    },
    methods: {

    },
    data() {
        return {
            TeacherName: "Lê Sơn Hải",
            listNav: [{ id: 1, message: 'Học phí', path: '/Staff/Student-detail/Fee', isSelected: false },
            { id: 2, message: 'Lịch học', path: '', isSelected: false },]


        }
    }
}
</script>
<style scoped>

</style>