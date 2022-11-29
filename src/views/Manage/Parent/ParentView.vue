<template>
  <div class="View">
    <div id="mainScreen">
      <div id="leftBlock" class="col-2">
        <ChildList
          :listChild="this.listStudent"
          v-on:updateSelectedStudent="updateSelectedStudent"
        ></ChildList>
      </div>
      <div id="rightBlock" class="col-10">
        <StudentView
          :studentID="this.selectedStudentId"
          v-show = "this.selectedStudentId != ''"
        ></StudentView>
      </div>
    </div>
    <Teleport to="body">
      <ParentModal
        class="parentModal"
        v-show="isShowParentModal"
        v-on:onclickloginButton="onclickloginButton"
        v-on:onclose="isShowParentModal = false"
      />
    </Teleport>
  </div>
</template>

<script>

import DashboardHeader from "@/components/Header/DashboardHeader.vue";
import MenuList from "@/components/List/MenuList.vue";


import ChildList from "@/components/List/ChildList.vue";
import StudentInfo from "@/components/StudentInfo.vue";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import StudentView from "./ParentChild.vue";
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { ContentType, Method, ParentAPI } from "@/api/ListAPI";
import ParentModal from "@/components/Modal/ParentModal.vue";
import router from "@/router/Router";

export default {
  name: "ParentView",
  components: {
    DashboardHeader,
    MenuList,
  
    ChildList,
    StudentInfo,
    StudentView,
    ParentModal,
  },
  watch: {
    $route: function (from, to) {
      
    },
  },
  created() {
    this.getStudentList();
  },
  methods: {
    updateSelectedStudent(studentId) {
      this.selectedStudentId = studentId;
      router.push( { path : `/parent/day-report/${studentId}` });
    },

    changMenuItemSelected(Selected) {
      this.MenuItemSelected = Selected;
    },

    changeLoadingState(loading) {
      this.$store.commit("setIsLoading", loading);
    },

    updateListStudent(newListStudent) {
      for (let i = 0; i < newListStudent.length; i++) {
        let student = newListStudent[i];
        this.listStudent.push(student);
      }
    },

    changMenuItemSelected(Selected) {
      this.MenuItemSelected = Selected;
    },

    //payload: id of account
    getStudentList() {
      let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
      let accId = this.$cookies.get(LocalStorageKey.ACC_ID);
      this.changeLoadingState(true);
      FetchApiWithCustomHeader(
        ParentAPI.GetListStudent + `/${accId}`,
        Method.GET,
        {
          Content_Type: ContentType.JSON,
          Authorization: `${tokenType} ${token}`,
        },
        null,
        null,
        (response) => {
          if (response.result === "OK") {
            this.updateListStudent(response.data);
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
      listStudent: [],
      MenuItemSelected: 0,
      searchStudentName: "",
      isShowParentModal: false,
      selectedStudentId: this.$route.params.id || ""
    };
  },
};
</script>

<style scoped>
#mainScreen div {
  display: inline-block;
}

#mainScreen {
  margin-top: 10px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
}

#leftBlock {
  padding: 0px 10px 0px 5px;
}

.dis-flex-col {
  display: flex !important;
  flex-direction: column;
}

#rightBlock {
  background-color: #e2e2e9;
  height: 800px;
  border-radius: 10px;
}

.student-nav-item {
  background-color: aqua;
}
.parentModal {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
}
</style>
