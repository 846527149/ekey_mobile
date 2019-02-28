<!--
 * @Author: yongwei.hou
 * @LastEditors: yongwei.hou
 * @Description:
 * @Date: 2019-02-22 17:37:39
 * @LastEditTime: 2019-02-27 19:02:48
 -->

<template>
  <div>
    <group>
      <x-input title="当前账号" v-model="customerName"></x-input>
    </group>
    <ul id="example-1">
      <li v-for="(item,index) in newsList" :key="index">{{ item.Title }}</li>
    </ul>
    <input
      type="file"
      @change="uploadImage"
      ref="inputer"
      multiple
      accept="image/png, image/jpeg, image/gif, image/jpg"
    >
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from "vux";
import { getNewsList } from "@/api/news";
import { getToken } from "@/utils/auth";
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      newsList: [],
      customerName: getToken()
    };
  },
  mounted() {
    this.customerName = getToken();
  },
  methods: {
    uploadImage(event) {
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.fil = inputDOM.files;
      debugger;
    }
  }
};
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
