<template>
  <MenuList :listNav="listScreen" v-on:onMenuSelected="onSelectMenu"></MenuList>
  <router-view />
</template>

<script>
import MenuList from "../../../components/List/MenuList.vue";
import { ListScreen } from "../../../constant/ListScreen";

export default {
  name: "StudentView",
  props: {
    studentID : 0,
  },
  watch: {
    studentID: function (newVal, oldVal) {
      this.listScreen = this.generateStudentViewMenu()
    },
  },
  components: {
    MenuList
  },
  methods: {
    generateStudentViewMenu() {
      return [
        { id: 1, message: 'Báo cáo ngày', path: `/parent/day-report/${this.studentID}`, isSelected: false },
        { id: 2, message: 'Báo cáo quá trình can thiệp', path: `/parent/intervention-plan-report/${this.studentID}`, isSelected: false },
        { id: 3, message: 'Kế hoạch can thiệp', path: `/parent/intervention-plan/${this.studentID}`, isSelected: false },
        { id: 4, message: 'Các nhu cầu của trẻ', path: `/parent/parent-request/${this.studentID}`, isSelected: false },
      // need to have function to set date
        { id: 5, message: 'Lịch học', path: `/parent/student-scheduler/${this.studentID}`, isSelected: false },
        { id: 6, message: 'Đánh giá trẻ', path: `/parent/assessment-report/${this.studentID}`, isSelected: false },
        { id: 7, message: 'Thông tin cá nhân', path: `/parent/student-info/${this.studentID}`, isSelected: false },
        { id: 8, message: 'Học phí', path: `/parent/student-fee`, isSelected: false },
      ]
    }
  },
  created() {
    this.listScreen = this.generateStudentViewMenu()
  },
  data() {
    return {
      listScreen: [],
    };
  },
};
</script>

<style>

</style>
