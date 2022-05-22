<template>
    <div class="formcriarprofessor">
        <input type="text" name="nome" id="nome" placeholder="Nome"><br>
        <input type="date" name="nascimento" id="nascimento"><br>
        <input type="text" name="endereco" id="endereco" placeholder="Endereço"><br>
        <input type="text" name="formacao" id="formacao" placeholder="Formação"><br>
        <input type="text" name="genero" id="genero" placeholder="Genero"><br>
        <br>
        <button v-on:click="criar">Logar</button>
        <br>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name: "FormCriarProfessor",
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
        let professor = {}
        professor.nomeProfessor =  document.getElementById('nome').value
        professor.nascimentoProfessor = document.getElementById('nascimento').value
        professor.enderecoProfessor = document.getElementById('endereco').value
        professor.formacaoProfessor = document.getElementById('formacao').value
        professor.generoProfessor = document.getElementById('genero').value
        axios.put("http://localhost:3000/professor", {nomeProfessor: document.getElementById('nome').value, enderecoProfessor: document.getElementById('endereco').value, nascimentoProfessor: document.getElementById('nascimento').value,formacaoProfessor: document.getElementById('formacao').value, generoProfessor: document.getElementById('genero').value}, {
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
