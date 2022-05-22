<template>
    <div>
        <input type="text" name="usuario" id="usuario">
        <input type="password" name="senha" id="senha" placeholder="SENHA">
        <br>
        <button v-on:click="logar">Logar</button>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name: "FormLoginUsuario",
    props: {
        login: String,
    },
    methods: {
        logar: function (){
        axios.post("http://localhost:3000/usuario/login", {usuario: document.getElementById('usuario').value, senha: document.getElementById('senha').value} ).then((response) => {
            console.log(response.data);
            document.cookie = `token=${response.data.token}`
            window.location.href = '/'
            }, (error) => {
                console.log(error);
            });
        }
    }
}
</script>
