<template>
  <div>
    <el-cascader
      v-model="select"
      :options="options"
      :props="props"
    ></el-cascader>
    <div>
      <el-button type="primary" @click="onSubmit">选中测试21</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        expandTrigger: "hover",
        multiple: false,
        emitPath: false,
        // checkStrictly: true,
      },
      select: "",
      options: [
        {
          value: "ceshi1",
          label: "测试1",
          children: [
            {
              value: "ceshi11",
              label: "测试11",
            },
            {
              value: "ceshi12",
              label: "测试12",
            },
          ],
        },
        {
          value: "ceshi2",
          label: "测试2",
          children: [
            {
              value: "ceshi21",
              label: "测试21",
            },
            {
              value: "ceshi22",
              label: "测试22",
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      // this.form.select = [["ceshi2", "ceshi21"]];
      //emitPath:false
      this.select = ["ceshi21"];
    },
  },
};
</script>

