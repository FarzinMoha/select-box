import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import SelectBox from "@/components/select-box/SelectBox";
import { useState } from "react";
import Input from "@/components/input/Input";
import { SelectBoxChangeEvent } from "@/types";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"]});
const options = [
  {id: 1, label: 'option 1', value: 'option1'},
  {id: 2, label: 'option 2', value: 'option2'},
  {id: 3, label: 'option 3', value: 'option3'},
  {id: 4, label: 'option 4', value: 'option4'},
  {id: 5, label: 'option 5', value: 'option5'},
  {id: 6, label: 'option 6', value: 'option6'},
  {id: 7, label: 'option 7', value: 'option7'},
  {id: 8, label: 'option 8', value: 'option8'},
  {id: 9, label: 'option 9', value: 'option9'},
  {id: 10, label: 'option 10', value: 'option10'},
]

export default function Home() {
  const [state,setState] = useState({items: null,newOption: '',})
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | SelectBoxChangeEvent) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  return (
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <Input disabled placeholder='Add new Option' name='newOption' value={state.newOption} onChange={onChangeHandler} />
        <SelectBox isDisabled isClearable isMulti name='items' placeholder='Science' options={options} value={state.items} onChange={onChangeHandler} />
      </div>
  );
}
