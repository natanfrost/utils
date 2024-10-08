import './App.css';
import { Container } from './components/Container';
import { Header } from "./components/Header";
import { TranslateKeyConverter } from './pages/TranslateKeyConverter';

function App() {

  return (
    <>
    <Header />
    <Container>
      <TranslateKeyConverter />
    </Container>
    </>
  )
}

export default App
