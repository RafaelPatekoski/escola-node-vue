<template>
  <div class="home">
    <h1>CRIAR</h1>
    <FormCriarProfessorVue></FormCriarProfessorVue><br>
    <button><router-link to="/professores">VOLTAR</router-link></button>
  </div>
</template>

<script>
// @ is an alias to /src
import FormCriarProfessorVue from '@/components/Forms/FormCriarProfessor.vue'

export default {
  name: 'CriarUsuarioView',
  components: {
    FormCriarProfessorVue,
  }
}
</script>
