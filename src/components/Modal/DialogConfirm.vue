<template>
    <div class="modal-bg" @click.self="onClickCloseModal()">
        <div class="modal-dialog modal-dialog-centered modal modal-child modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-between">
                    <h5>{{ Title }}</h5>
                    <button class="btn btn-secondary" @click="onClickEventModal(false)">
                        &times;
                    </button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <p>{{content}}</p>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button type="button" @click="onClickEventModal(false)" class="btn btn-danger col-3 text-center"> Hủy bỏ</button>
                    <button type="button" @click="onClickEventModal(true)" class="btn btn-primary col-3 text-center"> Đồng ý</button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ConfirmDialog",
    methods: {
        //if event == true, is mean yes, event == false is mean no or close
        onClickEventModal(event) {
            this.$emit('onClickEventModal', event)
        },
        
    },
    props: {
        Title: String,
        content: String,

    }, components: {

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

.modal-header>.btn-secondary {
    border-radius: 5px;
    margin: 5px;
    border: none;
    --bs-btn-bg: #d9d9d9;
}

.padding-left-30 {
    padding-left: 30px;
}

.input-area {
    border-radius: 10px;
    padding: 0.5rem 1rem 0.5rem 1rem;
    margin-bottom: 1rem;
}

p.title {
    border-bottom: 1px solid #ccc;
}

.bolder {
    font-weight: bold;
}

div.border {
    border: 1px solid #ccc;
    padding: 5px 10px;
}

div.border p {
    margin: auto;
}

.customs-input {
    display: inline-block;
    padding: 5px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
}

.w-100px {
    width: 100px;
}
</style>