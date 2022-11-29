<template>
    <div>
        <div class="modal-dialog modal-xl modal-dialog-centered modal" id="LoginModal">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button float-right" v-on:click="onClickCloseRequestModal()">&times;</button>

                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <div>
                        <h3 class="align-middle text-center  " style="color: red;font-weight:bold;">ĐẶT LỊCH ĐÁNH GIÁ
                            TRẺ</h3>
                    </div>
                    <p class="align-middle text-center padding-top-30" style="font-size: 20px;">Hãy để lại thông tin của
                        bạn, VSE sẽ gửi cho bạn thông tin mới nhất hoặc liên hệ đặt lịch tư vấn trực tiếp.</p>

                    <div class="container" id="Customer_info_form">
                        <div class="">
                            <p>Thông tin cơ bản</p>
                            <input v-model="name" type="text" class="form-control" placeholder="Họ và tên ...">
                            <input v-model="phone" type="text" class="form-control" placeholder="Số điện thoại ...">
                            <input v-model="email" type="text" class="form-control" placeholder="Email ...">
                        </div>
                        <div class="float-r">
                            <p>Lựa chọn</p>
                            <select v-model="role" class=" form-control custom-select" placeholder="Bạn là ...">
                                <option selected disabled value="">Bạn là ...</option>
                                <option value="Chuyên gia">Chuyên gia</option>
                                <option value="Nhà trị liệu">Nhà trị liệu</option>
                                <option value="Giáo viên">Giáo viên</option>
                                <option value="Phụ huynh">Phụ huynh</option>
                            </select>
                            <select v-model="want" class=" form-control custom-select" placeholder="Bạn muốn ...">
                                <option selected disabled value="">Bạn muốn ...</option>
                                <option value="Đăng ký nhận khóa học">Đăng ký nhận khóa học</option>
                                <option value="Đăng ký học tại trung tâm">Đăng ký học tại trung tâm</option>
                                <option value="Đăng ký tư vấn">Đăng ký tư vấn</option>
                            </select>
                            <select v-model="location" class=" form-control custom-select" placeholder="Khu vực sinh sống">
                                <option selected disabled>Khu vực sinh sống ..</option>
                                <option v-for="item in listProvince" :key="item">{{item.message}}</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <p style="color: red;" class="col-8 float-left">{{check_data_message}}</p>
                    <button type="button" class="btn btn-danger float-right col-3" v-on:click="validateData()">Gửi yêu
                        cầu</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import province from '@/constant/province';

export default {
    name: "EvaluateRequestModal",
    methods: {
        onClickCloseRequestModal() {
            this.$emit('oncloseRequest')
        },

        validateData() {
            var isCheck = true;
            
            if (this.name == ''||this.phone==''||this.email==''||this.role==''||this.want==''||this.location=='') {
                isCheck = false;
            }
            if (isCheck) {
                this.check_data_message = '';
                let data = {
                    "fullName": this.name,
                    "phoneNumber": this.phone,
                    "email": this.email,
                    "guestRole": this.role,
                    "guestDesire": this.want,
                    "guestCity": this.location
                }
                // trường hợp data đã validate
                this.$emit("validateData", data);            
            } else {
                this.check_data_message = 'Vui lòng điền đầy đủ thông tin trước khi gửi.'
            }
        },

        
    },
    data() {
        return {
            name_value: '',
            phone_value: '',
            email_value: '',
            role_selected:'',
            want_selected:'',
            location_selected:'',
            check_data_message: '',
            listProvince:  [
        { message: 'An Giang' },
        { message: 'Kon Tum' },
        { message: 'Bà Rịa – Vũng Tàu' },
        { message: 'Lai Châu' },
        { message: 'Bắc Giang' },
        { message: 'Lâm Đồng' },
        { message: 'Bắc Kạn' },
        { message: 'Lạng Sơn' },
        { message: 'Bạc Liêu' },
        { message: 'Lào Cai' },
        { message: 'Bắc Ninh' },
        { message: 'Long An' },
        { message: 'Bến Tre' },
        { message: 'Nam Định' },
        { message: 'Bình Định' },
        { message: 'Nghệ An' },
        { message: 'Bình Dương' },
        { message: 'Ninh Bình' },
        { message: 'Bình Phước' },
        { message: 'Ninh Thuận' },
        { message: 'Bình Thuận' },
        { message: 'Phú Thọ' },
        { message: 'Cà Mau' },
        { message: 'Phú Yên' },
        { message: 'Cần Thơ' },
        { message: 'Quảng Bình' },
        { message: 'Cao Bằng' },
        { message: 'Quảng Nam' },
        { message: 'Đà Nẵng' },
        { message: 'Quảng Ngãi' },
        { message: 'Đắk Lắk' },
        { message: 'Quảng Ninh' },
        { message: 'Đắk Nông' },
        { message: 'Quảng Trị' },
        { message: 'Điện Biên' },
        { message: 'Sóc Trăng' },
        { message: 'Đồng Nai' },
        { message: 'Sơn La' },
        { message: 'Đồng Tháp' },
        { message: 'Tây Ninh' },
        { message: 'Gia Lai' },
        { message: 'Thái Bình' },
        { message: 'Hà Giang' },
        { message: 'Thái Nguyên' },
        { message: 'Hà Nam' },
        { message: 'Thanh Hóa' },
        { message: 'Hà Nội' },
        { message: 'Thừa Thiên Huế' },
        { message: 'Hà Tĩnh' },
        { message: 'Tiền Giang' },
        { message: 'Hải Dương' },
        { message: 'TP Hồ Chí Minh' },
        { message: 'Hải Phòng' },
        { message: 'Trà Vinh' },
        { message: 'Hậu Giang' },
        { message: 'Tuyên Quang' },
        { message: 'Hòa Bình' },
        { message: 'Vĩnh Long' },
        { message: 'Hưng Yên' },
        { message: 'Vĩnh Phúc' },
        { message: 'Khánh Hòa' },
        { message: 'Yên Bái' },
        { message: 'Kiên Giang' }
    ],
        }
    },
    
        email:{
            get() {
                return this.email_value
            },
            set(value) {
                this.email_value = value
            }
        },
        role:{
            get() {
                return this.role_selected
            },
            set(value) {
                this.role_selected = value
            }
        },
        want:{
            get() {
                return this.want_selected
            },
            set(value) {
                this.want_selected = value
            }
        },
        location:{
            
            get() {
                return this.location_selected
            },
            set(value) {
                this.location_selected = value
            }
        }
    }

</script>
  
<style>
.text-center {
    text-align: center;
}

#Customer_info_form {

    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

#Customer_info_form div {
    width: 49%;
    display: inline-block;
    margin: 0px;
}

#Customer_info_form div input {
    margin: 10px 0px 10px 0px;
    border-radius: 15px;
}

#Customer_info_form div select {
    margin: 10px 0px 10px 0px;
    border-radius: 15px;
}

.custom-select {
    display: inline-block;
    width: 100%;
    height: calc(2.25rem+2px);
    padding: .375rem 1.75rem .375rem .75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 15px !important;
    appearance: none;
}
</style>
  