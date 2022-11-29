<template>
    <div id="Footer">
        <div class="col-7 float-left" style="padding-right: 15%;">
            <h4>{{ Name }}</h4>
            <p style="font-size: 15px;">Địa chỉ: {{ Address }}<br>
                Điện thoại: {{ phone }}<br>
                Gmail: {{ Gmail }} - Website: {{ Website }}</p>
            <p style="font-size: 15px;">ĐKKD: 0108706397 - Cấp ngày 16/04/2019<br>
                Phòng đăng ký kinh doanh - Sở Kế hoạch & Đầu tư TP Hà Nội</p>
        </div>
        <div class="col-5 float-right" style="position: relative;">
            <p>Follow us: </p>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-youtube"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-pinterest"></a>
            <p id="copyright">@2022 VIETSPEECH EDU CO.LTD - Đã đăng ký bản quyền</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "HomeView",
    components: {

    },
    methods: {

    }, data() {
        return {
            Name: 'CÔNG TY TNHH THIẾT BỊ DỊCH VỤ GIÁO DỤC VÀ HỢP TÁC QUỐC TẾ VIETSPEECH',
            Address: 'Số 26, ngõ 18 Phan Viễn Trường, Dịch Vọng Hậu, Cầu Giấy, Hà Nội.',
            phone: '0384504735-0375275585-0963107905',
            Gmail: 'vietspeechedu@gmail.com',
            Website: 'http://vietspeechedu.vn',
        }
    },
};
</script>
<style scoped>
#Footer {
    display: flex;
}

#Footer div {
    display: inline-block;
    padding: 20px 20px 0px 20px;
}

.fa {
    padding: 7px;
    font-size: 30px;
    width: 45px;
    height: 45px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: center;
    text-decoration: none;

    background-color: black;
    color: white;
    border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}

#copyright {
    position: absolute;
    bottom: 0;
}
</style>

