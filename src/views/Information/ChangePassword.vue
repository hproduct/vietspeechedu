<template>
    <div class="View">
        <DashboardHeader></DashboardHeader>
        <div class="container">
            <h3 class="title">Đổi mật khẩu</h3>
            <form class="ResetForm">
                <p class="titleline">Nếu bạn vẫn còn nhớ mật khẩu cũ, vui lòng sử dụng form dưới đây để tạo lại mật khẩu:</p>
                <div class="col-12 d-inline-flex">
                    <p class="col-4">Mật khẩu cũ: </p>
                    <div class="col-5">
                        <input type="password" class="form-control" />
                    </div>
                </div>
                <div class="col-12 d-inline-flex">
                    <p class="col-4">Mật khẩu mới: </p>
                    <div class="col-5">
                        <input type="password" class="form-control" />
                    </div>
                </div>
                <div class="col-12 d-inline-flex">
                    <p class="col-4">Xác nhận lại mật khẩu : </p>
                    <div class="col-5">
                        <input type="password" class="form-control" />
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-end">
                    <button type="button" class="btn btn-primary"> Cập nhật mật khẩu</button>
                </div>
            </form>
            <form class="ResetForm">
            <p class="titleline">Nếu bạn đã quên mật khẩu cũ, chúng tôi sẽ tạo lại mật khẩu và gửi theo địa chỉ email sau đây:</p>
            <p>abc***********0@gmail.com</p>
            <div class="col-12 d-inline-flex">
                <p class="col-4">Vui lòng xác nhận lại địa chỉ email: </p>
                <div class="col-5">
                    <input type="email" class="form-control" />
                </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
                <button type="button" class="btn btn-primary"> Xác nhận email</button>
            </div>
            </form>
        </div>
    </div>

</template>
<script>
import DashboardHeader from '@/components/Header/DashboardHeader.vue';

export default {
    name: "ChangePassword",
    components: {
        DashboardHeader,
    },
    methods: {

    },

};

</script>
<style scoped>
h3.title{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

.ResetForm{
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 10px 20px;
    margin-bottom: 1rem;
}

.ResetForm p.titleline{
    background-color: white;
    position: relative;
    top: -1.4rem;
    display: inline;
    padding-left: 10px;
    padding-right: 10px;
}
</style>