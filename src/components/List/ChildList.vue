<template>
  <div>
    <button
      type="button"
      id="account"
      v-for="acc in listChild"
      :key="acc"
      :class="changeButtonClass(acc.studentId)"
      v-on:click="updateSelectedStudent(acc.studentId)"
    >
      <img id="avatar" class="rounded-circle" :src="acc.avatar" />
      <p class="text-center" id="navbardrop" data-toggle="">
        {{ acc.fullName }}
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Account",
  props: {
    listChild: Array,
  },
  watch: {
    $route: function (newVal, oldVal) {
      this.updateSelectByPath();
    }
  },
  mounted() {
    this.updateSelectByPath()
  },
  methods: {
    updateSelectedStudent(id) {
      this.selectedStudentId = id;
      this.$emit("updateSelectedStudent", id);
    },
    changeButtonClass(id) {
      this.updateSelectByPath()
      if (this.selectedStudentId == id) {
        return "btn btn-light d-inline-flex choosen";
      } else {
        return "btn btn-light d-inline-flex";
      }
    },
    updateSelectByPath() {
      let curPath = window.location.href;
      let id = curPath.split('/').pop()
      this.listChild.forEach((item) => {
        if (id == item.studentId) {
          this.selectedStudentId = item.studentId
        }
      });
    },
  },
  data() {
    return {
      selectedStudentId: 0
    };
  },
};
</script>

<style scoped>
#account {
  width: 100%;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}

#account p {
  margin: 1rem 0.5rem;
  text-align: center;
}

#avatar {
  width: 60px;
  height: 60px;
}

.choosen {
  background-color: #4caf50 !important;
}
</style>
