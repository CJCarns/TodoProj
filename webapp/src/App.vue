<template>
  <div id="app">
    <b-navbar class="nav"> 
      <template slot="brand">
        <router-link class="navbar-item" to="/" exact>
           ExampleApp
        </router-link>
      </template>
      <template slot="start">
        <router-link class="navbar-item" to="/" exact>Home</router-link>
        <router-link class="navbar-item"  to="/about" exact>About</router-link>
      </template>
    </b-navbar>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active, &.router-link-active {
      color: #42b983;
    }
  }
}
</style>
