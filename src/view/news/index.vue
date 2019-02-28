<!--
 * @Author: yongwei.hou
 * @LastEditors: yongwei.hou
 * @Description: 新闻资讯首页
 * @Date: 2019-02-26 14:02:50
 * @LastEditTime: 2019-02-26 17:14:54
 -->
<template>
  <div>
    <sticky  :check-sticky-support="false" >
      <tab>
        <tab-item
          v-for="(item,index) in newsTagList"
          :key="index"
          :selected="item.Code===tagIndex"
          @on-item-click="tabHandler"
        >{{item.Name}}</tab-item>
      </tab>
    </sticky>
    <panel :list="newsList" type="5"></panel>
  </div>
</template>

<script>
import { Tab, TabItem,Sticky, Panel,dateFormat } from "vux";
import { getNewsTag, getNewsList } from "@/api/news";
import { beautySub } from "@/utils/index";
import axios from "axios";
export default {
  components: {
    Tab,
    TabItem,
    Panel,
    Sticky
  },
  data() {
    return {
      newsList: [],
      pageEntity: {
        pageIndex: 1,
        pageSize: 10,
        tagCode: ""
      },
      tagIndex: "1",
      newsTagList: []
    };
  },
  mounted() {
    this.setNewsTag();
  },
  methods: {
    // 绑定资讯标签列表
    setNewsTag() {
      getNewsTag()
        .then(response => {
          this.newsTagList = response.TagList;
          this.pageEntity.tagCode =this.tagIndex;
        })
        .then(response => {
          this.setNewsList();
        })
        .catch(err => {
          this.$vux.toast.text(err);
        });
    },
    // 绑定资讯列表
    setNewsList() {
      this.newsList = [];
      getNewsList(this.pageEntity)
        .then(response => {
          response.List.forEach(item => {
            let itemEntity = {};
            itemEntity.src = this.$weburl + item.SmallImg;
            itemEntity.title = item.Title;
            itemEntity.desc = item.Title;
            let meta = {};
            meta.date = dateFormat(new Date(item.CreateDate), "YYYY-MM-DD");
            meta.source = beautySub(item.tagNames, 5);
            meta.other = "共" + item.ViewTimes + "人阅读";
            itemEntity.meta = meta;
            this.newsList.push(itemEntity);
          });
        })
        .catch(err => {
          this.$vux.toast.text(err);
        });
    },
    // tab切换事件
    tabHandler(index) {
      this.pageEntity.tagCode = this.newsTagList[index].Code;
      this.setNewsList();
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/less/user.less");
</style>

