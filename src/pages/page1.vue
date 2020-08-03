<template>
<div>
    <p>
        <button @click="testApi">点击测试</button>
    </p>
    <div>响应内容：<p>{{content}}</p></div>
</div>
</template>

<script>
export default {
  name: "page1",
  data () {
    return {
      content: ''
    }
  },
  methods: {
    testApi () {
      this.$http.post({
        api: '/mssbasic/app/dict/sync',
        data: {
          dictConditionList: [{dataKey: "province", systemId: "mss", version: "0"}]
        }
      }).then(result => {
        this.content = result
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>