import React, { useState } from 'react'
import { InputTexto } from '../../components/InputTexto/InputTexto'
import styles from './Login.module.css'
import Formulario from '../../components/Formulario/Formulario'
import { Botao } from '../../components/Botao/Botao'
import api from '../../api'

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  function validarLogin(){
    if (email != "" && senha != ""){
      try{
        api.post("/logar", {email:email, senha:senha}).then(response => {
          alert("Bem vindo, " + response.data.nome + " id: " + response.data.usuarioId);
        })
     }catch(error){
        console.error(error);
      }
    } else{
      alert("Preencha os campos!")
    }
    
  }

  return (
    <div className={styles.page}>
      <div className={styles.imagem}>
        <img src="./public/logo.png" alt="Logo EncenaPE" />
      </div>
      <div className={styles.form}>
        <Formulario>
          <div className={styles.titulo}>Login</div>
          <InputTexto label='Email' placeholder='Informe seu email' value={email} setValue={(e) => setEmail(e.target.value)} />
          <InputTexto label='Senha' placeholder='Informe sua senha' value={senha} setValue={(e) => setSenha(e.target.value)} />

          <div className="d-flex justify-content-between">
            <Botao corBotao='laranja' aoClicar={() => null}>Cancelar</Botao>
            <Botao corBotao='roxo' aoClicar={() => validarLogin()}>Entrar</Botao>
          </div>
        </Formulario>
      </div>
    </div>
  )
}

export default Login