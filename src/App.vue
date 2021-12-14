<template>
  <div id="app">
    <h1 class="header1 text-center" style="color: red">
      id is {{ watersData }}
    </h1>
    <h1 class="header2 text-center" style="color: blue">
      inputChar is {{ watersData }}
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
      // .get('/api/calculator/test/5/')
      // .get('https://warm-helix-333707.appspot.com/api/shelter/')
      .get('homework5-334114.appspot.com/api/test/')
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
