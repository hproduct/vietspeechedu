<template>
    <div id="menuList" class="d-flex justify-content-center">
        <button v-for="item in list" :key="item" :class="{ select: item.isSelected }" @click="SelectTask(item, item.id)"
            type="button" class="btn">
            {{ item.message }}
        </button>
    </div>
</template>

<script>
import router from "@/router/Router";
export default {
    name: "MenuList",
    props: {
        listNav: [],
    },
    mounted() {
        this.updateSelectByPath();
    },
    watch: {
        listNav: function (newVal, oldVal) {
            this.list = newVal
        },
        $route: function (newVal, oldVal) {
            this.updateSelectByPath();
        }
  },
    methods: {
        SelectTask(main_item, item_id) {
            console.log('select item in Menulist');
            //change status is select of a nav bar
            this.$data.list.forEach(element => {
                element.isSelected = false;
            });
            main_item.isSelected = true;
            router.push({ path: main_item.path });
        },
        updateSelectByPath() {//update select nav bar by current href
            //get curent path from href
            let curPath = window.location.href;
            // change status of nav bar
            this.listNav.forEach((item) => {
                item.isSelected = false
                //compare if item path is contain in href path
                if(curPath.toUpperCase().includes(item.path.toUpperCase())){
                    console.log('we in'+item.path)
                    item.isSelected = true
                }
            })
        }

    },
    data() {
        return {
            list: this.listNav
        }
    }
};
</script>

<style scoped>
#menuList {
    padding: 5px 0px 5px 0px;
    width: 100%;
}

#menuList button {
    flex: 1;
    margin-left: 6.75px;
    margin-right: 6.75px;
    height: 3.5rem;
    background-color: white;
    color: black;
}

.select {
    background-color: #4caf50 !important;
}
</style>