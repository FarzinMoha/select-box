export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  rightIcon?: React.ReactNode;
  paddingLeft?: string;
};

export type SelectOption = {
  id: number;
  label: string;
  value: string;
};

export type SelectBoxChangeEvent = {
  target: {
    name: string;
    value: SelectOption[] | null | SelectOption;
  };
};

export type SelectBoxProps = {
  isMulti?: boolean;
  isDisabled?: boolean;
  isClearable?: boolean;
  options: SelectOption[];
  name: string;
  placeholder?: string;
  value: SelectOption[] | null | SelectOption;
  onChange: (e: SelectBoxChangeEvent) => void;
};