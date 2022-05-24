<template>
  <div class="alunos">
      <h1>Alunos</h1>
    <ul>
     <li v-for="aluno in alunos" :key="aluno">
        {{ aluno }}
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AlunosView',
  data() {
      return {
          alunos: {}
      }
  },
  components: {
  },
  created: function(){
        try{
        axios.get('http://localhost:3000/aluno').then(resp => {

        this.alunos = resp.data
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
