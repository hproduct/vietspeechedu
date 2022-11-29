<template>
    <div id="Slide">
        <div id="Header-info">
            <p style="font-weight: bold;font-size: 25px;"><span style=" color: red;">VietSpeech EDU,</span> chúng tôi là
                ai
                ?</p>
            <p style="margin-bottom: 0;">
                Cung cấp miễn phí công cụ theo dõi và đánh giá sự phát triển của trẻ;<br> Đồng hành và hỗ trợ
                cha mẹ/ người chăm sóc trẻ trong việc can thiệp tại nhà cho các trẻ có rối loạn phát triển chậm nói.
            </p>
            <button type="button" class="btn btn-light float-right" style="width: 25%;">Xem them</button>
        </div>
        <button id="Booking_btn" type="button" class="btn btn-danger" @click="onClickRequest()" style="width: 20%;">ĐẶT
            LỊCH ĐÁNH GIÁ</button>
    </div>

</template>
<script>
export default {
    name: "HomePageSlide",
    methods: {
        onClickRequest() {
            console.log('ok');
            this.$emit('testFunc');
        },
        onClickSomething(string) {
            console.log(string)
        }
    }
}
</script>
<style>
#Slide {
    background-image: url("../../assets/Header_Background.jpg");
    background-size: 100%;
    width: 100%;
    height: 900px;
    padding-top: 10%;
}

#Header-info {
    background-color: rgba(0, 0, 0, 0.4);
    color: whitesmoke;
    width: 37%;
    height: 37%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 10px;
    margin-left: 10%;

    border-radius: 10px;
    font-size: 23px;
}

#Booking_btn {
    color: #ffffff;
    background-color: red;
    font-weight: bold;
    margin-left: 18%;
    margin-top: 25px;
    border-radius: 15px;
}


.float-right {
    float: right;
}

.text-center {
    text-align: center;
}


div.card-deck div.card {
    border-radius: 20px;
}

div.card-deck div.card div.card-header {
    border-radius: 20px 20px 0px 0px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
}

.card-deck {
    display: flex;
    flex-flow: row wrap;
    margin-left: -15px;
    margin-right: -15px;
}

.card-deck .card {
    flex: 1 0 0%;
    margin-right: 15px;
    margin-bottom: 0;
    margin-left: 15px;
}
</style>

