import { useState } from "react"
import { Container } from "../../components/Container"
import { Input } from "../../components/Input"
import { Typography } from "../../components/Typography"
import { Select } from "../../components/Select"
import { TextArea } from "../../components/TextArea"
import { base } from '../../templates/index';
import useMustache from "../../hooks/useMustache"
import { Card } from "../../components/Card"
import { CopyBlock, nord } from "react-code-blocks"
import { HTTP_OPTIONS, PROMPT_TYPES, STATUS_CODES } from "../../constants"
import useGemini from "../../hooks/useGemini"
import { Button } from "../../components/Button"

type MockGeneratorProps = {
  path: string;
  method: string;
  statusCode: string;
  contract: string;
  promptType: string;
}

const DEFAULT_METHOD = "GET";
const DEFAULT_STATUS_CODE = "200";
const DEFAULT_PROMPT_TYPE = "serio";

export const MockGenerator = () => {
  const { render } = useMustache();
  const { generateMock } = useGemini();

  const [mockData, setMockData] = useState<MockGeneratorProps>({
    path: '',
    contract: '',
    method: DEFAULT_METHOD,
    statusCode: DEFAULT_STATUS_CODE,
    promptType: DEFAULT_PROMPT_TYPE
  });

  const [resultado, setResultado] = useState('');

  const handlePathChange = (value: string) => {
    handleDataChange('path', value);
  }

  const handleStatusCodeChange = (value: string) => {
    handleDataChange('statusCode', value);

  }

  const handleContractChange = (value: string) => {
    handleDataChange('contract', value);
  } 

  const handleMethodChange = (value: string) => {
    handleDataChange('method', value);   
  }

  const handlePromptTypeChange = (value: string) => {
    handleDataChange('promptType', value);   
  }

  const handleDataChange = (key: string, value: string) => {
    setMockData(prev => ({
      ...prev,
      [key]: value
    }));
  }

  const handleTemplate = async () => {
    const generatedMock = await generateMock(mockData.contract, mockData.promptType); 
    const inputData = {
      path: `'${mockData.path}'`,
      method: `'${mockData.method}'`,
      status_code: `${mockData.statusCode}`,
      data: generatedMock,
    };

    const renderResult = render(base, inputData);

    setResultado(renderResult)
  }

  return (
    <Container>
      <Container>
        <Card flex>
          <Container maxWidth="50%">    
            <Typography type="h1" text="Gerador de Mocks" />
            <Input label="Informe o path:" name="path" type="text" onChange={handlePathChange} value={mockData.path} canAutoPaste/>
            <Card flex>
              <Select defaultValue={DEFAULT_METHOD} label="Escolha o método:" id="methods" name="methods" options={HTTP_OPTIONS} onChange={handleMethodChange}/>
              <Select defaultValue={DEFAULT_STATUS_CODE} label="Escolha o status code:" id="methods" name="methods" options={STATUS_CODES} displayCobination onChange={handleStatusCodeChange}/>
            </Card>
            <Select defaultValue={'serio'} options={PROMPT_TYPES} label="Escolha o tipo de dados que você gostaria de gerar:" id="tipo" name="tipo" onChange={handlePromptTypeChange} />
            <TextArea label="Informe o contrato:" name="contract" id="contract" value={mockData.contract} onChange={handleContractChange} />
            <Button id="generate" name="generate" text="Gerar Arquivo de Mock" onClick={handleTemplate}/>
          </Container>
          <Container maxWidth="50%">
            {
              resultado &&
              <>
                <Typography type="h2" text="Resultado:"/>
                <CopyBlock text={resultado} language="js" theme={nord} wrapLongLines customStyle={{'width': '100%'}}/> 
              </>
            }
          </Container>  
        </Card>
      </Container>
    </Container>
  )
}