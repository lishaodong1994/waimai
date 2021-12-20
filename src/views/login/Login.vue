<template>
  <div class="login">
    <i class="iconfont icon-dingdan back" @click="$router.back()"></i>
    <div class="login_box">
      <p class="login_title">你好外卖</p>
      <div class="login_way">
        <div
          :class="['smsLogin', { active: currentLogin === 'sms' }]"
          @click="currentLogin = 'sms'"
        >
          <span>短信登陆</span>
        </div>
        <div
          :class="['passLogin', { active: currentLogin === 'pass' }]"
          @click="currentLogin = 'pass'"
        >
          <span>密码登陆</span>
        </div>
      </div>
      <form class="login_form" @submit.prevent="handleSubmit">
        <div class="from_sms_context" v-if="currentLogin === 'pass'">
          <input
            type="text"
            name=""
            id=""
            placeholder="手机/邮箱/用户名"
            v-model="loginPayload.name"
          />
          <div class="pass_word_box">
            <input
              :type="checks ? 'text' : 'password'"
              name=""
              id=""
              placeholder="密码"
              v-model="loginPayload.pwd"
            />
            <div :class="['checkball', { on: checks }]">
              <span :class="{ on: checks }" @click="checks = !checks"></span>
            </div>
          </div>
          <div class="reg_box">
            <input
              type="text"
              name=""
              id=""
              placeholder="验证码"
              v-model="loginPayload.captcha"
            />
            <div class="reg_img" v-html="yzmImg" @click="regetYzmImg"></div>
          </div>
        </div>
        <div class="from_pass_context" v-if="currentLogin === 'sms'">
          <div class="phone_box">
            <input
              type="text"
              name=""
              id=""
              placeholder="手机"
              v-model="loginPayload.name"
            />
            <span @click="handleGetSms">{{
              timer ? `${delay}秒后重新获取` : "获取验证码"
            }}</span>
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="验证码"
            v-model="loginPayload.captcha"
          />
        </div>
      </form>
      <button class="login_btn" @click="login">登陆</button>
      <p class="about_me">关于我们</p>
    </div>
  </div>
</template>

<script>
import { getYzmImg, passLogin, getSms, smsLogin } from "@/API/request";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      checks: true,
      currentLogin: "sms",
      yzmImg: "",
      loginPayload: {
        name: "",
        pwd: "",
        captcha: "",
      },
      delay: 30,
      timer: 0,
    };
  },
  async mounted() {
    this.yzmImg = await getYzmImg();
  },
  methods: {
    ...mapMutations(["setUserMsg"]),
    async regetYzmImg() {
      this.yzmImg = await getYzmImg();
    },
    //短信登陆 | 密码登陆：
    async login() {
      try {
        if (this.currentLogin === "pass") {
          if (!/^.{3,8}$/.test(this.loginPayload.name)) {
            this.$Toast("用户名长度应为3~8位");
            return;
          }
          if (!/^.{6,12}$/.test(this.loginPayload.pwd)) {
            this.$Toast("密码长度应为6~12位");
            return;
          }
          const res = await passLogin(this.loginPayload);
          if (res.code == 1) {
            this.$Toast(res.msg);
            return;
          }
          if (res.code == 0) {
            this.setUserMsg(res.data);
            this.$router.replace("/home");
          }
        } else if (this.currentLogin === "sms") {
          if ( !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.loginPayload.name)){
            this.$Toast("请输入正确的手机号~");
            return;
          }
          if (!/^\d{6}$/.test(this.loginPayload.captcha)) {
            this.$Toast("请输入6位验证码~");
            return;
          }
          const { code, data } = await smsLogin(this.loginPayload);
          console.log(data);
          if (code == 1) {
            this.$Toast(res.msg);
            return;
          }
          if (code === 0) {
            this.setUserMsg(data);
            this.$router.replace("/home");
          }
        }
      } catch (err) {console.log(err)}
    },
    //请求短信验证码：
    async handleGetSms() {
      if (!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test( this.loginPayload.name)) {
        this.$Toast("请输入正确的手机号~");return;
      }
      if (!this.timer) {
        const {code} = await getSms(this.loginPayload.name);  //遇到一个小bug:后端忘记返响应导致await 一直等不来成功的promise，从而阻塞了下面的代码运行。
        if (code === 1) {this.$Toast("T T 验证码发送失败辣~"); return}
        this.timer = setInterval(() => {
          this.delay = this.delay - 1
          if(this.delay<=0){
            clearInterval(this.timer)
            this.timer=0
            this.delay=30
          }
        }, 1000);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 201;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back {
  position: absolute;
  font-size: 24px;
  top: 1vw;
  left: 1vw;
}
.login_box {
  width: 80%;
  height: 85%;
}
.login_title {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 1px;
  color: rgb(8, 167, 120);
  margin-bottom: 50px;
}
.login_way {
  display: flex;
  width: 220px;
  margin: 0 auto;
  text-align: center;
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 10px;
  & > div {
    flex: 1;
    height: 28px;
    line-height: 28px;
    > span {
      display: inline-block;
    }
  }
  & > .active {
    color: rgb(8, 167, 120);
    > span {
      border-bottom: 2px solid rgb(8, 167, 120);
    }
  }
}
.login_form {
  .from_sms_context,
  .from_pass_context {
    input {
      box-sizing: border-box;
      width: 100%;
      height: 50px;
      border-style: none;
      border: 1px solid #ddd;
      outline: 0;
      box-shadow: none;
      margin-bottom: 15px;
      border-radius: 5px;
      padding: 10px;
      font-size: 15px;
    }
    input:focus {
      border-color: rgb(8, 167, 120);
    }
  }
}
.pass_word_box {
  position: relative;
  .checkball {
    position: absolute;
    top: 12.5px;
    right: 10px;
    width: 60px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid #aaa;
    background-color: #fff;
    &.on {
      background-color: green;
    }
    & > span {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #aaa;
      transform: translateX(0px);
      transition: transform 0.5s;
      &.on {
        background-color: #fff;
        transform: translateX(35px);
      }
    }
  }
}
.reg_box {
  position: relative;
  .reg_img {
    position: absolute;
    top: -1px;
    right: 0px;
    width: 150px;
    height: 50px;
  }
}
.login_btn {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(8, 167, 120);
  outline: 0;
  border-style: none;
  border: 1px solid rgb(14, 211, 129);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0;
  color: #fff;
}
.about_me {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  height: 25px;
  line-height: 25px;
  color: #aaa;
  font-size: 14px;
}
.phone_box {
  position: relative;
  & > span {
    font-size: 14px;
    position: absolute;
    top: 17px;
    right: 12px;
  }
}
</style>