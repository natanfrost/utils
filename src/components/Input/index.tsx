import { AiOutlineImport } from 'react-icons/ai';
import classes from './index.module.css'

type InputProps = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select';
  value: string;
  onChange: (value: string) => void;
  canAutoPaste: boolean
}
export const Input = ({name, label, type, value, onChange, canAutoPaste}: InputProps) => {
  
  const handlePaste = async () => {
    const pastedText = await navigator.clipboard.readText()
    onChange(pastedText);
  }

  return (
    <><label className={classes.field}>
      {label}
      <div className={classes.inputContainer}>
        <input 
          type={type} 
          name={name} 
          value={value} 
          onChange={({ target: {value} }) => onChange(value)} 
        />
        
        {
          canAutoPaste &&
          <AiOutlineImport onClick={handlePaste} className={classes.icon} size={32} title='Colar texto'/>
        }
      </div>
    </label></>
  )
}