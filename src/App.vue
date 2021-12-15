<template>
  <div id="app" class="app">

    <div class="header">
      <img src="./assets/hospedajeImg.png" alt="" />
      <h1> Hospedaje M-TIC </h1>
      
      
      <nav>
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="loadBooking"> Historial </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button>
        <button v-if="!is_auth" v-on:click="loadSearch" > Buscar </button> 
      </nav>
    </div>
    
  
    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp" 
        v-on:logOut="logOut"
      >       
      </router-view>
    </div>
    

    <div class="footer">
      <h2>-- MisionTic Proyecto Ciclo 4 Grupo 4 -- </h2>
    </div>

  </div>
</template>




<script>
export default {
  name: 'App',

  data: function(){
    return{
      is_auth: false,
    }
  },

  components: {
  },

  methods:{
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
		
			if (this.is_auth == false)      
        this.$router.push({ name: "todosInmuebles" }); 
      else
        this.$router.push({ name: "home" });
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    completedLogIn: function(data) {
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			localStorage.setItem("isAuth", true);
      alert("Autenticación Exitosa");
			this.verifyAuth();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadSearch: function () {
			this.$router.push({ name: "buscarPorCiudad" });
		},

    loadBooking: function () {
			this.$router.push({ name: "misReservas" });
		},
    

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
			this.verifyAuth();
		}
  },

  

  created: function(){
    this.verifyAuth()
  }

}
</script>


<style>
  body{
    margin: 0 0 0 0;
  }
  
  img {    
    width: 100px;
    height:100px;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 6vh; 
    min-height: 100px;
    background-color: #cad1d8 ;
    color:#414346;
    display: flex;
    justify-content:space-around;
    align-items:center;
    
  }
  .header title{
    width: 20%;
    text-align:center;
    align-items:center;
    font-family:cursive;
    color:#414346
  }

  .header nav {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }

  .header nav button{
    color:#414346;
    background: none;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
  }

  .header nav button:hover{
    color: #283747;
    background: #797c80;
    border: 1px solid #E5E7E9;
  }  

  .main-component{
    min-height: 420px;
    margin: 0%;
    padding: 0;
    text-align:center;
    line-height: 1.5;
  }  

  .main-component h3 {
    color: gainsboro;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%; 
    margin-bottom: 1px;
  }
  
    .footer{
    margin: 0px 0px;
    padding: 0 0 0 0;
    width: 100%;
    height: 8vh;
    background-color: #e9b819;
    color: #162c1b;
    position:static;
  }
  .footer h2{
    font-size:24px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
</style>
