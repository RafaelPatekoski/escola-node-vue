<template>
  <div class="home">
    <h1>CRIAR</h1>
    <FormCriarUsuarioVue></FormCriarUsuarioVue>
  </div>
</template>

<script>
// @ is an alias to /src
import FormCriarUsuarioVue from '../components/CriarUsuario/FormCriarUsuario.vue'

export default {
  name: 'CriarUsuarioView',
  components: {
    FormCriarUsuarioVue,
  }
}
</script>
