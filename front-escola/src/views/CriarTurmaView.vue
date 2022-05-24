<template>
  <div class="home">
    <h1>CRIAR</h1>
   <FormCriarTurma></FormCriarTurma><br>
    <button><router-link to="/turma">VOLTAR</router-link></button>
  </div>
</template>

<script>
// @ is an alias to /src
import FormCriarTurma from '@/components/Forms/FormCriarTurma.vue'

export default {
  name: 'CriarUsuarioView',
  components: {
    FormCriarTurma,
  },
  created: function () {
    // `this` aponta para a instância
    console.log('a é: ' + this.a)
  }
}
</script>
