import { FC } from "react";
import classes from './index.module.css';

type Options = {
  text: string;
  value: string | number; 
}

type SelectProps = {
  options: Options[];
  id: string;
  label: string;
  name: string;
  displayCobination?: boolean;
  defaultValue: string | number;
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = ({ options, id, label, name, displayCobination = false, defaultValue, onChange }) => {
  return (
    <label className={classes.select} htmlFor={id}>
      {label}
      <select defaultValue={defaultValue} name={name} id={id} onChange={({ target: { value } }) => onChange(value)}>
        {
          options.map(opt => 
            <option value={opt.value} key={`${opt.value}-${opt.text}`}>
              {
                displayCobination ? 
                `${opt.value} - ${opt.text}` :
                opt.text
              }
            </option>
          )
        }
      </select>
    </label>
  )
}