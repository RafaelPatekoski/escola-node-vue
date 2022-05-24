<template>
    <div class="formcriarprofessor">
        <input type="text" name="ano" id="ano" placeholder="Ano Turma ex: 1° "><br>
        <input type="text" name="classe" id="classe" placeholder="Classe ex: A"><br>
        <input type="text" name="sala" id="sala" placeholder="ex: Sala 3"><br>
        <select name="professor" id="professor">
            <option v-for="professor in professores" :key="professor" :value='professor._id'>{{ professor.nomeProfessor }}</option>
        </select>
        <br>
        <button v-on:click="criar">Cadastrar</button>
        <br>
    </div>
</template>
<script>
import axios from 'axios'

export default{
    name: "FormCriarProfessor",
    data() {
        return {
            professores: {}
        }
    },
    props: {
        login: String,
    },
    mounted() {
        try{
            axios.get('http://localhost:3000/professor').then(resp => {
            console.log('aqui chefe')
            this.professores = resp.data
            console.log(this.professores)
        });
        } catch(error){
            console.log('deu errado')
            this.professores = {autorizacao:'fazerlogin'}
        }
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
        axios.put("http://localhost:3000/turma", {anoTurma: document.getElementById('ano').value, classeTurma: document.getElementById('classe').value, professorTurma: document.getElementById('professor').value,salaTurma: document.getElementById('sala').value}, {
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
