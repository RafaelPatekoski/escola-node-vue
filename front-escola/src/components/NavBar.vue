<template>
   <nav>
    <router-link to="/">Home</router-link> |
    <div class="autorizado" v-if="usuario.autorizacao">
      <router-link to="/turmas">Turmas</router-link> |
      <router-link to="/professores">Professores</router-link> |
      <router-link to="/alunos">Alunos</router-link> |
    </div>
    <router-link v-if="usuario.autorizacao === 'adm'" to="/criarusuario">Criar Usuario</router-link>
    <router-link v-if="!usuario.autorizacao" to="/login">Fazer Login</router-link> 
  </nav>
</template>
<script>
export default{
    name: "NavBar",
    props: {
        usuario: Object,
    }
}
</script>
<style scoped>
  .autorizado{
    display: inline;
  }
</style>