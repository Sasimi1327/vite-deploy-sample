<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getUser() {
      console.log(import.meta.env.VITE_TEXT);
      const pathUrl = import.meta.env.VITE_PATH;
      this.$http.get(pathUrl).then((res) => {
        this.user = res.data.results[0];
        console.log(this.user)
      })
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
