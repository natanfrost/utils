import { Link } from 'react-router-dom'
import { SwitchTheme } from '../SwitchTheme'
import classes from './index.module.css'
export const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
          <ul>
            <li>
              <Link to='/utils/translate-key-converter'>Conversor de chave de tradução</Link>
            </li>
            <li>
              <Link to={`/utils/mock-file-generator`}>Gerador de arquivo de mock</Link>
            </li>
          </ul>
        </nav>
      <SwitchTheme />
    </header>
  )
}