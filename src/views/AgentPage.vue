<template>
  <div class="agent-page">
    <div class="form-agent">
      <div class="list-head">Nouveau Agent</div>
      <div class="list-body">
        <form action="" @submit.prevent="createAgent()">
          <div class="input-field">
            <label for="nom">Nom</label>
            <input v-model="newAgent.name" type="text" id="nom" placeholder="nom complets" />
          </div>
          <div class="input-field">
            <label for="address">Address</label>
            <input v-model="newAgent.address" type="text" id="address" placeholder="Address domicile" />
          </div>
          <div class="input-field">
            <label for="phone">Phone</label>
            <input v-model="newAgent.phone" type="text" id="phone" placeholder="phone" />
          </div>
          <div class="input-field">
            <label for="matricule">Matricule</label>
            <input v-model="newAgent.matricule" type="text" id="matricule" placeholder="matricule" />
          </div>
          <div class="input-field">
            <label for="role">role:</label>
            <select v-model="newAgent.role" name="role" id="role">
              <option value="Superviseur">Superviseur</option>
              <option value="Agronome">Agronome</option>
              <option value="Agent-depot">Agent-depot</option>
            </select>
          </div>
          <div v-if="messageError.length>0" class="error">
            <h4>{{messageError}}</h4>
          </div>
          <button class="btn-Affecter">Enregistrer</button>
        </form>
      </div>
    </div>
    <div class="list-agent">
      <div class="list-head">Liste d'Agent <span>{{numberAgent}}</span></div>
      <div class="list-body">
        <div class="agent-card-item" v-for="(agent,index) in agents" :key="index">
          <img src="../assets/profile.png" alt="">
          <div class="agent-item" >
            <h5>{{agent.name}}</h5>
            <p>{{agent.phone}} </p>
          </div>
          
          <span>{{agent.role}}</span>
          <font-awesome-icon icon="user-secret" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    createAgent() {
      const {name,phone,matricule,role,address}=this.newAgent;
      console.log(this.newAgent);
      if(name&&role&&matricule&&phone){
      this.agents.unshift({
        name,
        phone,
        matricule,
        role,
        address
      });
      this.messageError=""
      }else{
        this.messageError="Donnees invalides";
      }
      this.newAgent="";
    },
  },
  computed:{
    numberAgent(){
      return this.agents.length;
    }
  },
  data() {
    return{
      messageError:"",
      newAgent:{
        name:"",
        phone:"",
        role:"",
        address:"",
        matricule:"",
      },
      agents:[
        {
          name:"Christian Maru",
          phone:"+243978787899",
          role:"agronome"
        }
      ]
    }
  }
};
</script>
<style scoped>
.agent-page {
  display: flex;
  width: 80%;
  margin: auto;
}
.form-agent {
  flex: 5;
  background-color: white;
  height: 90vh;
}
.list-agent {
  flex: 4;
  background-color: white;
  display: flex;
  height: 90vh;
  flex-direction: column;
}
.list-agent .list-head {
  display: flex;
  flex: 1;
  height: 10vh;
  background-color: rgb(39, 106, 161);
  color: white;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  margin: 10px 10px 0px 10px;
  padding: 10px;
  border-radius: 6px 6px 0px 0px;
}
.list-agent .list-body {
  display: flex;
  flex: 8;
  height: 76vh;
  flex-direction: column;
  overflow: auto;
  margin: 0px 10px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  background-color:  rgb(240, 248, 248);
}

.form-agent .list-head {
  display: flex;
  flex: 1;
  height: 10vh;
  background-color: rgb(39, 106, 161);
  margin: 10px 10px 0px 10px;
  padding: 10px;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-radius: 6px 6px 0px 0px;
}
.form-agent .list-body {
  display: flex;
  flex: 8;
  height: 76vh;
  margin: 0px 10px 10px 10px;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  overflow:auto;
  position: relative;
  background-color:  rgb(240, 248, 248);
}
.btn-Affecter {
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  background-color: orange;
  border:none;
  cursor: pointer;
}
.input-field {
  padding: 10px;
  display: flex;
}
.input-field label {
  width: 100px;
  margin-right: 10px;
}
.input-field input {
  padding: 10px;
}
.input-field select {
  padding: 10px;
  width: 170px;
}

.agent-card-item{
  display: flex;
  height: 10vh;
  background-color:white;
  border: 0.5 solid gray;
  border-radius:6px;
  padding:6px;
  width: 95%;
  margin:5px 10px;
}
.agent-card-item img{
  width: 56px;
  height: 56px;
  flex:1;
  border-radius:32px;
}

.agent-item{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:20px;
  flex:4;
  justify-content: center;
}
.agent-item h5{
  color:black;
  margin-bottom:6px;
   font-weight:700;
}

.agent-item p{
  font-size:12px;
  color:grey;
}

.agent-card-item span{
  margin-left:20px;
  color:#21ce99;
  flex:2;
  font-weight:700;
}
.list-head span{
  display: bloc;
  height: 40px;
  width: 40px;
  color: white;
  background-color:orange;
  align-items:center;
  text-align: center;
  font-size:16px;
  border-radius:8px;
  margin-left:56px;
  padding:8px;
}
.error{
  height: 32px;
  padding: 10px;
  background-color:red;
  color: white;
}
</style>
