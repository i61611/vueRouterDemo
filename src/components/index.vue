<template>
    <div class="hello">
        <h1>Smart phone list</h1>
        <ul>
            <li>
                <router-link to="/iphone6s"> <img src="/static/iphone6s/list.png"> iPhone 6s
                </router-link>
            </li>
            <br/>
            <li>
                <router-link to="/onex4"><img src="/static/onex4/list.png"> iPhone se
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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
