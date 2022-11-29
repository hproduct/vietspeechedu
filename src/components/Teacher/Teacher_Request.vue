<template>
    <div id="main_screen_tab3">
        <h4 class="col-8" style="display: inline-block;">Các yêu cầu từ phụ huynh : </h4>

        <div id="RequestBoard">
            <div v-for="card in listRequest" :key="card" class="card" >
                <div class="card-header">{{ card.requestTitle }}</div>
                <div class="card-body">{{ card.requestContent }}</div>
                <div class="card-footer">
                    {{ card.createdDate }}
                </div>
            </div>
        </div>
        <Paging id="paging" :totalPage="this.totalPage" v-show="this.isShowPaging" v-on:onClickToPage="onClickToPage"></Paging>
    </div>
</template>

<script>
import Paging from '../Paging.vue';
import { FetchApiWithCustomHeader } from "@/api/APIFetch";
import { Method, StudentAPI, ContentType } from "@/api/ListAPI";
import { LocalStorageKey } from "@/constant/LocalStorageKey";

export default {
    name: "TeacherRequest",
    components: { Paging },
    debug: true,
    state: {

    },
    methods: {
        updateIsLoading(newLoadingState) {
            this.$store.commit("setIsLoading", newLoadingState);
        },

        updateTotalPage(newTotalPage) {
            if (newTotalPage == 1) {
                this.isShowPaging = false
            }
            else {
                this.isShowPaging = true
                this.totalPage = newTotalPage;
            }
        },

        onClickToPage(pageIndex) {
            this.getParentRequestOfStudent(pageIndex);
        },

        updateListRequest(data) {
            this.listRequest = [...data]
        },

        getParentRequestOfStudent(pageIndex) {
            let tokenType = this.$cookies.get(LocalStorageKey.TOKEN_TYPE_KEY);
            let token = this.$cookies.get(LocalStorageKey.TOKEN_KEY);
            this.updateIsLoading(true);
            FetchApiWithCustomHeader(
            StudentAPI.GetListParentRequest +`/${this.$route.params.id}/${pageIndex}/3`,
            Method.GET,
            {
                Content_Type: ContentType.JSON,
                Authorization: `${tokenType} ${token}`,
            },
            null,
            null,
            (response) => {
                if (response.result === "OK") {
                    this.updateListRequest(response.data.resultList);
                    this.updateTotalPage(response.data.totalPage);
                } else {
                    // do something
                 }
                this.updateIsLoading(false);
            });
        }
    },
    created() {
        this.getParentRequestOfStudent(0)
    },
    data() {
        return {
            listRequest: [],
            totalPage: 0,
            isShowPaging: false
        }
    }
};
</script>

<style scoped>
#main_screen_tab3 {
    width: 100%;
    padding: 20px;
}

.card-header {
    font-weight: bold;
}

.card-header {
    width: 100%;
}

.card-footer {
    width: 100%;
}

.card {
    width: 95%;
    height: 50%;
    margin: 20px;
}

#RequestBoard {
    position: relative;
    margin-top: 10px;
}

.card:hover {
    cursor: pointer;
}

</style>
