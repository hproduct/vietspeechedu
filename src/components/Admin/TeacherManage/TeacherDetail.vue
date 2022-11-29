<template>
    <MenuListVue :listNav="ListMenu"></MenuListVue>
    <div id="mainScreen" class="container" v-show="ListMenu[0].isSelected">
        <div class="d-inline-flex col-12">
            <div class="d-flex flex-column left col-5">
                <img class="rounded-circle ava" src="@/assets/avatar-demo.jpg" />
            </div>
            <div class="personal_info col-7">
                <h5 style="font-weight: bold;margin-bottom: 10px;">THÔNG TIN CÁ NHÂN: </h5>
                <div class="d-flex flex-column col-12">
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Username: </p>
                        <p class="col-9">{{ username }}</p>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Họ và tên: </p>
                        <p class="col-9" v-show="ViewOrUpdate == 'view'">{{ name }}</p>
                        <div class="col-9" v-show="ViewOrUpdate == 'update'">
                            <input type="text" class="form-control " v-model="name" />
                        </div>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Ngày sinh: </p>
                        <p class="col-9" v-show="ViewOrUpdate == 'view'">{{ DOB }}</p>
                        <div class="col-9" v-show="ViewOrUpdate == 'update'">
                            <input type="date" class="form-control " v-model="DOB" />
                        </div>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Số điện thoại: </p>
                        <p class="col-9" v-show="ViewOrUpdate == 'view'">{{ phone }}</p>
                        <div class="col-9" v-show="ViewOrUpdate == 'update'">
                            <input type="text" class="form-control " v-model="phone" />
                        </div>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Email: </p>
                        <p class="col-9" v-show="ViewOrUpdate == 'view'">{{ Email }}</p>
                        <div class="col-9" v-show="ViewOrUpdate == 'update'">
                            <input type="email" class="form-control " v-model="Email" />
                        </div>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Vị trí: </p>
                        <p class="col-9">{{ splitRole }}</p>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Thành phố: </p>
                        <p class="col-9" v-show="ViewOrUpdate == 'view'">{{ city }}</p>
                        <div class="col-9" v-show="ViewOrUpdate == 'update'">
                            <select v-model="location" class=" form-control custom-select col-9" placeholder="Khu vực sinh sống" :required="true">
                                <option selected disabled>Khu vực sinh sống ..</option>
                                <option v-for="item in listProvince" :key="item" :selected="item.message == city">{{
                                        item.message
                                }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Địa chỉ: </p>
                        <p class="col-9" v-show="ViewOrUpdate == 'view'">{{ address }}</p>
                        <div class="col-9" v-show="ViewOrUpdate == 'update'">
                            <input type="text" class="form-control " v-model="address" />
                        </div>
                    </div>
                    <div class="col-12 d-inline-flex">
                        <p class="col-3">Ngày bắt đầu:</p>
                        <p class="col-9">{{ startDate }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-row-reverse col-12">
            <button v-show="ViewOrUpdate == 'view'" type="button"
                class="btn text-center btn-primary col-2 margin-left-1rem" @click="changeViewOrUpdate('update')"> Chỉnh
                sửa</button>
            <button v-show="ViewOrUpdate == 'update'" type="button"
                class="btn text-center btn-primary col-2 margin-left-1rem" @click="changeViewOrUpdate('view')"> Lưu
            </button>
            <button type="button" class="btn text-center btn-secondary col-2 margin-left-1rem"> Đổi mật khẩu</button>
            <button type="button" class="btn text-center btn-secondary col-2 margin-left-1rem"> Đổi vai trò</button>
        </div>
    </div>
    <div v-show="ListMenu[1].isSelected">
        <Schedule></Schedule>
    </div>


</template>
<script>
import { province } from '@/constant/province';
import Account from '../../Account.vue';
import Schedule from '../../Schedule.vue';
import { ListScreen } from '@/constant/ListScreen';
import MenuListVue from '@/components/List/MenuList.vue';

export default {
    name: "TeacherDetail",
    components: {
        Account,
        Schedule,
        MenuListVue
    },
    methods: {
        changeViewOrUpdate(value) {
            this.ViewOrUpdate = value;
        },
    },
    data() {
        return {
            username: "axxdang5",
            name: "Nguyễn Hoàng Hà",
            DOB: "19/04/1982",
            phone: "0984xxxyyy",
            Email: "abcd1234@gmail.com",
            role: "Giáo viên",
            city: "Hà Nội",
            address: "ngõ 18 Phan Viễn Trường, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
            startDate: "12/03/2021",
            ViewOrUpdate: "view",
            listProvince: province.PROVINCES,
            ListMenu: ListScreen.TeacherDetailList,


        }
    },
    computed: {
        splitRole() {
            
            if (this.$route.fullPath.includes("list-teacher"))
                return " Giáo viên";
            else if (this.$route.fullPath.includes("list-supervisor"))
                return "Quản lý chuyên môn";
        },
    }
};


</script>
<style scoped>
img.ava {
    width: 350px;
    margin: auto;
}

div.personal_info {
    padding-top: 2rem;
}

div.personal_info p {
    padding-left: 2rem;
    margin-bottom: 1rem;
}

.margin-left-1rem {
    margin-left: 1rem;
}

div.personal_info input,
select {
    margin-bottom: 0.3rem;
    border-radius: 15px !important;
}
</style>