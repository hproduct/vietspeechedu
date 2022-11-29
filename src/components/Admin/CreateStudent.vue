<template>
    <form id="CreateScreen">
        <h4 class="title">Tạo tài khoản mới: </h4>
        <div class="d-inline-flex col-12">
            <p class="col-3">Họ và tên: </p>
            <div class="col-8">
                <input type="text" class="form-control " v-model="name" />
            </div>
        </div>
        <div class="d-inline-flex col-12">
            <p class="col-3">Ngày sinh: </p>
            <div class="col-4">
                <input type="date" class="form-control " />
            </div>
            <p class=" col-1 text-center">Tuổi: </p>
            <div class="col-3">
                <input type="number" class="form-control " />
            </div>
        </div>
        <div class="d-flex d-inline-flex col-12">
            <p class="col-4">Tài khoản của phụ huynh: </p>
            <div class="col-8">
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" value="true" name="ParentAccount"
                            v-model="ParentAccountIsExist">Đã có tài khoản
                    </label>
                </div>
                <div class="form-check-inline">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" value="false" name="ParentAccount"
                            v-model="ParentAccountIsExist">Chưa có tài khoản
                    </label>
                </div>
            </div>
        </div>
        <div v-show="ParentAccountIsExist != 'true'">
            <div class="d-inline-flex col-12">
                <p class="col-3">Tên người dùng: </p>
                <div class="col-8">
                    <input type="text" class="form-control " v-model="name" />
                </div>
            </div>
            <div class="d-inline-flex col-12">
                <p class="col-3">Họ và tên phụ huynh: </p>
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
        </div>
        <div v-show="ParentAccountIsExist == 'true'">
            <div class="SearchParent">
                <h5 class="subtitle">Tìm thông tin phụ huynh:</h5>
                <div class="d-inline-flex col-12">
                    <p class="col-3">Tên Phụ huynh: </p>
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
                <div class="col-12 d-flex justify-content-end">
                    <button type="button" class="btn btn-primary"> Tìm thông tin</button>
                </div>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-end">
            <button type="button" class="SaveButton btn btn-primary"> Lưu thông tin</button>
        </div>

    </form>
</template>
<script>
import { province } from '@/constant/province';

export default {
    name: "CreateStudent",
    components: {},
    props: {
        ParentAccountIsExist: String,

    },
    data() {
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
    padding: 1rem 1rem 0 2em;
}

.SearchParent {
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 5px 5px 5px 10px;
}

.SearchParent button {
    margin-right: 2rem;
    margin-top: 0.5rem;
}

.title {
    position: relative;
    top: -2rem;
    background-color: #F0F0F4;
    display: inline;
    padding-right: 1rem;
    padding-left: 1rem;
}

.SaveButton{
    position: absolute;
    bottom: 10px;
}

.subtitle {
    position: relative;
    top: -1rem;
    background-color: #F0F0F4;
    display: inline;
    padding-right: 1rem;
    padding-left: 1rem;
}

#CreateScreen div.d-inline-flex {
    margin-top: 5px;
    vertical-align: center;
}

#CreateScreen input {
    border-radius: 15px;
}

p {
    padding-top: 5px;
}
</style>