<template>
  <div class="turmas">
    <h1>Turmas</h1>
    <button><router-link to="/criarturma">Cadastrar Professor</router-link></button>
    <ul>
     <li v-for="turma in turmas" :key="turma">
        Turma: {{ turma.anoTurma }}{{ turma.classeTurma}} <br>
        Professor: {{ getProfessor(turma.nomeProfessor, turma.id) }}
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TurmasView',
  data() {
      return {
          turmas: {},
          professor: []
      }
  },
  components: {
  },
  methods: {
    getProfessor: function(idprofessor, idturma){
      try{
        axios.get(`http://localhost:3000/professor/${idprofessor}`).then(resp => {
        console.log(resp.data.nomeProfessor)
        professor.push({professor: resp.data.nomeProfessor, idturma})
      });
      } catch(error){
        console.log('deu errado')
      }
  }
  },
  created: function(){
        try{
        axios.get('http://localhost:3000/turma').then(resp => {

        this.turmas = resp.data
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
