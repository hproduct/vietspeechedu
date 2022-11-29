<template>
    <div style="padding: 1rem;">
        <div class="col-12">
            <div class="ItemList d-flex justify-content-between" v-for="rep in this.listPlan">
                <p class="bolder">{{ rep.name }}</p>
                <button type="btn" class="btn btn-light" @click="onClickView()" >View</button>
            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router/Router';
export default {
    name: "SupervisorInterventionPlanReport",
    components: {

    },
    methods: {
        onClickView(){
            router.push('/supervisor/student-detail/intervention-plan-report-detail');
        },
    },
    data() {
        return {
            listPlan: [{ name: "Kế hoạch can thiệp từ ngày 10/3/2022" },
            { name: "Kế hoạch can thiệp từ ngày 15/8/2022" }
            ],
        }
    }
}

</script>
<style scoped>
.ItemList {
    background-color: white;
    border: 1px solid #ccc;
    margin: 15px 10px;
    border-radius: 10px;
    padding: 5px;
}

.ItemList p {
    margin-top: auto !important;
    margin-bottom: auto !important;
    margin-left: 20px;
}

.ItemList button {
    background-color: #e2e2e9;
    color: black;
    border: 1px solid #ccc;
    width: 10%;
}
</style>