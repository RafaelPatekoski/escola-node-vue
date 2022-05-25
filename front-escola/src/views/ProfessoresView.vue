<template>
  <div class="professores">
      <h1>Professores</h1>
      <button><router-link to="/criarprofessor">Cadastrar Professor</router-link></button>
      <hr>
     <div v-for="professor in professores" :key="professor">
        <p>Nome: {{ professor.nomeProfessor }}</p>
        <p>Formação: {{ professor.formacaoProfessor }}</p>
        <button v-on:click="deletar(professor._id)">Deletar</button>
        <button><router-link :to="'/professores/editar/'+professor._id">Editar</router-link></button>
        <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProfessoresView',
  data() {
      return {
          professores: {}
      }
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
    },
    deletar: function(id){
      console.log('deletar')
      try{
        axios.delete(`http://localhost:3000/professor/deletar/${id}`, {headers: {'token': this.pegarcookie('token')}}).then(resp => {
          console.log(resp)
          location.reload();
      });
      } catch(error){
        console.log('deu errado')
      }
    }
  },
  components: {
  },
  created: function(){
        try{
        axios.get('http://localhost:3000/professor').then(resp => {

        this.professores = resp.data
        console.log(this.usuario)
    });
    } catch(error){
      console.log('deu errado')
    }
  }
}
</script>/* eslint-disable */ 
<style scoped>
    li{
        list-style: none;
    }
</style>
