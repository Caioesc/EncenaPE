import React from 'react'
import styles from './InputTexto.module.css'

interface Props{
    placeholder: string,
    label: string
}

export const InputTexto = ({placeholder, label}:Props) => {
  return (
    <>  
        <div className={styles.label}>{label}</div>
        <input className={`form-control ${styles.input}`} type="text" placeholder={placeholder}/>
    </>
)}