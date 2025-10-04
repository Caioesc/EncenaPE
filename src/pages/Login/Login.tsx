import React from 'react'
import { InputTexto } from '../../components/InputTexto/InputTexto'
import styles from './Login.module.css'
import Formulario from '../../components/Formulario/Formulario'
import { Botao } from '../../components/Botao/Botao'

const Login = () => {
  return (
    <div className= {styles.page}>  
        <div className={styles.imagem}>
            <img src="./public/logo.png" alt="Logo EncenaPE" />
        </div>
        <div className={styles.form}>
        <Formulario>
            <div className={styles.titulo}>Login</div>
            <InputTexto label='Email' placeholder='Informe seu email' />
            <InputTexto label='Senha' placeholder='Informe sua senha' />
           
            <div className="d-flex justify-content-between">
                <Botao corBotao='laranja' aoClicar={() => null}>Cancelar</Botao>
                <Botao corBotao='roxo' aoClicar={() => null}>Entrar</Botao>
            </div>
        </Formulario>
        </div>
    </div> 
  )
}

export default Login