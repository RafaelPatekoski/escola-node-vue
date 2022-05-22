<template>
   <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="usuario.autorizacao === 'adm'" to="/criarusuario">Criar Usuario</router-link>
    <router-link v-if="usuario.autorizacao === 'secretario'" to="/turmas">Turmas</router-link>
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
