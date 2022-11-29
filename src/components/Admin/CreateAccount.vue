<template>
    <div id="CreateScreen">
        <h4 class="title">Tạo tài khoản mới: </h4>
        <form class="col-12">
            <div class="d-inline-flex col-12">
                <p class="col-3">Tên người dùng: </p>
                <div class="col-8">
                    <input type="text" class="form-control " v-model="name" />
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Họ và tên: </p>
                <div class="col-8">
                    <input type="text" class="form-control " v-model="name" />
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Ngày sinh: </p>
                <div class="col-8">
                    <input type="text" class="form-control " v-model="name" />
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Số điện thoại: </p>
                <div class="col-8">
                    <input type="text" class="form-control " v-model="name" />
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Email: </p>
                <div class="col-8">
                    <input type="text" class="form-control " v-model="name" />
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Vị trí: </p>
                <div class="col-8">
                    <select v-model="location" class=" form-control custom-select col-9"
                        placeholder="Khu vực sinh sống">
                        <option selected disabled>vị trí ...</option>
                        <option>Giáo viên</option>
                        <option>Quản lý chuyên môn</option>
                        <option>Nhân viên văn phòng</option>
                        <option>Phụ huynh</option>
                        <option>Admin</option>
                    </select>
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Thành phố: </p>
                <div class="col-8">
                    <select v-model="location" class=" form-control custom-select col-9" placeholder="Khu vực sinh sống"
                        :required="true">
                        <option selected disabled>Khu vực sinh sống ..</option>
                        <option v-for="item in listProvince" :key="item" :selected="item.message == city">{{
                                item.message
                        }}</option>
                    </select>
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Địa chỉ: </p>
                <div class="col-8">
                    <input type="text" class="form-control " v-model="name" />
                </div>
            </div>
            <div class="col-12 d-inline-flex d-flex justify-content-end">
                <button type="btn" class="btn btn-primary float-right"> Tạo tài khoản </button>
            </div>
        </form>

    </div>

</template>
<script>

import { province } from '@/constant/province';

export default {
    name: "CreateAccount",
    components: {},
    data(){
        return {
            listProvince: province.PROVINCES,
        }
    }
};

</script>
<style scoped>
#CreateScreen {
    border: 1px solid #ccc;
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
    height: 94%;
    margin-top: 2%;
    margin-bottom: 4%;
    border-radius: 25px;
    padding: 1rem 1rem 1rem 2em;
}

.title {
    position: relative;
    top: -2rem;
    background-color: #F0F0F4;
    display: inline;
    padding-right: 1rem;
    padding-left: 1rem;
}

#CreateScreen div.d-inline-flex {
    margin-top: 5px;
}

#CreateScreen input {
    border-radius: 15px;
}
</style>