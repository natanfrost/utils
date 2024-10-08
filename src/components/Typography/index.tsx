import { FC } from "react";
import classes from './index.module.css';

type TypographyProps = {
  text: string;
  type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Typography: FC<TypographyProps> = ({ text, type }) => {
  const Component = type;

  return (
    <Component className={classes.text}>{text}</Component>
  )
}