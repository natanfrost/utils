import useColorScheme from '../../hooks/useColorScheme';

import { AiOutlineSun, AiOutlineMoon } from 'react-icons/ai'

import './index.module.scss';

export const SwitchTheme = () => {
  const [colorScheme, toggle] = useColorScheme();

  const icon = colorScheme === 'dark' ? <AiOutlineMoon size={32} style={{color: 'var(--eerie-black)'}}/> : <AiOutlineSun size={32} />

  return (
    <button onClick={toggle}>
      {icon}
    </button>
  )
}