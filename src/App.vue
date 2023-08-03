<template>
  <div>
    <ant-v ref="testRef"></ant-v>
    <!-- <mounted-vue ref="testRef"></mounted-vue> -->
  </div>
</template>

<script>
import AntV from "./components/AntV.vue";
// import MountedVue from "./components/mounted.vue";

export default {
  async mounted() {
    console.log("father");
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log("father");
    //     resolve();
    //   });
    // });
    // console.log("father after promise");
    const test = this.$refs.testRef;
    console.log(test);
    // console.log(test.style.display);
  },
  methods: {
    test() {
      console.log("++++++++++++++++++++");
    },
  },
  components: { AntV },
};
</script>
