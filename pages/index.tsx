import styles from "@/styles/Home.module.scss";
import SelectBox from "@/components/select-box/SelectBox";
import { useState } from "react";
import Input from "@/components/input/Input";
import { SelectBoxChangeEvent } from "@/types";

const defaultOptions = [
  {
    id: 1,
    value: "education",
    label: "Education 🎓",
  },
  {
    id: 2,
    value: "science",
    label: "Yeeeah, science! 🧪",
  },
  {
    id: 3,
    value: "art",
    label: "Art 🖼️🎭",
  },
  {
    id: 4,
    value: "sport",
    label: "Sport ⚽",
  },
  {
    id: 5,
    value: "games",
    label: "Games 🎮",
  },
  {
    id: 6,
    value: "health",
    label: "Health 🏥",
  },
]

export default function Home() {
  const [state,setState] = useState({items: null,newOption: '',})
  const [options,setOptions] = useState(defaultOptions);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | SelectBoxChangeEvent) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = options[options.length - 1].id + 1;
    setOptions([...options, {id: newId, label: state.newOption, value: state.newOption}]);
    setState({...state, newOption: ''});
  };

  return (
      <div className={styles.page}>
        <div className={styles.boxContainer}>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <Input placeholder='Add new Option and press enter' name='newOption' value={state.newOption} onChange={onChangeHandler} />
        </form>
        <SelectBox isClearable isMulti name='items' placeholder='Science' options={options} value={state.items} onChange={onChangeHandler} />
        </div>
      </div>
  );
}
