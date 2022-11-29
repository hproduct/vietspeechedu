<template>
  <div>
    <div class="modal-dialog modal-dialog-centered modal modal-lg" id="LoginModal">
      <div class="modal-content">
        <div class="modal-header d-flex justify-content-between">
          <h5>Báo cáo ngày</h5>
          <button type="button float-right" v-on:click="onClickCloseModal()">&times;</button>

        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <div class="text-area">
            <p class="title">Tích cực:</p>
            <div>
                <p>- abcd <br>
                    - 12345678901<br>
                    - abcdefght<br>
                    -1234
                </p>
            </div>
        </div>
        <div class="text-area">
            <p class="title">Cần cải thiện:</p>
            <div>
                <p>- abcd <br>
                    - 12345678901<br>
                    - abcdefght<br>
                    -1234
                </p>
            </div>
        </div>
        <div class="container">
            <p class="text-center bolder">Nhận xét học bán trú:</p>
            <div class="col-12 d-inline-flex">
                <div class="col-7 padding-left-30">
                    <p>Sức khỏe: Khỏe mạnh</p>
                    <p>Ăn uống: Ngon miệng</p>
                    <p>Giấc ngủ: Ngủ ngoan</p>
                </div>
                <div class="col-5">
                    <p>Đi vệ sinh: 2 lần</p>
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
  name: "ParentModal",
  methods: {
    onClickCloseModal() {
      this.$emit('onclose')
    },
    onClickLoginButton(username, password) {
      this.$emit('onclickloginButton', username, password)
    },
  },
  props: {

  },components:{
    
  }
};
</script>

<style>
.text-center {
  text-align: center;
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
