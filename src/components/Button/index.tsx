import { FC } from "react";
import classes from './index.module.css';

type ButtonProps = {
  text: string;
  name: string;
  id: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ text, name, id, onClick }) => {
  return (
    <button className={`${classes.button} courier-prime-regular`} name={name} id={id} onClick={onClick}>{text}</button>
  )
}