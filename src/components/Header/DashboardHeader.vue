<template>
    <div id="Header">
        <nav id="navBar" class="navbar  navbar-expand-sm ">
            <!-- Logo -->
            <a class="navbar-brand col-4 inline" href="/">
                <img src="@/assets/logo2.png" alt="VietSpeech School" style="width:250px;">
            </a>
            <!-- <p style="width: 10px;background-color: red;">{{ $route.path }}</p> -->
            <!-- Links -->
            <ul class="col-8 navbar-nav inline">
                <div class="col-9 d-flex justify-content-around inline">
                    <li class="align-self-center nav-item" v-for="item in listHeader" :key="item">
                        <a>{{ item.message }}</a>
                    </li>
                </div>
                <!-- Dropdown -->
                <div class="col-3 nav-item dropdown">
                    <button class="btn btn-ligh  d-inline-flex"
                        @click="showAccountDropdown = !showAccountDropdown">
                        <img id="avatar" class="rounded-circle" :src="this.avatar" />
                        <a class=" nav-link text-center dropdown-toggle" href="#" id="navbardrop"
                            data-toggle="dropdown">{{ Name }}</a>
                    </button>
                    <div v-show="showAccountDropdown" class="dropdownList">
                        <a class="text-center" @click="this.chooseInformation()">Tài khoản</a>
                        <a class="text-center" @click="this.changePassword()">Đổi mật khẩu</a>
                        <a class="text-center" @click="this.logout()">Đăng xuất</a>
                    </div>
                </div>
            </ul>
        </nav>
    </div>

</template>
<script>
import { LocalStorageKey } from '@/constant/LocalStorageKey';
import router from '@/router/Router';


export default {
    name: "DashboardHeader",
    methods: {
        chooseInformation() {
            router.push({ path: "/information" })
            this.showAccountDropdown = false
        },

        changePassword() {
            // do later
        },

        logout() {
            this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie))
            this.$store.commit('setIsLogin', false)
            router.push({ name: "home" })
        }
    },
    props: {
    },
    data() {
        return {
            listHeader: [{ message: 'Trang quản lý' }],
            Name: this.$cookies.get(LocalStorageKey.ACC_NAME),
            showAccountDropdown: false,
            avatar: this.$cookies.get(LocalStorageKey.ACC_AVATAR)
        }
    }
};
</script>

<style>
.dropdownList a {
    display: block;
    padding: 5px;
    font-size: 20px;
    text-decoration: none;
    color: black;
}

.dropdownList a:hover {
    background-color: aquamarine;
    color: black;
    cursor: pointer;
}

.dropdownList {
    position: absolute;
    background-color: white;
    width: 200px;
    padding: 10px;
    border-radius: 15px;
    border: #ccc 1px solid;
    z-index: 1;

}

#navBar {
    padding: 0px;
}

.inline {
    display: inline-block;
}

.navbar-brand {
    margin: 0 !important;
}

#navbar ul {
    display: inline-block;
}

#navBar li {
    justify-items: center;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
}

.padding0_5 {
    padding-top: 1.25rem;
}

#navBar li a {

    vertical-align: middle;
}

#avatar {
    width: 60px;
}
</style>
