<template>
    <div id="Activities" class="col-12">
        <div class="bottomborder col-12">
            <h4> Nhật ký hoạt động :</h4>
        </div>
        <div class="listActivities">
            <ul>
                <li v-for="acti in Notification" :key="acti">{{ acti.message }}</li>
            </ul>
        </div>

    </div>
    <Paging :totalPage="this.totalPage" v-show="this.totalPage != 0" v-on:onClickToPage="onClickToPage" id="paging">
    </Paging>
</template>
<script>
import Paging from "../Paging.vue";
export default {
    name: "AllActivities",
    components: {
        Paging
    },
    methods: {
        onClickToPage(pageIndex) {
            this.getListRequest(pageIndex);
        },
    },
    created() {
        //sthis.getListRequest(0);
    },
    data() {
        return {
            Notification: [
                { message: "05/11/2022  14:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP472." },
                { message: "05/11/2022  13:24 - Lưu Minh Hà thêm báo cáo ngày 14/10 cho Sơn Hải" },
                { message: "05/11/2022  12:11 - PH Nguyễn Sơn Tùng đã thêm một yêu cầu mới" },
                { message: "05/11/2022  10:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP470." },
                { message: "05/11/2022  14:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP472." },
                { message: "05/11/2022  13:24 - Lưu Minh Hà thêm báo cáo ngày 14/10 cho Sơn Hải" },
                { message: "04/11/2022  13:24 - Lưu Minh Hà thêm báo cáo ngày 14/10 cho Sơn Hải" },
                { message: "04/11/2022  12:11 - PH Nguyễn Sơn Tùng đã thêm một yêu cầu mới" },
                { message: "04/11/2022  10:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP470." },
                { message: "04/11/2022  13:24 - Lưu Minh Hà thêm báo cáo ngày 14/10 cho Sơn Hải" },
                { message: "04/11/2022  12:11 - PH Nguyễn Sơn Tùng đã thêm một yêu cầu mới" },
                { message: "04/11/2022  10:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP470." },
                { message: "03/11/2022  13:24 - Lưu Minh Hà thêm báo cáo ngày 14/10 cho Sơn Hải" },
                { message: "03/11/2022  12:11 - PH Nguyễn Sơn Tùng đã thêm một yêu cầu mới" },
                { message: "03/11/2022  10:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP470." },
                { message: "03/11/2022  12:11 - PH Nguyễn Sơn Tùng đã thêm một yêu cầu mới" },
                { message: "03/11/2022  10:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP470." },
                
            ],
            totalPage: 7,

        }
    }, methods: {

    }
}
</script>

<style scoped>
.bottomborder {
    border-bottom: 1px solid #ccc;
    padding-left: 1rem;
    margin-bottom: 1.5rem;
}

.listActivities {
    padding-left: 2rem;
}

.listActivities li {
    margin-bottom: 0.5rem;
}
</style>