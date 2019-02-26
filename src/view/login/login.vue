<!--
 * @Author: yongwei.hou
 * @LastEditors: yongwei.hou
 * @Description:
 * @Date: 2019-02-22 13:54:47
 * @LastEditTime: 2019-02-26 14:02:12
 -->
<template>
  <div class="login_bg">
    <x-input
      type="text"
      v-model="loginForm.userName"
      placeholder="请输入身份证号或卡号"
      :show-clear="false"
      class="login_input"
    ></x-input>
    <x-input
      :type="pwdType"
      v-model="loginForm.passWord"
      placeholder="请输入您的密码"
      :show-clear="false"
      class="login_input"
    >
      <span slot="right" class="show-pwd" @click="showPwd">
        <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'"/>
      </span>
    </x-input>
    <x-button
      type="warn"
      class="login_btn"
      action-type="submit"
      @click.native="login"
      :show-loading="btnloading"
    >{{btnText}}</x-button>
  </div>
</template>

<script>
import { Group, Cell, XInput, XButton } from "vux";
export default {
  components: {
    Group,
    Cell,
    XInput,
    XButton
  },
  data() {
    return {
      pwdType: "password",
      loginForm: {
        userName: "",
        passWord: ""
      },
      btnloading: false,
      btnText: "登录"
    };
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    resetBtn() {
      this.btnloading = false;
      this.btnText = "登录";
    },
    login() {
      this.btnloading = true;
      if (this.loginForm.userName.trim() == "") {
        this.$vux.toast.text("请输入身份证号或卡号");
        this.btnloading = false;
        return;
      }
      if (this.loginForm.passWord.trim() == "") {
        this.$vux.toast.text("请输入您的密码");
        this.btnloading = false;
        return;
      }
      this.btnText = "正在登录中...";

      this.$store
        .dispatch("Login", this.loginForm)
        .then(() => {
          this.$vux.toast.text("登录成功");
          this.$router.push({ path: this.redirect || "/demo" });
        })
        .catch(err => {
          this.resetBtn();
          this.$vux.toast.text(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/less/login.less");
</style>

