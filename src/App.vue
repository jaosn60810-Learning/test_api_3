<template>
  <div id="app">
    <h1 class="header1 text-center" style="color: red">
      id is {{ watersData.id }}
    </h1>
    <h1 class="header2 text-center" style="color: blue">
      inputChar is {{ watersData.inputChar }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      watersData: {},
    };
  },
  created() {
    this.axios
      .get('/api/calculator/test/5/')
      .then((res) => {
        console.log(res.data);
        this.watersData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss"></style>
