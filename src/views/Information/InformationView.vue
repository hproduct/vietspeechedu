<template>
  <div class="View">
    <div id="mainScreen" class="container">
      <div class="row">
        <div class="d-flex flex-column left col-5">
          <p class="text-center">
            Tên người dùng:
            <span style="font-weight: bold">{{ username }}</span>
          </p>
          <img class="rounded-circle ava" :src="this.avatarUpdate || this.avatar || require('../../assets/avatar-demo.jpg')" />
          <div class="custom-file d-flex justify-content-center">
            <button class="custom-file-input btn btn-primary" id="customFile"
              @click="this.changeIsShowImageCropperModal(true)" v-show="this.ViewOrUpdate === 'update'">
              Cập nhập ảnh đại diện
            </button>
          </div>
        </div>
        <div class="personal_info col-7">
          <h5 style="font-weight: bold">THÔNG TIN CÁ NHÂN:</h5>
          <form @submit.prevent="onClick">
            <!-- name -->
            <div class="row">
              <div class="col-3">
                <p>Họ và tên:</p>
              </div>
              <div class="col-9">
                <p v-if="ViewOrUpdate == 'view'">{{ name || 'Không có' }}</p>
                <div v-else>
                  <input type="text" @focus="remove_error_message('error_name')" id="name_input" class="form-control"
                    v-model="this.nameUpdate" />
                  <div class="errorMSG" id="error_name"></div>
                </div>
              </div>
            </div>

            <!-- date of birth -->
            <div class="row">
              <div class="col-3">
                <p>Ngày sinh:</p>
              </div>
              <div class="col-9">
                <p v-if="ViewOrUpdate == 'view'">{{ DOB || 'Không có' }}</p>
                <div v-else>
                  <input type="date" class="form-control col-9" v-model="this.DOBUpdate" required />
                  <div class="error" id="error_dob">
                    <!-- error message -->
                  </div>
                </div>
              </div>
            </div>

            <!-- phone -->
            <div class="row">
              <div class="col-3">
                <p>Số điện thoại:</p>
              </div>
              <div class="col-9">
                <p v-if="ViewOrUpdate == 'view'">{{ phone || 'Không có' }}</p>
                <div v-else>
                  <input type="text" @focus="remove_error_message('error_phone')" class="form-control col-9" v-model="this.phoneUpdate" />
                  <div class="errorMSG" id="error_phone">
                    <!-- error message -->
                  </div>
                </div>
              </div>
            </div>

            <!-- email -->
            <div class="row">
              <div class="col-3">
                <p>Email:</p>
              </div>
              <div class="col-9">
                <p v-if="ViewOrUpdate == 'view'">{{ Email || 'Không có' }}</p>
                <div v-else>
                  <input type="text" @focus="remove_error_message('error_email')" class="form-control col-9" v-model="this.EmailUpdate"/>
                  <div class="errorMSG" id="error_email">
                    <!-- error message -->
                  </div>
                </div>
              </div>
            </div>

            <!-- city -->
            <div class="row">
              <div class="col-3">
                <p>Thành phố:</p>
              </div>
              <div class="col-9">
                <p v-if="ViewOrUpdate == 'view'">{{ city || 'Không có' }}</p>
                <div v-else>
                  <select v-model="cityUpdate" @focus="remove_error_message('error_city')" class="form-control custom-select col-9">
                    <option value="" selected disabled>Khu vực sinh sống ..</option>
                    <option v-for="item in listProvince" :key="item">
                      {{ item.message }}
                    </option>
                  </select>
                  <div class="errorMSG" id="error_city">
                    <!-- error message -->
                  </div>
                </div>
              </div>
            </div>

            <!-- address -->
            <div class="row">
              <div class="col-3">
                <p>Địa chỉ:</p>
              </div>
              <div class="col-9">
                <p v-if="ViewOrUpdate == 'view'">{{ address || 'Không có' }}</p>
                <div v-else>
                  <input type="text" @focus="remove_error_message('error_address')" class="form-control col-9" v-model="this.addressUpdate" />
                  <div class="errorMSG" id="error_address">
                    <!-- error message -->
                  </div>
                </div>
              </div>
            </div>

            <!-- date start -->
            <div class="row">
              <div class="col-3">
                <p>Ngày bắt đầu:</p>
              </div>
              <div class="col-9">
                <p v-if="ViewOrUpdate == 'view'">{{ startDate || 'Không có' }}</p>
                <div v-else>
                  <input type="text" class="form-control col-9" v-model="this.startDate" disabled/>
                </div>
              </div>
            </div>
          </form>

          <div class="float-right">
            <button v-show="ViewOrUpdate == 'view'" type="button" class="btn btn-primary"
              @click="changeViewOrUpdate('update')">
              Chỉnh sửa
            </button>
            <button v-show="ViewOrUpdate == 'update'" type="button" class="btn btn-primary"
              @click="changeViewOrUpdate('view')">
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <ImageCropperModalVue class="ImageCropperModal" :defaultImage="this.avatarUpdate" v-if="this.isShowImageCropperModal"
        v-on:onclose="this.changeIsShowImageCropperModal(false)" v-on:getCroppedImage="this.getCroppedImage">
      </ImageCropperModalVue>
    </Teleport>
    <Teleport to="body">
      <DialogConfirmVue v-show="this.isShowConfirm" v-on:onClickEventModal="this.onClickConfirmEvent" :Title="'Xác nhận thay đổi thông tin'" :content="'Bạn chắc chắn muốn thay đổi thông tin?'"></DialogConfirmVue>
    </Teleport>
  </div>
