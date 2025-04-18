import {ButtonProps} from "./types";
import {FC} from "react";
import './button.css';

const Button: FC<ButtonProps> = ({children, variant, size, click}) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={click}>
      {children}
    </button>
  )
}

export default Button;
