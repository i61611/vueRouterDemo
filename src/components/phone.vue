<template>
  <div class="hello">
    <img :src="src">
    <br/> {{$route.params.id}}
    <br/>
    <router-link to="/">return</router-link>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    src: function () {
      return '/static/' + this.$route.params.id + '/color00.png'
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
