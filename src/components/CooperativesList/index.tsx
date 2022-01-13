import DefaultList from "../DefaultList"

export interface CooperativeProps {
  id: string
  name: string
  type: string
  income: number
}

const cooperativesTest: CooperativeProps[] = [
  {
    id: '1',
    name: 'Darlene Robertson Simmons',
    type: 'Pessoa Fisíca',
    income: 99999999
  },
  {
    id: '2',
    name: 'Darlene Warren Alexander',
    type: 'Pessoa Jurídica',
    income: 99999999
  },
  {
    id: '3',
    name: 'Darlene Murphy Edwards',
    type: 'Pessoa Jurídica',
    income: 99999999
  },
]


export default function CooperativesList() {
  return (
    <DefaultList
      list={cooperativesTest}
      title='Cooperados'
      subtitle='Lista de Cooperados registrados na Plataforma'
    />
  )
}
