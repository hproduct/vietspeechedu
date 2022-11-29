<template>
  <div class="col-12" v-show="!this.$store.state.isLoading">
    <div class="d-inline-flex">
      <div>
        <img class="rounded-circle ava" :src="this.studentInfor.avatar ||  require('@/assets/avatar-demo.jpg')"  />
        <p class="text-center">
          Biệt danh: <span style="font-weight: bold">{{ this.studentInfor.nickName }}</span>
        </p>
      </div>
      <div class="personal_info">
        <h5 style="font-weight: bold">THÔNG TIN CÁ NHÂN:</h5>
        <p>Mã học sinh: VSE-0{{ this.studentInfor.studentId || "Không có" }}</p>
        <p>Họ và tên: {{ this.studentInfor.fullName || "Không có"}}</p>
        <p>Ngày sinh: {{ this.studentInfor.birthDate || "Không có"}}  </p>
        <p>Tuổi:</p>
        <p>Địa chỉ: {{ this.studentInfor.address || "Không có" }}</p>
        <p>Ngày bắt đầu: </p>
      </div>
    </div>
    <h5 style="font-weight: bold; margin: 10px">THÔNG TIN PHỤ HUYNH:</h5>
    <div class="col-12 d-inline-flex parent_info">
      <div class="col-6">
        <p>Họ và tên bố: {{ this.studentInfor.dadName || "Không có" }}</p>
        <p>Ngày sinh: {{ this.studentInfor.dadBirthDate || "Không có" }} </p>
        <p>Công việc: {{ this.studentInfor.dadJob || "Không có" }}</p>
        <p>Số điện thoại bố: {{ this.studentInfor.dadPhone || "Không có" }}</p>
        <p>Email: {{ this.studentInfor.dadEmail || "Không có" }}</p>
      </div>
      <div class="col-5">
        <p>Họ và tên mẹ: {{this.studentInfor.momName || "Không có"}}</p>
        <p>Ngày sinh: {{ this.studentInfor.momBirthDate || "Không có" }}</p>
        <p>Công việc: {{ this.studentInfor.momJob || "Không có" }}</p>
        <p>Số điện thoại mẹ: {{this.studentInfor.momPhone || "Không có" }}</p>
        <p>Email: {{this.studentInfor.momEmail || "Không có" }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, StudentAPI } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";

export default {
  name: "StudentInfo",
  props: {},
  created() {
    this.getStudentInfor()
  },
  methods: {
    changeLoadingState(newLoadingState) {
      this.$store.commit("setIsLoading", newLoadingState);
    },
    updateStudentInfor(newStudentInfor) {
        this.studentInfor = {...newStudentInfor}
    },
    getStudentInfor() {
      let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
      this.changeLoadingState(true);
      FetchApiWithCustomHeader(
        StudentAPI.GetStudentInfor + `/${this.$route.params.id}`,
        Method.GET,
        {
          Content_Type: ContentType.JSON,
          Authorization: `${tokenType} ${token}`,
        },
        null,
        null,
        (response) => {
          if (response.result === "OK") {
            this.updateStudentInfor(response.data)
          } else {
            // do something
          }
          this.changeLoadingState(false);
        }
      );
    },
  },
  data() {
    return {
      studentInfor: {},
    };
  },
};
</script>

<style scoped>
img.ava {
  width: 200px;
  height: 200px;
  margin: 3rem 3rem 2rem 4rem;
}

div.personal_info {
  padding-top: 2rem;
}

div.personal_info p {
  padding-left: 2rem;
}

div.parent_info p {
  padding-left: 2rem;
}
</style>
