<template>
  <div class="hello">
    <h1 @click="sendAjax">点击发送请求</h1>
    <h2>{{ajax}}</h2>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      id: null,
      ajax: {}
    }
  },
  methods: {
    sendAjax() {
      axios({
        method: "get",
        url: "http://localhost:1992/api/zoo/cat",
      }).then(res => {
        this.ajax = res.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
