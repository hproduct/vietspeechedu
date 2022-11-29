<template>
  <div id="main_screen_tab3" v-show="!this.$store.state.isLoading">
    <h4 class="col-8" style="display: inline-block">Các yêu cầu đã tạo :</h4>
    <button
      @click="openCreateRequest()"
      type="button"
      class="btn btn-light float-right"
      style="display: inline-block"
    >
      + Tạo yêu cầu
    </button>

    <div id="RequestBoard">
      <div v-for="card in listRequest" :key="card" class="card">
        <div class="card-header">{{ card.requestTitle }}</div>
        <div class="card-body">{{ card.requestContent }}</div>
        <div class="card-footer">
          {{ card.createdDate }}
          <button type="button" @click="openUpdateRequest(card)" class="btn btn-light float-right col-3">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
    <ParentCreateRequestVue
      v-model:requestProp="this.selectedRequest"
      v-show="this.isCreateRequest"
      v-on:closeModal="closeCreateRequest"
    />
    <Paging
      :totalPage="this.totalPage"
      :currentPage="this.currentPage"
      v-if="true"
      v-on:onClickToPage="moveToPage"
      id="paging"
    ></Paging>
  </div>
</template>

<script>
import ParentCreateRequestVue from "@/components/Parent/Request/ParentCreateRequest.vue";
import Paging from "@/components/Paging.vue";
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { Method, StudentAPI, ContentType } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import router from "@/router/Router";

export default {
  name: "Request",
  components: {
    ParentCreateRequestVue,
    Paging,
  },
  created() {
    this.getListRequest();
  },
  methods: {
    updateIsLoading(loadingState) {
      this.$store.commit('setIsLoading',loadingState)
    },
    
    moveToPage(pageIndex) {
      this.currentPage = pageIndex
      this.getListRequest()
      router.push({ path: `/parent/parent-request/${this.$route.params.id}`, query : { page: pageIndex } } )
    },

    updateTotalPage(newTotalPage) {
      if (newTotalPage == 1) {
        this.isShowPaging = false;
      } else {
        this.isShowPaging = true;
        this.totalPage = newTotalPage;
        this.initCurrentPage()
      }
    },

    updateListRequest(newListRequest) {
      this.listRequest = [...newListRequest];
    },

    closeCreateRequest(isAdd) {
      this.selectedRequest = {}
      this.isCreateRequest = false;
      var body = document.body;
      body.classList.remove("modal-open");
      if (isAdd) {
        this.getListRequest()
      }
      else {
        //do nothing
      }
    },

    openUpdateRequest(request) {
      this.selectedRequest = {...request}
      this.isCreateRequest = true;
      var body = document.body;
      body.classList.add("modal-open");
    },

    openCreateRequest() {
      this.selectedRequest = {};
      this.isCreateRequest = true;
      var body = document.body;
      body.classList.add("modal-open");
    },
    
    updateTotalPage(newTotalPage) {
      if (newTotalPage == 0) {
        this.isShowPaging = false
      }
      else {
        this.isShowPaging = true
        this.totalPage = newTotalPage;
        this.initCurrentPage()
      }
    },

    initCurrentPage() {
      if (this.$route.query.page !== "0" && this.$route.query.page > 0  && this.$route.query.page <= this.totalPage) {
          this.currentPage = this.$route.query.page
      } else {
          moveToPage(1)
      }
    },

    getListRequest() {
      let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
      this.updateIsLoading(true);
      if (isNaN(this.currentPage)) {
        this.moveToPage(1)
      } else {
        FetchApiWithCustomHeader(
          StudentAPI.GetListParentRequest + `/${this.$route.params.id}/${this.currentPage - 1}/3`,
          Method.GET,
          {
            Content_Type: ContentType.JSON,
            Authorization: `${tokenType} ${token}`,
          },
          null,
          null,
          (response) => {
            if (response.result === "OK" && response.totalPage != 0) {
              this.updateListRequest(response.data.resultList);
              this.updateTotalPage(response.data.totalPage);
            } else {
              if (response.errorMessage === "No data in list!") {
                this.moveToPage(1)
              }
            }
            this.updateIsLoading(false);
          }
        );
      }
    },
  },

  data() {
    return {
      selectedRequest: {},
      totalPage: 0,
      currentPage: this.$route.query.page || 1,
      listRequest: [],
      isCreateRequest: false,
      isShowPaging: false,
    };
  },
};
</script>

<style scoped>
#main_screen_tab3 {
  width: 100%;
  padding: 20px;
}

.card-header {
  font-weight: bold;
}

.card-header {
  width: 100%;
}

.card-footer {
  width: 100%;
}

.card {
  width: 95%;
  margin: 20px;
}

#RequestBoard {
  position: relative;
  margin-top: 10px;
}

#paging {
  margin-top: 50px;
}

button {
  background: #4caf50;
}
</style>
