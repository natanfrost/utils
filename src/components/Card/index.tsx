import { FC, ReactNode } from "react";
import classes from './index.module.css';

type CardProps = {
  children: ReactNode;
  flex: boolean
}

export const Card: FC<CardProps> = ({ children }) => {  
  return (
    <div className={classes.flex}>
      {children}
    </div>
  )
}