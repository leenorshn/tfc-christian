<template>
  <div class="home">
    <div class="left-activity">
      <h3>Affectation d'agronome</h3>
      <div class="input-field">
        <label for="matricule">Matricule</label>
        <input type="text" id="matricule" placeholder="matricule" />
      </div>
      <div class="input-field">
        <label for="secteur">Secteur:</label>
        <select name="secteur" id="secteur">
          <option value="beni-mbau">beni-mbau</option>
          <option value="mangina">mangina</option>
          <option value="kantine">kantine</option>
          <option value="makumo">makumo</option>
          <option value="Mutwanga">Mutwanga</option>
          <option value="Kamango">Kamango</option>
        </select>
      </div>
      <div class="input-field">
        <label for="matricule">Axe</label>
        <input type="text" id="matricule" placeholder="Axe" />
      </div>
      <div class="input-field">
        <label for="role">role:</label>
        <select name="role" id="role">
          <option value="makumo">Superviseur</option>
          <option value="Mutwanga">Agronome</option>
          <option value="Kamango">Agent-depot</option>
        </select>
      </div>
      <button class="btn-Affecter">Affecter agent</button>
    </div>
    <div class="right-activity">
      <div class="header-part">
          <h4>liste des agents</h4>
          <input type="text" placeholder="Rechercher">
      </div>
      <div class="body-part">
          <!-- todo create a table header -->
          <div class="table-item">
            <div class="item-name">
             <strong>Name</strong> 
            </div>
            <div class="item-matricule">
               <strong>Matricule</strong>
            </div>
            <div class="item-secteur">
              <strong>Secteur</strong>
            </div>
            <div class="item-axe">
               <strong>Axe</strong>
            </div>
            <div class="item-role">
               <strong>Role</strong>
            </div>
            <div class="item-date">
               <strong>Date</strong>
            </div>
          </div>
          <div class="table-item" v-for="(aff,index) in affectations" :key="index">
            <div class="item-name">
              {{aff.name}}
            </div>
            <div class="item-matricule">
              {{aff.matricule}}
            </div>
            <div class="item-secteur">
              {{aff.secteur}}
            </div>
            <div class="item-axe">
              {{aff.axe}}
            </div>
            <div class="item-role">
              {{aff.role}}
            </div>
            <div class="item-date">
              {{aff.date}}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted(){
    this.$store.state.affectations;
  },
  data(){
    return {
      
    }
  }
};
</script>

<style scoped>
.home {
  display: flex;
}
.left-activity {
  flex: 3;
  background-color: rgb(208, 219, 208);
  height: 550px;
  position: relative;
  margin: 16px;
  border-radius: 8px;
}
.left-activity h3 {
  margin: 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  border-radius: 8px 8px 0px 0px;
  height: 60px;
  background-color: #2c3e50;
  color: white;
}
.right-activity {
  flex: 7;
  background-color: rgb(208, 219, 208);
  height: 550px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}

.right-activity .header-part{
  background-color:#2c3e50;
  flex:1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
}

.header-part h4{
  flex:4;
}
.header-part input{
  flex:3;
  padding: 10px;
  margin-right: 10px;
  border-radius: 8px;
}
.header-part input:focus{
  outline: none;
}
.right-activity .body-part{
  flex:8;
}
.body-part .table-item{
  display: flex;
  background-color: #b2c2d3;
  
  margin:5px;
}

.table-item .item-name{
  padding: 5px;
  flex:2;
  border:1px solid rgb(226, 223, 223);
  background-color: white;
  border-radius: 3px;
  text-align: start;
}
.table-item .item-matricule{
  padding: 5px;
  flex:1;
  border-radius: 3px;
  background-color: white;
border:1px solid rgb(226, 223, 223);
}
.table-item .item-secteur{
  padding: 5px;
  flex:1.5;
  border-radius: 3px;
  background-color: white;
  border:1px solid rgb(226, 223, 223);
}
.table-item .item-axe{
  border:1px solid rgb(217, 222, 223);
  padding: 5px;
  border-radius: 3px;
  background-color: white;
  flex:1.5;
}
.table-item .item-role{
  border:1px solid rgb(226, 223, 223);
  padding: 5px;
  border-radius: 3px;
  background-color: white;
  flex:1;
}
.table-item .item-date{
  border:1px solid rgb(226, 223, 223);
  padding: 5px;
  border-radius: 3px;
  background-color: white;
  flex:1.5;
}
.btn-Affecter {
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  border:none;
  background-color: #2c3e50;
  cursor:pointer;
}
.btn-Affecter:focus{
  outline:none;
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
</style>
