<template>
    <div>
        <MenuList :listNav="listNav"></MenuList>
        <RouterView></RouterView>
    </div>
</template>
<script>
import { ListScreen } from '@/constant/ListScreen';
import MenuList from '../List/MenuList.vue';

export default {
    name: "Teacher_StudentDetail",
    components: {
        MenuList,
    }, 
    props: {
        
    },
    methods: {
        
    },
    data() {
        return {
            TeacherName: "Lê Sơn Hải",
            listNav: ListScreen.TeacherStudentDetail,
        }
    }
}
</script>
<style scoped>

</style>