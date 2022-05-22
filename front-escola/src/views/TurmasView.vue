<template>
  <div class="turmas">
     <li v-for="turma in turmas" :key="turma">
        {{ turma.anoTurma }}{{ turma.classeTurma}}
    </li>   
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TurmasView',
  data() {
      return {
          turmas: {}
      }
  },
  components: {
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
