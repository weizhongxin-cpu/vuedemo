<template>
  <div id="nav">
    <n-table :bordered="false" :single-line="false" size="small">
      <tbody>
      <tr>
        <td><router-link to="/computed">computed</router-link></td>
        <td><router-link to="/ifshow">IfAndShow</router-link></td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      </tbody>
    </n-table>
  </div>
  <router-view/>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
