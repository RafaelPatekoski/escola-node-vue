<template>
  <div class="turmas">
    <h1>Turmas</h1>
    <button><router-link to="/criarturma">Cadastrar Professor</router-link></button>
    <ul>
     <li v-for="turma in turmas" :key="turma">
        {{ turma.ordem }}
        Turma: {{ turma.anoTurma }}{{ turma.classeTurma}} <br>
        Professor: {{professor[turma.ordem]}}
        <hr>
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
    getProfessor: function(idprofessor){
      if(idprofessor === undefined){return}
      try{
        axios.get(`http://localhost:3000/professor/${idprofessor}`).then(resp => {
        this.professor.push(resp.data.nomeProfessor)
      });
      } catch(error){
        console.log('deu errado')
      }
  }
  },
  created: async function(){
    try{
        axios.get('http://localhost:3000/turma').then(resp => {
        this.turmas = resp.data
        console.log(this.turmas[0].professorTurma)
        for (var i = 0; i < this.turmas.length; i++) {
          this.turmas[i].ordem = i
          this.getProfessor(this.turmas[i].professorTurma)
        }
        console.log(this.turmas)
        
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
