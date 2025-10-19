import React, { useEffect, useState } from 'react'
import Formulario from '../../components/Formulario/Formulario'
import { InputTexto } from '../../components/InputTexto/InputTexto'
import { Botao } from '../../components/Botao/Botao'
import styles from './Cadastro.module.css'
import api from "../../api.tsx"
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {

    //Campos do formulário de cadastro
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    //Controladores dos campos
    const [controladorNome, setControladorNome] = useState<boolean>(false);
    const [controladorEmail, setControladorEmail] = useState<boolean>(false);
    const [controladorSenha, setControladorSenha] = useState<boolean>(false);

    //Navigate
    const navigate = useNavigate()


    const [submitOcorreu, setsubmitOcorreu] = useState<boolean>(false);

    async function validarCadastro() {
        setsubmitOcorreu(true);
        if (nome != "" && email != "" && senha != "") {

            await api.post("/cadastrar", { nome: nome, email: email, senha: senha }).then(response => { alert("Usuário cadastrado com sucesso!")
            , navigate('/login')})
            .catch(error => { alert("Atenção: " + error.response.data)});
             
        } else {
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
                    <div className={styles.titulo}>Cadastre-se</div>
                    <InputTexto label='Nome' placeholder='Informe seu nome' value={nome} setValue={(e: any) => setNome(e.target.value)} />
                    <InputTexto label='Email' placeholder='Informe seu email' value={email} setValue={(e: any) => setEmail(e.target.value)} />
                    <InputTexto label='Senha' placeholder='Informe sua senha' value={senha} setValue={(e: any) => setSenha(e.target.value)} />

                    <div className="d-flex justify-content-between">
                        <Botao corBotao='laranja' aoClicar={() => null}>Cancelar</Botao>
                        <Botao corBotao='roxo' aoClicar={() => validarCadastro()}>Cadastrar</Botao>
                    </div>
                </Formulario>
            </div>
        </div>
    )
}

export default Cadastro