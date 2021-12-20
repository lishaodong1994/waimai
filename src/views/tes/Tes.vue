<template>
  <div>
    <button @click="show = true">12321</button>
    <van-overlay :show="show" @click="show = false" />
    <transition name="fade">
      <div class="box" v-show="show">
        <div class="core-container">
          <div class="scroll-wrapper" ref="scroll">
            <div class="scroll-content">
              <div
                class="scroll-item"
                v-for="(item, index) in emojis"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      show: false,
      emojis: [
        "😀 😁 😂 🤣 😃",
        "😄 😅 😆 😉 😊",
        "😫 😴 😌 😛 😜",
        "👆🏻 😒 😓 😔 👇🏻",
        "😑 😶 🙄 😏 😣",
        "😞 😟 😤 😢 😭",
        "🤑 😲 🙄 🙁 😖",
        "👍 👎 👊 ✊ 🤛",
        "🙄 ✋ 🤚 🖐 🖖",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
        "💫 💥 💢 💦 💧",
        "🐠 🐟 🐬 🐳 🐋",
        "😬 😐 😕 😯 😶",
        "😇 😏 😑 😓 😵",
        "🐥 🐣 🐔 🐛 🐤",
        "💪 ✨ 🔔 ✊ ✋",
        "👇 👊 👍 👈 👆",
        "💛 👐 👎 👌 💘",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
        "💫 💥 💢 💦 💧",
        "🐠 🐟 🐬 🐳 🐋",
        "😬 😐 😕 😯 😶",
        "😇 😏 😑 😓 😵",
        "🐥 🐣 🐔 🐛 🐤",
        "💪 ✨ 🔔 ✊ ✋",
        "👇 👊 👍 👈 👆",
        "💛 👐 👎 👌 💘",
      ],
    };
  },
  mounted() {
    this.bs = new BScroll(this.$refs.scroll, {
      probeType: 3,
      click: true,
    });
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {},
};
</script>
<style lang="less"  scoped>
.core-container {
  .scroll-wrapper {
    height: 300px;
    position: relative;
    overflow: hidden;
    .scroll-item {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
      text-align: center;
      &:nth-child(2n) {
        background-color: #f3f5f7;
      }
      &:nth-child(2n + 1) {
        background-color: #42b983;
      }
    }
  }
}
.box {
  width: 100%;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 0;
  z-index: 2020;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
  transform: translateY(0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-300px);
}
</style>