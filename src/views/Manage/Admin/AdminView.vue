<template>
    <div class="View">
        <div id="mainScreen">
            <div id="leftBlock" class="col-3 d-flex flex-column">
                <SideBar></SideBar>
                <News ></News>
            </div>
            <div id="rightBlock" class="col-9">
                <router-view />
            </div>
        </div>
    </div>
    <LoadingPage v-show='false'></LoadingPage>
</template>

<script>
import DashboardHeader from '../../../components/Header/DashboardHeader.vue'
import LoadingPage from '../../../components/LoadingPage.vue'
import DataTable from '../../../components/Admin/DataTable.vue'
import SideBar from '../../../components/Admin/SideBar.vue'
import News from '../../../components/Admin/News.vue'
import AllActivity from '../../../components/Admin/AllActivity.vue'


export default {
    name: "AdminView",
    components: {
        DashboardHeader,
        LoadingPage,
        DataTable,
        SideBar, 
        News,
        AllActivity
    },
    methods: {
    },
    data() {
        return {
            isLoading: false,

        }
    }
}
</script>

<style scoped>
#mainScreen div {
    display: inline-block;
}

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


</style>
