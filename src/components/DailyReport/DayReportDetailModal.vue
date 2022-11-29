<template>
  <div class="modal-bg" @click.self=" onClickCloseModal()">
    <div
      class="modal-dialog modal-dialog-centered modal modal-lg modal-child"
      id="LoginModal"
    >
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5>Báo cáo ngày{{reportProp.createdDate}}</h5>
          <button class="btn btn-secondary" v-on:click="onClickCloseModal()">
            &times;
          </button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <div class="text-area">
            <p class="title">Tích cực:</p>
            <div>
              <p>
                  {{ this.report.positivePoint || 'Không có' }}
              </p>
            </div>
          </div>
          <div class="text-area">
            <p class="title">Cần cải thiện:</p>
            <div>
              <p>
                {{ this.report.needToImprove || 'Không có'}}
              </p>
            </div>
          </div>
          <div class="container">
            <p class="text-center bolder">Nhận xét học bán trú:</p>
            <div class="col-12 d-inline-flex">
              <div class="col-7 padding-left-30">
                <p>Sức khỏe: {{ this.report.health }}</p>
                <p>Ăn uống: {{ this.report.eating }}</p>
                <p>Giấc ngủ: {{ this.report.sleep }}</p>
              </div>
              <div class="col-5">
                <p>Đi vệ sinh: {{ this.report.timesToWC }} lần</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DayReportDetailModal",
  props: {
    reportProp: {}
  },
  methods: {
    onClickCloseModal() {
      this.$emit("onclose");
    },
    onClickLoginButton(username, password) {
      this.$emit("onclickloginButton", username, password);
    },
  },
  components: {},
  data() {
    return {
      report : this.reportProp
    }
  }
};
</script>

<style scoped>
.modal-child {
  width: 800px;
}
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
.text-center {
  text-align: center;
}

.modal-header > .btn-secondary {
  border-radius: 5px;
  margin: 5px;
  border: none;
  --bs-btn-bg: #d9d9d9;
}

.padding-left-30 {
  padding-left: 30px;
}

.text-area {
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  margin-bottom: 2rem;
}

p.title {
  border-bottom: 1px solid #ccc;
}

.bolder {
  font-weight: bold;
}
</style>
