<template>
  <div>
    <group title="禁用内置验证及显示成功或者错误样式">
      <x-input
        title="当前账号"
        v-model="customerName"
      ></x-input>
    </group>
  </div>
</template>

<script>
import { XInput, Group, XButton, Cell } from "vux";
import {
  getToken,
} from '@/utils/auth'
export default {
  components: {
    XInput,
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      customerName:  getToken()
    }
  },
  mounted() {
    this.customerName = getToken()
  },
  methods: {

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
