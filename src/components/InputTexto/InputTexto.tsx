import React from 'react'
import styles from './InputTexto.module.css'

interface Props{
    placeholder: string,
    label: string,
    value: string,
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const InputTexto = ({placeholder, label, value, setValue}:Props) => {
  return (
    <>  
        <div className={styles.label}>{label}</div>
        <input className={`form-control ${styles.input}`} type="text" placeholder={placeholder} value={value} onChange={setValue}/>
    </>
)}