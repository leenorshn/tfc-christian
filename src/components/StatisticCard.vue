<template>
  <div class="card">
    <h3>{{stat.value}}</h3>
    <p>{{stat.label}}</p>
  </div>
</template>

<script>
export default {
  name: 'StatisticCard',
  props: {
    stat:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    display: flex;
    margin:5px;
    flex-direction: column;
    justify-content: center;
    height: 16vh;
    border-radius:4px;
    flex:1;
    align-items: center;
    background-color:white;
  }
  .card h3{
    color: #21ce99;
    font-weight:700;
  }

  .card p{
    color :rgb(148, 147, 147);
    font-weight:300;
  }
</style>
