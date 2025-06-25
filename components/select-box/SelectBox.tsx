import React, { useEffect, useRef, useState } from 'react'
import Input from '../input/Input'
import { IoIosArrowDown, IoIosCloseCircleOutline } from 'react-icons/io'
import styles from './SelectBox.module.scss'
import { SelectBoxProps, SelectOption } from '@/types';
import { FaCheck } from 'react-icons/fa';

export default function SelectBox({options, name, placeholder,value, onChange, isMulti = false, isDisabled = false, isClearable = false}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const values = isMulti ? (value as SelectOption[])?.map((option) => option.label).join(', ') ?? [] : (value as SelectOption)?.label || '';

  const toggleOptions = () => !isDisabled && setIsOpen(!isOpen)
  const onClickOptionHandler = (option:SelectOption) => {
    if(isMulti){
      const existingValue = (value as SelectOption[])?.find((item:SelectOption) => item.id === option.id);
      if (existingValue) {
        onChange({target: {name, value: (value as SelectOption[])?.filter((removedItem:SelectOption) => removedItem.id !== option.id)}})
      } else {
        onChange({target: {name, value: [...(value as SelectOption[] || []), option]}})
      }
    }else{
      const existingValue = (value as SelectOption)?.id === option.id;
      if(existingValue){
        onChange({target: {name, value: null}})
      }else{
        onChange({target: {name, value:option}})
      }
      setIsOpen(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef}  className={styles.container} >
        {isMulti && isClearable && !isDisabled && values.length > 0 && <IoIosCloseCircleOutline className={styles.clear} onClick={() => onChange({target: {name, value: null}})} size={25} /> }
        <Input disabled={isDisabled} paddingLeft={isMulti && isClearable && !isDisabled && values.length > 0 ? '50px' : '10px'} onClick={toggleOptions} placeholder={placeholder} name={name} value={values} readOnly rightIcon={<IoIosArrowDown onClick={toggleOptions} className={isOpen ? styles.rotate : ''} size={20} />} />
        <div className={`${styles.options} ${isOpen ? styles.open : ''}`}>
          {options.map((option) => (
            <div onClick={() => onClickOptionHandler(option)} key={option.id} className={`${styles.option} ${values.includes(option.label) ? styles.selected : ''}`}>
              {option.label}
              {values.includes(option.label) && <FaCheck className={styles.check} size={13} />}
            </div>
          ))}
        </div>
    </div>
  )
}