import { SwitchTheme } from '../SwitchTheme'
import classes from './index.module.css'
export const Header = () => {
  return (
    <header className={classes.header}>
      <SwitchTheme />
    </header>
  )
}