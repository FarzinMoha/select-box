import React, { forwardRef } from 'react'
import { InputProps } from '@/types'
import styles from './Input.module.scss'

function InputComponent(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  const {rightIcon, paddingLeft ,...rest} = props;
  return (
      <div className={styles.container}>
        <input ref={ref} className={styles.input} style={{paddingLeft: paddingLeft,paddingRight: rightIcon ? '50px' : '10px'}} {...rest} />
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
      </div>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent);
Input.displayName = 'Input';
export default Input;
