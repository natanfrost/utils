import { ReactNode } from "react";
import classes from './index.module.css';

type ContainerProps = {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}