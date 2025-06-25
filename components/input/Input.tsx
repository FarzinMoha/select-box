import React from 'react'
import { InputProps } from '@/types'
import styles from './Input.module.scss'

export default function Input({rightIcon, paddingLeft, ...props}: InputProps) {
  return (
      <div className={styles.container}>
        <input className={styles.input} style={{paddingLeft: paddingLeft}} {...props} />
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
  )
}
