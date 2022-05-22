<template>
  <NavBarVue  :usuario="usuario"/>
  <router-view/>
</template>

<script>
import NavBarVue from "./components/NavBar.vue";
import axios from 'axios';
export default{
  name: "App",
  components: {
    NavBarVue,
  },
  data() {
    return{
      usuario: null,
    };
  },
  methods: {
        pegarcookie: function(name){
        let cookie = {};
        //CREDITOS : https://www.horadecodar.com.br/2022/03/14/como-pegar-um-cookie-pelo-nome-em-javascript/
        document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
        })
        //FAZER A FUNÇÃO PARA PEGAR O USUARIO USANDO AXIOS E USANDO O HEADER PARA PROVAR QUE ESTOU LOGADO...

        return cookie[name];
        }
  },
  created: function(){
        
        try{
        axios.get(`http://localhost:3000/usuario/${this.pegarcookie('token')}`).then(resp => {

        this.usuario = resp.data
        console.log(this.usuario)
    });
    } catch(error){
      console.log('deu errado')
      this.usuario = {autorizacao:'fazerlogin'}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  width: 100%;
  background-color: #00fc8a;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #000000;
}
</style>/* eslint-disable */
