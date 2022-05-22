<template>
  <div class="home">
    <h1>CRIAR</h1>
    <FormLoginUsuario />
  </div>
</template>

<script>
// @ is an alias to /src
import FormLoginUsuario from '../components/FormLoginUsuario.vue'

export default {
  name: 'LoginUsuarioView',
  components: {
    FormLoginUsuario,
  }
}
</script>
