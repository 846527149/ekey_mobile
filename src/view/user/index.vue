<template>
  <div>
    <group>
      <cell title="头像" :value="customerEntity.Avatar" is-link>
        <img :src="this.customerEntity.Avatar" class="user_image circle">
      </cell>
      <cell title="姓名" :value="customerEntity.CustomerName" is-link></cell>
      <cell title="性别" :value="customerEntity.SexText" is-link></cell>
      <cell title="出生年月" :value="customerEntity.Birthday" is-link></cell>
      <cell title="身份证号" :value="customerEntity.IDCardNum" is-link></cell>
      <cell title="婚姻状况" :value="customerEntity.MaritalStatus" is-link></cell>
      <cell title="职业" :value="customerEntity.Occupation" is-link></cell>
      <cell title="家庭地址" :value="customerEntity.HomeAddress" is-link></cell>
      <cell title="手机号" :value="customerEntity.Mobile" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Group, XButton, Cell } from "vux";
import { getToken } from "@/utils/auth";
import { beautySub } from "@/utils/index";
import { getCustomerDetail } from "@/api/user";
import { dateFormat } from "vux";
export default {
  components: {
    XButton,
    Group,
    Cell
  },
  data() {
    return {
      customerEntity: {
        Avatar: "",
        CustomerName: "",
        SexText: "",
        Birthday: "",
        IDCardNum: "",
        MaritalStatus: "",
        Occupation: "",
        HomeAddress: "",
        Mobile: ""
      }
    };
  },
  mounted() {
    this.setCustomerDetail();
  },
  methods: {
    setCustomerDetail() {
      let customerCode = getToken();
      getCustomerDetail(customerCode)
        .then(response => {
          this.customerEntity = response;
          this.customerEntity.Birthday = dateFormat(
            new Date(this.customerEntity.Birthday),
            "YYYY-MM-DD"
          );
          this.customerEntity.HomeAddress = beautySub(
            this.customerEntity.HomeAddress,
            10
          );
          this.customerEntity.Avatar =
            this.$weburl + "/" + this.customerEntity.PhotoPath;
        })
        .catch(err => {
          this.$vux.toast.text(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/less/user.less");
</style>

