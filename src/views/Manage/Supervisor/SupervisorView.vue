<template>
    <div class="View">
        <div id="mainScreen" class="d-inline-flex col-12">
            <div id="leftBlock" class="col-3 d-flex flex-column">
                <SupervisorSideBar id="SupervisorSidebar"></SupervisorSideBar>
            </div>
            <div id="rightBlock" class="col-9">
                <RouterView />
            </div>
        </div>
    </div>
</template>
<script >
import SupervisorSideBar from '@/components/Supervisor/SupervisorSideBar.vue';

export default {
    name: "SupervisorView",
    components: {
        SupervisorSideBar,
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

#SupervisorSidebar {
    height: 100%;
}

#TeacherDashboard {
    height: 100%;
    width: 100%;
}
</style>