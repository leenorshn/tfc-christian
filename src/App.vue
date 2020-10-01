<template>
  <div id="app">
    <!-- <div id="nav">
      
    </div> -->
    <!-- -->
    <header>
      <div class="app-title">
        <h2>
          ESCO-Admin
        </h2>
      </div>
      <div class="menu">
        <router-link to="/">Activité</router-link> 
        <router-link to="/about">Rayon d'action</router-link>
        <router-link to="/">Agent</router-link> 
      </div>
    </header>
    <div class="main-app">
 <router-view/>
    </div>
  </div>
</template>

<style>
*{
  margin:0px;
  padding:0px;
  box-sizing: content-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header{
  background-color: #2c3e50;
  display: flex;
  color:beige;
  height: 10vh;
  justify-content: center;
  align-items: center;
}
.app-title{
  flex:2;
}
.menu{
  flex:8;
}
a{
  color:white;
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  width: 140px;
  border-radius:8px ;
  background-color:orange;
  margin:0px 4px;
}


</style>
