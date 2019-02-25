<template>
  <div>
    <group title="禁用内置验证及显示成功或者错误样式">
      <x-input title="当前账号" v-model="customerName"></x-input>
    </group>
    <ul id="example-1">
      <li v-for="(item,index) in newsList" :key="index">{{ item.Title }}</li>
    </ul>
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
    setNewsList() {
      let page = 1;
      getNewsList(page)
        .then(response => {
          this.newsList = response.Items;
          console.log(response);
        })
        .catch(err => {
          alert(err);
        });
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
