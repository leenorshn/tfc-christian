<template>
  <div class="home">
    <div class="left-activity">

    </div>
    <div class="right-activity">
      <button class="btn-Affecter">Affecter agent</button>
    </div>
    
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style scoped>
.home{
  display: flex;

}
.left-activity{
  flex:3;
  background-color:rgb(208, 219, 208);
  height: 550px;
  margin:16px;
  border-radius:8px;
}
.right-activity{
  flex:7;
  background-color:rgb(208, 219, 208);
  height: 550px;
  margin:16px;
  position:relative ;
  border-radius:8px;
}
.btn-Affecter{
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding:20px 20px;
  font-size: 18px;
  color:white;
  background-color:#2c3e50;
}
</style>
