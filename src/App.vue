<template>
<div>
    <div>
        <button class="button" @click="doClick('page1')">button1</button>
        <button class="button" @click="doClick('page2')">button2</button>
        <button class="button" @click="doClick('page3')">button3</button>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
    doClick (name) {
      this.$router.replace(name)
    }
  }
}
</script>

<style lang="less">
@import "assets/less/main.less";

</style>