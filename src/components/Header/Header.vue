<template>
  <div id="Header">
    <nav id="navBar" class="navbar navbar-dark">
      <a class="navbar-brand col-3">
        <img v-on:click="onClickLogin(false)" src="@/assets/logo2.png" alt="VietSpeech School" style="width: 250px" />
      </a>
      <div class="col-7 d-flex justify-content-around">
        <a class="" href="#"> Đánh Giá</a>
        <a class="" href="#"> Hướng Dẫn</a>
        <a class="" href="#"> Khoá Học</a>
        <a class="" href="#"> Giới Thiệu</a>
      </div>
      <a class="col-1" href="#">
        <button type="button" class="btn btn-orange float-left" style="width: 95%; margin-right: 5%;" data-toggle="modal"
          data-target="#loginModal" @click="onClickLogin(true)">
          Đăng Nhập
        </button>
      </a>
    </nav>
  </div>
  <Teleport to="body">
      <LoginModal
        class="loginModal"
        v-show="this.isShowModal"
        v-on:closeLoginModal="closeLoginModal()"
        v-on:onclose="setIsShowModal(false)"
      />
  </Teleport>
</template>

<script>
import LoginModal from '../Modal/LoginModal.vue';

export default {
  name: "Header",
  components: {
    LoginModal
  },
  methods: {
    onClickLogin(isShow) {
      this.setIsShowModal(isShow)
    },
    closeLoginModal() {
      this.setIsShowModal(false)
    },
    setIsShowModal(isShowModalInput) {
      this.isShowModal = isShowModalInput;
      if (isShowModalInput) {
        document.getElementsByTagName("body")[0].classList.add("modal-open");
      } else {
        document.getElementsByTagName("body")[0].classList.remove("modal-open");
      }
      if (isShowModalInput) {
        this.isShowEvaluateForm = false;
      }
    },
  },
  data() {
    return {
      isShowModal: false,
    }
  }
}
</script>

<style scoped lang="scss">
#Header {
  width: 100%;
  padding-top: 0px;
}

#navBar {
  padding-bottom: 0px;
  padding-top: 0px;
  background-color: rgba(256, 256, 256, 0.4);
}

#navBar a {
  color: black;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 17px;
}

.btn-orange {
  color: #ffffff;
  background-color: #e5754c;
  border-color: #df5320;
}

.btn-ligh {
  color: #000000;
  background-color: rgba(256, 256, 256, 0.4);
}

/* The search field */
#myInput {
  box-sizing: border-box;

  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}

/* The search field when it gets focus/clicked on */
#myInput:focus {
  outline: 3px solid #ddd;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}

#myDropdown {
  margin-left: 77%;
}

#Header-info {
  background-color: rgba(0, 0, 0, 0.4);
  color: whitesmoke;
  width: 37%;
  height: 31%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 10px;
  margin-left: 10%;
  margin-top: 10%;
  border-radius: 10px;
  font-size: 23px;
}

#Booking_btn {
  color: #ffffff;
  background-color: red;
  font-weight: bold;
  margin-left: 18.5%;
  margin-top: 25px;
  border-radius: 15px;
}

.float-right {
  float: right;
}
.loginModal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
