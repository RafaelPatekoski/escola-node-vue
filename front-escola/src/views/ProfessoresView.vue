<template>
  <div class="professores">
      <h1>Professores</h1>
      <button><router-link to="/criarprofessor">Cadastrar Professor</router-link></button>
    <ul>
     <li v-for="professor in professores" :key="professor">
        <p>Nome: {{ professor.nomeProfessor }}</p>
        <p>Formação: {{ professor.formacaoProfessor }}</p>
        <hr>
    </li>
    </ul>
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