</template>
<script>
import DashboardHeader from "@/components/Header/DashboardHeader.vue";
import ImageCropperModalVue from "@/components/Modal/ImageCropperModal.vue";
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, AccountAPI, ImageAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import { province } from "@/constant/province";
import DialogConfirmVue from "@/components/Modal/DialogConfirm.vue";
import cookie from "vue-cookies";
import { validate } from "@/util/Validate.js";

export default {
  name: "ParentView",
  components: {
    DashboardHeader,
    ImageCropperModalVue,
    DialogConfirmVue
  },
  methods: {
    
    changeViewOrUpdate(value) {
      if (this.ViewOrUpdate === 'update') {
        if (this.checkForm()) {
          this.isShowConfirm = true;
          document.getElementsByTagName("body")[0].classList.add("modal-open");
        }
      } else {
        this.ViewOrUpdate = value;
      }
    },

    onClickConfirmEvent(event) {
      if (event) {
        this.savePersonalInformationToDatabase()
        document.getElementsByTagName("body")[0].classList.remove("modal-open");
        this.isShowConfirm = false;
      } else {
        document.getElementsByTagName("body")[0].classList.remove("modal-open");
        this.isShowConfirm = false
      }
    },

    checkForm() { // call this to check all update data
      let isValid = true;
      // check name input not empty
      if (!this.nameUpdate) {
        document.getElementById('error_name').innerHTML = 'Name should not be blank';
        isValid = false;
      }
      //check for phone
      if (!this.phoneUpdate) {
        document.getElementById('error_phone').innerHTML = 'Phone should not be blank';
        isValid = false;
      }else{
        if(!validate.check_phone(this.phoneUpdate)){
          document.getElementById('error_phone').innerHTML = 'Phone must be ten number and start with 84 or 0';
        isValid = false;
        }
      }
      //check for email
      if (!this.EmailUpdate) {
        document.getElementById('error_email').innerHTML = 'Email should not be blank';
        isValid = false;
      }else{
        if(!validate.check_mail(this.EmailUpdate)){
          document.getElementById('error_email').innerHTML = 'Email not correct format';
        isValid = false;
        }
      }
      //check city
      if(this.cityUpdate ==''){
        document.getElementById('error_city').innerHTML = 'Please pick a city';
        isValid = false;
      }
      //check address
      if(!this.addressUpdate){
        document.getElementById('error_address').innerHTML = 'Address should not be blank';
        isValid = false;
      }else{
        
      }

      return isValid
    },

    remove_error_message(mess_id) {//remove by id
      document.getElementById(mess_id).innerHTML = '';
    },

    changeIsShowImageCropperModal(value) {
      this.isShowImageCropperModal = value;
      if (value) {
        document.getElementsByTagName("body")[0].classList.add("modal-open");
      } else {
        document.getElementsByTagName("body")[0].classList.remove("modal-open");
      }
    },

    updateLoading(newLoadingState) {
      if (newLoadingState) {
          document.getElementsByTagName("body")[0].classList.add("modal-open");
      } else {
          document.getElementsByTagName("body")[0].classList.remove("modal-open");
      }
      this.$store.commit("setIsLoading", newLoadingState);
    },

    getCroppedImage(blob) {
      this.avatarUpdate = URL.createObjectURL(blob);
      this.imageToUpdate = blob;
      this.isShowImageCropperModal = false
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },

    updatePersonalInfor(data) {
      // View Infor
      this.username = this.$cookies.get(LocalStorageKey.ACC_NAME)
      this.name = data.fullName
      this.DOB = data.birthDate
      this.phone = data.phoneNumber
      this.address = data.address
      this.Email = data.email
      this.avatar = data.avatar

      // Update information
      this.username = this.$cookies.get(LocalStorageKey.ACC_NAME)
      this.nameUpdate = data.fullName || ""
      this.DOBUpdate = data.birthDate || ""
      this.phoneUpdate = data.phoneNumber || ""
      this.addressUpdate = data.address || ""
      this.EmailUpdate = data.email || ""
      this.avatarUpdate = data.avatar
    },

    getPersonalInfor() {
      let tokenType = cookie.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = cookie.get(LocalStorageKey.TOKEN_KEY);
      let accId = cookie.get(LocalStorageKey.ACC_ID);
      this.updateLoading(true);
      FetchApiWithCustomHeader(
        AccountAPI.GetPersonalAPI + `/${accId}`,
        Method.GET,
        {
          Content_Type: ContentType.JSON,
          Authorization: `${tokenType} ${token}`,
        },
        null,
        null,
        (response) => {
          if (response.result === "OK") {
            this.updatePersonalInfor(response.data);
          } else {
            // do something
          }
          this.updateLoading(false);
        }
      );
    },

    savePersonalInformationToDatabase() {
      let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
      let accId = this.$cookies.get(LocalStorageKey.ACC_ID);
      this.updateLoading(true);
      if (this.imageToUpdate != null) {
        let image = this.avatar.substring(31)
        let formData = new FormData();
        let file = new File([this.imageToUpdate], "avatar.jpeg", { lastModified: new Date().getTime(), type: this.imageToUpdate.type });
        formData.append('file', file)
        formData.append('accountId',accId)
        FetchApiWithCustomHeader(
          ImageAPI.SaveImage,
          Method.POST,
          {
            Content_Type: ContentType.JSON,
            Authorization: `${tokenType} ${token}`,
          },
          formData,
          null,
          (response) => {
            this.updatePersonalInfor(response);
          }
        );
        FetchApiWithCustomHeader(
          ImageAPI.DeleteImage+`/${image}`,
          Method.DELETE,
          {
            Content_Type: ContentType.JSON,
            Authorization: `${tokenType} ${token}`,
          },
          null,
          null,
          (response) => {
            ///this.updateLoading(false);
          }
        );
      }
      let userInfor = {
        accountId: accId,
        fullName : this.nameUpdate,
        birthDate: this.DOBUpdate,
        phoneNumber : this.phoneUpdate,
        address: this.addressUpdate,
        email: this.EmailUpdate
      }
      FetchApiWithCustomHeader(
        AccountAPI.SavePersonalAPI,
        Method.POST,
        {
          Content_Type: ContentType.JSON,
          Authorization: `${tokenType} ${token}`,
        },
        userInfor,
        null,
        (response) => {
          console.log(response)
          if (response.result === "OK") {
            this.updatePersonalInfor(response.data);
          } else {
            
          }
          this.updateLoading(false);
          this.ViewOrUpdate = "view"
        }
      );
    }
  },
  created() {
    this.getPersonalInfor()
  },
  data() {
    return {
      username: "",
      name: "",
      DOB: "",
      phone: "",
      Email: "",
      city: "",
      avatar: null,
      address: "",
      startDate: "14/11/2000",// need change base on each account

      nameUpdate: "",
      DOBUpdate: "",
      phoneUpdate: "",
      EmailUpdate: "",
      cityUpdate: "",
      avatarUpdate: null,
      addressUpdate: "",

      ViewOrUpdate: "view",
      listProvince: province.PROVINCES,
      isShowImageCropperModal: false,
      imageToUpdate: null,
      isShowConfirm: false
    };
  },
};
</script>
<style scoped>
.left button {
  margin: auto;
}

#mainScreen {
  padding: 2rem;
}

img.ava {
  width: 200px;
  height: 200px;
  margin: auto;
}

div.personal_info {
  padding-top: 2rem;
}

.custom-file-label {
  border: 1px solid #ccc;
  color: white;
  background-color: #0d6efd;
  padding: 10px 20px 10px 20px;
  width: 50%;
  text-align: center;
  border-radius: 10px;
  margin: auto;
}

div.personal_info input,
select {
  border-radius: 15px !important;
}

div.personal_info button {
  margin: 5px;
}

div.personal_info p {
  padding-left: 2rem;
  margin-bottom: 3rem;
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(2.25rem+2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  background-color: #fff;
  border: 1px solid #ced4da;

  appearance: none;
}

.ImageCropperModal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
}

.errorMSG {
  color: red;
  padding: 0px 0.75rem;
}
</style>
