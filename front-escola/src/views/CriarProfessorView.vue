<template>
  <div class="home">
    <h1>CRIAR</h1>
    <FormCriarProfessorVue></FormCriarProfessorVue>
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
