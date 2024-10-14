import { ReactNode } from "react";
import classes from './index.module.css';

type ContainerProps = {
  children: ReactNode;
  maxWidth?: string;
}

export const Container: React.FC<ContainerProps> = ({children, maxWidth = "100%"}) => {
  
  return (
    <div className={classes.container} style={{maxWidth: maxWidth}}>
      {children}
    </div>
  )
}