<template>
  <child></child>
</template>
<script>
import Child from "./Child";
export default {
  mounted() {
    console.log(this.$attrs);
    console.log(this.$listeners);
    // this.$listeners
    console.log("hello world mounted");
  },
  name: "HelloWorld",
  props: {
    msg: String,
    a: String,
  },
  // render() {
  //   return <child></child>;
  // },
  // methods
  components: {
    Child,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
