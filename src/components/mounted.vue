<template>
  <div>mounted</div>
</template>

<script>
export default {
  async mounted() {
    // console.log("child");
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("child");
        resolve();
      }, 0);
    });

    console.log("child after promise");
  },
};
</script>

<style>
</style>