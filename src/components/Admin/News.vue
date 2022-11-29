<template>
    <div id="news" class="d-flex flex-column">
        <div class="header">
            <p> Hoạt động mới: </p>
        </div>
        <div>
            <p v-for="noti in Notification" :key="noti" >{{noti.message}}</p>
            <a class="float-right" href="/admin/all-activities">Xem tất cả >></a>
        </div>

    </div>
</template>
<script>
export default {
    name: "News",
    components: {
    },
    methods: {

    },
    data() {
        return {
            Notification: [
                { message: "14:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP472." },
                { message: "13:24 - Lưu Minh Hà thêm báo cáo ngày 14/10 cho Sơn Hải" },
                { message: "12:11 - PH Nguyễn Sơn Tùng đã thêm một yêu cầu mới" },
                { message: "10:05 - Ng. Kim Dung đã phê duyệt kế hoạch can thiệp IP470." },
                
            ]

        }
    }
}
</script>
<style scoped>
.header {
    border-bottom: 1px solid black;
}

#news {
    margin-top: 1rem;
    padding-left: 1rem;
    padding-right: .5rem;
    background-color: #E2E2E9;
}

.header p {
    margin-top: 5px;
    margin-bottom: 3px;
    margin-left: 1rem;
    font-weight: bold;
}
</style>