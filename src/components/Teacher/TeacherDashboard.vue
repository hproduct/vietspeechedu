<template>
    <div>
        <RouterView/>
        <!-- <MenuListVue :listNav="listNav"></MenuListVue>
        <Schedule v-show="listNav[0].isSelected"></Schedule>
        <ListStudent v-show="listNav[1].isSelected"></ListStudent> -->
    </div>
</template>
<script>
import MenuListVue from '../List/MenuList.vue';
import { ListScreen } from '@/constant/ListScreen';
import Schedule from '../Schedule.vue';
import ListStudent from '@/components/Teacher/ListStudent.vue'
export default {
    name: "TeacherDashboard",
    components: {
        MenuListVue,
        Schedule,
        ListStudent
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
<style>

</style>