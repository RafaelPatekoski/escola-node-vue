<template>
    <div>
        <input type="text" name="usuario" id="usuario">
        <input type="password" name="senha" id="senha" placeholder="SENHA">
        <input type="text" name="autorizacao" id="autorizacao">
        <br>
        <button v-on:click="criar">Logar</button>
        <br>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name: "FormCriarUsuario",
    props: {
        login: String,
    },
    methods: {
        pegarcookie: function(name){
        let cookie = {};
        //CREDITOS : https://www.horadecodar.com.br/2022/03/14/como-pegar-um-cookie-pelo-nome-em-javascript/
        document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
        })
        //FAZER A FUNÇÃO PARA PEGAR O USUARIO USANDO AXIOS E USANDO O HEADER PARA PROVAR QUE ESTOU LOGADO...
        
        return cookie[name];
        
        },
        criar: function (){
        axios.post("http://localhost:3000/usuario", {usuario: document.getElementById('usuario').value, autorizacao: document.getElementById('autorizacao').value ,senha: document.getElementById('senha').value}, {
            headers: {
                'token': this.pegarcookie('token')
            }
        } ).then(() => {
            window.location.href = '/'
            }, (error) => {
                console.log(error);
            });
        }
    }
}
</script>
