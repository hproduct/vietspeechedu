<template>
  <div class="modal-bg" @click.self="emitCloseSignal()">
    <div class="modal-child">
      <div class="modal-header">
        <h3>{{this.title}}</h3>
        <button class="btn btn-secondary" @click="emitCloseSignal()">
          <svg
            style="color: black"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>

      <form action="#" v-on:submit.prevent="submitCreateRequest">
        <div class="form-group">
          <input
            v-model.trim="titleRequest"
            required
            :disabled="requestProp.requestTitle!= null"
            type="text"
            class="form-control"
            id="title_id"
            placeholder="Title ..."
          />
        </div>
        <div class="form-group">
          <textarea
            v-model.trim="descRequest"
            required
            :disabled = "requestProp.requestTitle != null"
            class="form-control"
            id="description_id"
            rows="5"
            placeholder="Description ..."
          ></textarea>
        </div>
        <div class="modal-footer">
          <button type="submit" class="btn btn-light-blue" v-show="requestProp.requestTitle == null">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { Method, ParentAPI, ContentType } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";

export default {
  name: "CreateRequest",
  props: {
    requestProp: {},
  },
  watch: {
    requestProp: function (val, newVal) { 
      if (val.requestContent != null && val.requestTitle != null || val.requestContent != "" && val.requestTitle != "") {
        this.titleRequest = val.requestTitle;
        this.descRequest = val.requestContent;
        this.title = "Chi tiết yêu cầu" 
      } else {
        this.titleRequest = '';
        this.descRequest = '';
        this.title = "Thêm yêu cầu" 
      }
    },
  },
  methods: {
    emitCloseSignal() {
      this.$emit("closeModal",false);
    },

    submitCreateRequest(e) {
      this.createParentRequest();
    },

    updateIsLoading(newLoadingState) {
      this.$store.commit("setIsLoading", newLoadingState);
    },

    createParentRequest() {
      let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
      let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
      console.log(this.titleRequest + " " + this.descRequest);
      this.updateIsLoading(true);
      FetchApiWithCustomHeader(
        ParentAPI.CreateParentRequest + `/${this.$route.params.id}`,
        Method.POST,
        {
          Content_Type: ContentType.JSON,
          Authorization: `${tokenType} ${token}`,
        },
        {
          requestTitle: this.titleRequest,
          requestContent: this.descRequest,
        },
        null,
        (response) => {
          if (response.result === "OK") {
            this.$emit("closeModal",true);
          } else {
            // do something
          }
          this.updateIsLoading(false);
        }
      );
    },
  },
  data() {
    return {
      titleRequest: this.requestProp.requestTitle,
      descRequest: this.requestProp.requestContent,
      title: "Thêm yêu cầu"
    };
  },
};
</script>

<style scoped>
.modal-bg {
  /* let modal the only thing user can touch */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* background of modal */
  background-color: rgba(100, 100, 100, 0.4);

  /* center modal */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-child {
  /* size and position */
  width: 800px;
  /* style the modal */
  background-color: white;
  display: block !important;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.modal-header {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* line separate body and head */
  border-bottom: 1px dashed #000000;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

h3 {
  margin-bottom: auto;
  margin-top: auto;
  margin-left: 10px;
}

.modal-header > .btn-secondary {
  border-radius: 5px;
  margin: 5px;
  border: none;
  --bs-btn-bg: #d9d9d9;
}

.form-group {
  margin: 10px;
}

/* modal footer save button */
.modal-footer {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px;
}

.btn-light-blue {
  --bs-btn-color: #000;
  --bs-btn-bg: rgba(24, 166, 227, 0.2);
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: rgba(24, 166, 227, 0.4);
  --bs-btn-hover-border-color: #c6c7c8;
  --bs-btn-focus-shadow-rgb: 211, 212, 213;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: rgba(24, 166, 227, 0.7);
  --bs-btn-active-border-color: #1884e3;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #000;
  --bs-btn-disabled-bg: #90ddf0;
  --bs-btn-disabled-border-color: #bdd8df;
}
</style>
