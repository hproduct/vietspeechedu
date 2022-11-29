<template>
    <div class="View">
        <div id="mainScreen" class="d-inline-flex col-12">
            <div id="leftBlock" class="col-3 d-flex flex-column">
                <StaffSideBar id="TeacherSidebar"></StaffSideBar>
            </div>
            <div id="rightBlock" class="col-9">
                <RouterView />
            </div>
        </div>
    </div>
</template>
<script>
import StaffSideBar from '@/components/Staff/StaffSideBar.vue';

export default {
    name: "TeacherView",
    components: {
        StaffSideBar,
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
#mainScreen {
    margin-top: 10px;
    display: flex;
    background-color: #F0F0F4;
    padding-top: 5px;
    padding-left: 20px;
    padding-right: 20px;

}

#leftBlock {
    padding: 0px 10px 0px 5px;

}

#rightBlock {

    height: 690px;
}

#TeacherSidebar {
    height: 100%;
}

#TeacherDashboard {
    height: 100%;
    width: 100%;
}
</style>