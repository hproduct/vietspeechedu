<template>
    <MenuList :listNav="listScreen" ></MenuList>
    <router-view />
</template>
<script>
import MenuList from '@/components/List/MenuList.vue';
import { ListScreen } from '@/constant/ListScreen';

export default {
  name: "StudentDetail",
  components: {
    MenuList
  },
  methods: {
    onSelectMenu() {},
  },
  data() {
      return {
        listScreen: ListScreen.studentDetailList,
      };
    },
};
</script>
<style scoped>

</style>