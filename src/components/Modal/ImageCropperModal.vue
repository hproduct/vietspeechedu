<template>
  <div>
    <div class="modal-dialog modal-dialog-centered modal" id="LoginModal">
      <div class="modal-content">
        <div class="modal-header">
          <h4>Cập nhật ảnh</h4>
          <button
            type="button"
            class="float-right btn btn-light"
            v-on:click="onClickCloseModal()"
          >
            &times;
          </button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <div>
            <div class="image_container">
              <img :src="imageSrc" ref="img" />
            </div>
            <div class="slider">
              <input
                type="range"
                min="1"
                max="100"
                id="myRange"
                v-model="sliderValue"
                @change="sliderChange"
              />
              <br />
              <span class="tooltiptext">Giá trị phóng đại: {{this.sliderValue}}%</span>
            </div>
          </div>
          <div></div>
        </div>
        <div class="modal-footer">
          <div style = "margin-right: 5%; color: crimson; " class = "float-left"> Dung lượng ảnh tối đa là 5mb</div>
          <button @click="imageInput.click()" class="btn btn-light">
            Chọn ảnh
          </button>
          <button @click="getCropedImage()" class="btn btn-success" :disabled = "false">Lưu</button>
          <input
            type="file"
            ref="imageInput"
            accept=".jpg,.jpeg,.png"
            @change="fileChanged"
            :style="{ display: 'none' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watchEffect, watch, toRef } from "vue";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "ImageCropperModal",
  props: {
    defaultImage : {
      type: String,
      required: true
    },
  },
  setup(props, { emit }) {
    let imageSrc = ref(props.defaultImage);
    const sliderValue = ref(1);
    const imageInput = ref(null);
    const selectedFile = ref(null);
    const img = ref(null)
    const fileReader = new FileReader();
    let cropper = null;

    const onClickCloseModal = () => {
      emit("onclose");
    };

    onMounted(() => {
        cropper = new Cropper(img.value, {
            aspectRatio: 1,
            viewMode: 3,
            minContainerHeight: 300,
            minContainerWidth: 300,
            minCropBoxHeight: 300,
            minCanvasWidth: 300,
            dragMode: 'move',
            background: false,
            cropBoxMovable: false,
            cropBoxResizable: false
        })
    })

    onUnmounted(() => {
        cropper.destroy()
    })

    fileReader.onload = (event) => {
        imageSrc.value = event.target.result
    }

    const fileChanged = (e) => {
      const files = e.target.files || e.dataTransfer.files;
      if (files.length) {
        if (files[0].size > 5242880) {
            console.log("File size qúa lớn, vui lòng chỉ sử dụng ảnh tối đa là 5mb")
        } else {
            selectedFile.value = files[0];
            sliderValue.value = 1;
        }
      }
    };

    const sliderChange = (e) => {
        sliderValue.value = e.target.value
    }

    watchEffect(() => {
        if (selectedFile.value) {
            fileReader.readAsDataURL(selectedFile.value)
        }
    })

    watch(
        imageSrc,
        () => {
            if (imageSrc.value) {
                cropper.replace(imageSrc.value)
            }
        },{
            flush: 'post'
        }
    )

    watch(
        sliderValue,
        () => { 
          if (sliderValue.value) {
            cropper.scale(sliderValue.value / 100, sliderValue.value / 100)
          }
        },{
          flush: 'post'
        }
    )

    const getCropedImage = (_) => {
        let croppedCanvas = cropper.getCroppedCanvas(
          {
            width: 256,
            height: 256
          }
        )
        croppedCanvas.toBlob((blob) => {
          emit('getCroppedImage',blob)
        }, 'image/jpeg') 
    }

    return {
      imageInput,
      selectedFile,
      fileChanged,
      imageSrc,
      img,
      sliderValue,
      sliderChange,
      getCropedImage,
      onClickCloseModal
    };
  },
  methods: {
    rangeValFunc(rangeVal) {
      var rangeWidth = (document.getElementById("tooltiptext").textContent = rangeVal + "cm");
      document.getElementById("tooltiptext").style.left =
        "calc(" + rangeVal + "% - 50px)";
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.modal_header img {
  float: right;
}

.modal_header {
  display: block;
}

.padding-top-30 {
  padding-top: 30px;
}

.image_container {
  width: 300px;
  height: 300px;
  margin: auto;
}

.image_container img {
  width: 300px;
  height: 300px;
}

.slider {
  width: 66%;
  margin: auto;
  margin-top: 10px;
}

.slider input {
  width: 310px;
  height: 4px;
}
</style>
