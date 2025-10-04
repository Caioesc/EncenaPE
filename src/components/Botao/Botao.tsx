import React, { Children } from 'react'
import styles from './Botao.module.css'

type Props = {
    children: React.ReactNode,
    aoClicar: () => void;
    corBotao: "laranja" | "roxo" | "branco"
}

export const Botao = ({children, aoClicar, corBotao}:Props ) => {
  return (
    <>
        <button 
        onClick={aoClicar} 
        className={`btn btn-primary 
            ${corBotao == "laranja" ? styles.botaoLaranja : corBotao == "roxo" ? styles.botaoRoxo : styles.botaoBranco}`}>
                {children}
        </button>
    </>
  )
}
