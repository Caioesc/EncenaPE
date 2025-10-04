import React from 'react'
import Formulario from '../../components/Formulario/Formulario'
import { InputTexto } from '../../components/InputTexto/InputTexto'
import { Botao } from '../../components/Botao/Botao'
import styles from './Cadastro.module.css'


const Cadastro = () => {
    return (
        
    <div className= {styles.page}>  
        <div className={styles.imagem}>
            <img src="./public/logo.png" alt="Logo EncenaPE" />
        </div>
        <div className={styles.form}>
        <Formulario>
            <div className={styles.titulo}>Cadastre-se</div>
            <InputTexto label='Nome' placeholder='Informe seu nome' />
            <InputTexto label='Email' placeholder='Informe seu email' />
            <InputTexto label='Senha' placeholder='Informe sua senha' />
           
            <div className="d-flex justify-content-between">
                <Botao corBotao='laranja' aoClicar={() => null}>Cancelar</Botao>
                <Botao corBotao='roxo' aoClicar={() => null}>Cadastrar</Botao>
            </div>
        </Formulario>
        </div>
    </div> 
    )
}

export default Cadastro