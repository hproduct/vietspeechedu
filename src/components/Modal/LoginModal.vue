<template>
  <div class="modal-bg" @click.self="onClickCloseModal()">
    <div class="modal-dialog modal-dialog-centered modal modal-child modal-dialog-scrollable" id="LoginModal">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <p> <!--headder--> </p>
          <button class="btn btn-secondary" @click="onClickCloseModal()">
            &times;
            <!-- close symbol -->
          </button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div>
            <img src="../../assets/logo2.png" alt="VietSpeech School" style="width: 100%" />
          </div>
          <h5 class="align-middle text-center padding-top-30">ĐĂNG NHẬP</h5>
          <form @submit.prevent="onClickLoginButton">
            <div class=" mb-3">
              <label for="username">Username:</label>
              <input v-model.trim="username" id="username" type="text" required class="form-control" />
            </div>
            <div class=" mb-3">
              <label for="password">Password:</label>
              <input v-model.trim="password" id="password" type="password" required class="form-control" />
            </div>
            <div class="errorMSG">
              {{this.errorLogin}}
            </div>
            <div>
              <button type="submit" class="btn btn-info" style="
                  width: 80%;
                  margin-left: 10%;
                  margin-top: 20px;
                  margin-bottom: 10px;
                ">
                Đăng Nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FetchApi } from "@/api/APIFetch";
import { CommonAPI, ContentType, Method } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import router from "@/router/Router";

export default {
  name: "LoginModal",
  components: {},
  methods: {
    onClickCloseModal() {
      this.$emit("onclose");
    },

    onClickLoginButton() {
      this.callLoginAPI(this.username, this.password);
    },
    changeLoadingState(newLoadingState) {
      this.$store.commit("setIsLoading", newLoadingState);
    },
    callLoginAPI(user, pass) {
      this.changeLoadingState(true);
      document.getElementsByTagName("body")[0].classList.add("modal-open");
      FetchApi(
        CommonAPI.Login,
        Method.POST,
        ContentType.JSON,
        {
          username: user,
          password: pass,
        },
        null,
        (data) => {
          if (data.result === "OK") {
            this.changeLoadingState(true);
            this.$cookies.set(LocalStorageKey.TOKEN_KEY, data.data.token, Infinity)
            this.$cookies.set(LocalStorageKey.TOKEN_TYPE_KEY, data.data.type, Infinity)
            this.$cookies.set(LocalStorageKey.ROLES_KEY, data.data.role, Infinity)
            this.$cookies.set(LocalStorageKey.ACC_NAME, data.data.userName, Infinity)
            this.$cookies.set(LocalStorageKey.ACC_ID, data.data.accountId, Infinity)
            this.$cookies.set(LocalStorageKey.ACC_AVATAR, data.data.avatar, Infinity)
            switch (data.data.role.roleName) {
              case "PARENT": {
                router.push({ path: "parent" });
                break;
              }
              case "ADMIN": {
                router.push({ path: "admin" });
                break;
              }
              case "TEACHER": {
                router.push({ path: "teacher" });
                break;
              }
            }
          } else {
            console.log(data.errorMessage)
            this.errorLogin = data.errorMessage

          }
          this.changeLoadingState(false);
        }
      );
    },
  },
  data() {
    return {
      username: "",
      password: "",
      errorLogin: "",
    };
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.padding-top-30 {
  padding-top: 30px;
}
.errorMSG{
  color: red;
}
</style>
