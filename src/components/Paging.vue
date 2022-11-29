<template>
  <div class="center">
    <div class="pagination">
      <button @click="moveBackWardToSubPage()" v-if = "this.currentPage > 1">
        &laquo;
      </button>
      <div v-for="paging in listOfPage" :key="paging" class="inside">
        <button
          @click="onClickToPage(paging)"
          :class="this.currentPage == paging ? 'active' : ''"
        >
          {{ paging }}
        </button>
      </div>
      <button
        v-if = "this.currentPage < this.totalPage" 
        @click="moveForwardToSubPage()"
      >
        &raquo;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PagingView",
  props: {
    totalItem: 0,
    totalPage: 0,
    currentPage: 0,
  },
  watch: {
    totalPage: function (newVal, oldVal) {
      this.listOfPage = this.initListPaging();
    },
    currentPage: function (newVal, oldVal) {
      this.listOfPage = this.initListPaging();
    }
  },
  created() {
    this.subPagesNumber = this.getSubPage();
    this.listOfPage = this.initListPaging();
  },
  methods: {
    onClickToPage(pagingIndex) {
      if (this.currentPage !== pagingIndex) {
        this.$emit("onClickToPage", pagingIndex);
      }
    },
    moveForwardToSubPage() {
      this.$emit("onClickToPage", parseInt(this.currentPage) + 1);
    },
    moveBackWardToSubPage() {
      this.$emit("onClickToPage", this.currentPage - 1);
    },
    initListPaging() {
      let currentSubPage = Math.floor(this.currentPage / 5)
      if (this.currentPage % 5 !== 0) {
        currentSubPage += 1
      }
      let startIndex = (currentSubPage - 1) * 5 + 1
      let endIndex = currentSubPage * 5;
      if (endIndex > this.totalPage) {
        endIndex = this.totalPage
      }
      let list = []
      for (let i = startIndex; i <= endIndex; i++) {
          list.push(i);
        }
      return list;
    },
    getSubPage() {
      return Math.ceil(this.totalPage / 5);
    },
  },
  data() {
    return {
      listOfPage: [],
      subPagesNumber: 0,
      currentSubPages: 1,
    };
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}

.pagination {
  display: inline-flex;
  margin: 0 auto;
}

.inside {
  display: inline-block;
}

button {
  border-radius: 4px;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  margin: 0 4px;
}

.pagination button.active {
  background-color: #4caf50;
  color: white;
  border: 1px solid #4caf50;
}
</style>
