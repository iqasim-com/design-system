import {InputProps} from "./types";
import {FC} from "react";

const Input: FC<InputProps> = ({placeholder, type, onChange, value, additionalClasses}) => {
  return <input className={additionalClasses} type={type} placeholder={placeholder} onChange={onChange} value={value} />
};

export default Input;
