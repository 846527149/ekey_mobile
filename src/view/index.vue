<!--
 * @Author: yongwei.hou
 * @LastEditors: yongwei.hou
 * @Description: 首页
 * @Date: 2019-02-22 17:37:39
 * @LastEditTime: 2019-02-28 18:04:20
 -->

<template>
  <div>
    <div class="index_banner">
      <swiper :list="bannerList"></swiper>
    </div>
    <div class="index_menu">
      <grid :cols="4" :show-vertical-dividers="false" :show-lr-borders="false">
        <grid-item v-for="(item,index) in menuList" :key="index" :link="item.url">
          <img slot="icon" :src="item.img">
          <span slot="label">{{item.title}}</span>
        </grid-item>
      </grid>
    </div>
    <div class="index_tip">
      <flexbox>
        <flexbox-item :span="3">
          <div class="index_tip_item">
            <img src="/static/images/ic_adver_hot.png">
            中心动态
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="index_tip_item">中心动态新闻定于201中心动态新闻定于201902第三方12342342345902第三方12342342345..</div>
        </flexbox-item>
        <flexbox-item :span="2">
          <div class="index_tip_item">| 更多</div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import { Swiper, Grid, GridItem, Flexbox, FlexboxItem } from "vux";
import bannerData from "../../src/data/data_banner.json";
import menuData from "../../src/data/data_menu.json";

export default {
  components: {
    Swiper,
    Grid,
    GridItem,
    Flexbox,
    FlexboxItem
  },
  data() {
    return {
      bannerList: [],
      menuList: []
    };
  },
  mounted() {
    this.setBannerList();
  },
  methods: {
    // 首页bannerlist赋值
    setBannerList() {
      this.bannerList = bannerData.banner;
      this.menuList = menuData.menu;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../assets/less/_mixins/_mixins.less");
.index_banner {
  height: 4.6133rem;
}
.index_menu {
  background: #fff;
}
.index_tip {
  margin-top: 0.2667rem;
  background: #fff;
  height: 1.0667rem;
  line-height: 1.0667rem;
  .font-dpr(14px);
  padding-left: 0.4rem;
  .index_tip_item {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    img {
      width: 0.2933rem;
      height: 0.4rem;
      vertical-align: middle;
    }
  }
}
</style>
