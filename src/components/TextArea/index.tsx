import { FC } from "react";
import classes from './index.module.css';

type TextAreaProps = {
  name: string;
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}
export const TextArea: FC<TextAreaProps> = ({ id, name, value, onChange, label }) => {
  return (
    <label className={classes.textArea} htmlFor={id}>
      {label}
      <textarea name={name} id={id} value={value} onChange={({ target: { value } }) => onChange(value)}/>
    </label>
  )
}