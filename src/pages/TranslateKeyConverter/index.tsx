import { useState } from "react"
import { Container } from "../../components/Container"
import { Input } from "../../components/Input"
import { Typography } from "../../components/Typography"
import { Card } from "../../components/Card"
import { AiOutlineCopy } from "react-icons/ai"

export const TranslateKeyConverter = () => {
  const [translateKey, setTranslateKey] = useState('');
  const [convertedKey, setConvertedKey] = useState('')

  const handleConvert = (value: string) => {
    return value.toUpperCase().replaceAll('.', '_');
  }
  
  const handleChange = (value: string) => {
    setTranslateKey(value);
    setConvertedKey(handleConvert(value));
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(convertedKey)
  }

  return (
    <Container>
      <Container maxWidth="70%">
        
      <Typography type="h2" text="Conversor de chaves de tradução" />
      <Input name='teste' onChange={handleChange} label='Informe a chave para conversão:' type='text' canAutoPaste value={translateKey}/>
      {
        convertedKey && 
        <>
          <Typography type='p' text='Chave convertida:' />
          <Card flex>
            <Typography type='p' text={convertedKey} />
            <AiOutlineCopy size={32} cursor='pointer' onClick={handleCopy}/>
          </Card>
        </>
      }
      </Container>
    </Container>
  )
}