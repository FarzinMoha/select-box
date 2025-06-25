import React from 'react'
import { InputProps } from '@/types'
import styles from './Input.module.scss'

export default function Input({rightIcon, ...props}: InputProps) {
  return (
      <div className={styles.container}>
        <input className={styles.input} {...props} />
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
  )
}
