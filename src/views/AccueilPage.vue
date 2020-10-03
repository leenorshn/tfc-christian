<template>
  <div class="accueil">
    <div class="accueil-left">
      <div class="bloc-left-top">
        <StatisticCard
          v-for="(stat, index) in stats"
          :key="index"
          :stat="stat"
        />
      </div>
      <div class="bloc-left-bottom">
        <img src="../assets/map2.png"/>
      </div>
    </div>
    <div class="accueil-right">
      <div class="right-main">
        <table class="content-table">
          <thead>
            <tr>
                <th>id</th>
              <th>Champs</th>
              <th>Village</th>
              <th>Cultivateur</th>
              <th>etat</th>
              <th>Agro</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(champ, index) in champsList" :key="index">
                <td>{{index+1}}</td>
              <td>{{ champ.champ }}</td>
              <td>{{ champ.axe }}</td>
              <td>{{ champ.plateur }}</td>
              <td>{{ champ.etat }}</td>
              <td>{{ champ.agent }}</td>
              <td>{{ champ.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right-small">
        <div id="card">
          <p>{{ champsList[0].label }}</p>
          <h3>{{ champsList[0].value }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StatisticCard from "../components/StatisticCard.vue";

export default {
  components: {
    StatisticCard,
   
  },
  data() {
    return {
      champsList: [
        {
          champ: "MG-KE-09",
          axe: "Kivende",
          plateur: "Zawadi m",
          etat: "Bien entretenu",
          agent: "Bernad Sombola",
          date: "12/06/2020",
        },
        {
          champ: "MG-KL-09",
          axe: "Kalibo",
          plateur: "Dalzon m",
          etat: "Mal entretenu",
          agent: "Samy Kakuhi",
          date: "12/06/2020",
        },
        {
          champ: "MG-MM-09",
          axe: "Makeke",
          plateur: "heritier m",
          etat: "Non accessible",
          agent: "Kombi desire",
          date: "12/06/2020",
        },
      ],
      stats: [
        {
          label: "Cultivateurs",
          value: "+2300",
        },
        {
          label: "Champs",
          value: "+2500",
        },
        {
          label: "Agents",
          value: "120",
        },
      ],
      statusList: [
        {
          label: "Bon etat",
          value: "+2500",
        },
        {
          label: "Mal entretenue",
          value: "+2500",
        },
        {
          label: "Maladie",
          value: "+2500",
        },
        {
          label: "Inaccessible",
          value: "+2500",
        },
      ],
    };
  },
};
</script>

<style scoped>
.accueil {
  display: flex;
  height: 90vh;
}
.accueil-left {
  flex: 3.5;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(236, 232, 232);
}
.bloc-left-top {
  flex: 1;
  /* background-color:white;  */
  margin: 10px 8px 0px 8px;
  display: flex;
  border-radius: 10px;
}
.bloc-left-bottom {
  flex: 8;
  background-color: rgb(255, 255, 255);
  margin: 10px;
  padding:10px;
  border-radius: 10px;
}
.bloc-left-bottom img{
  width:416px;
  height:400px;
  border-radius: 10px;
}
.accueil-right {
  flex: 7;
  display: flex;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(231, 225, 225);
}
.right-main {
  flex: 9;
  margin: 6px 6px 8px 8px;
  border-radius: 10px;
  background-color: white;
}

.content-table {
  border-collapse: collapse;
  margin: 16px 0px;
  font-size: 0.9em;
  min-width: 600px;
  overflow: hidden;
}

.content-table thead tr {
  background-color: #16a07d;
  color: white;
  
  padding: 10px;
}
.content-table th,
.content-table td {
  padding: 10px 14px;
  width: 100px;
}
.content-table tbody tr {
  border-bottom: 1px solid #ddd;
}
.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.right-small {
  flex: 1.3;
  background-color: white;
  height: 84vh;
  display: flex;
  flex-direction: column;
  margin: 6px;
  border-radius: 10px;
}


 #card{
    display: flex;
    margin:8px;
    flex-direction: column;
    justify-content: center;
    height: 10vh;
    border-radius:4px;
    flex:1;
    align-items: center;
    background-color:rgb(19, 59, 146);
  }
  #card h3{
    color: rgb(241, 168, 11);
    font-weight:700;
  }

  #card p{
    color :rgb(255, 255, 255);
    font-weight:300;
    font-size:12px;
  }
</style>