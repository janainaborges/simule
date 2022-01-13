import { useState } from 'react'
import ButtonOutline from '../ButtonOutline'
import { CooperativeProps } from '../CooperativesList'
import ListHeader from '../ListHeader'
import SearchBox from '../SearchBox'
import { Pagination } from './Pagination'
import styles from './styles.module.scss'

interface DefaultListProps {
  list?: CooperativeProps[]
  title?: string
  subtitle?: string
}

export default function DefaultList({ list = [], title = '', subtitle = '' }: DefaultListProps) {
  const [search, setSearch] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [openDropDown, setOpenDropDown] = useState(false)

  function formatValue(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    }).format(value)
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.defaultList} ${list.length === 0 ? styles.emptyList : ''}`}>
        <ListHeader
          title={title}
          subtitle={subtitle}
        >
          <div className={styles.filter}>
            <ButtonOutline
              icon='/icons/Filter.svg'
              title='Filtros'
            />

            <SearchBox
              search={search}
              setSearch={setSearch}
            />
          </div>
        </ListHeader>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>
                Nome completo
              </th>
              <th>
                Tipo da conta
              </th>
              <th>
                Renda/Faturamento Mensal
              </th>
              <th>
                Ações
              </th>
            </tr>
          </thead>

          <tbody>

            {
              list.map(item => {
                return (
                  <tr key={item.id}>
                    <td>
                      {item.name}
                    </td>

                    <td>
                      {item.type}
                    </td>

                    <td>
                      {formatValue(item.income / 100)}
                    </td>

                    <td>
                      <ButtonOutline
                        icon='/icons/Eye.svg'
                        title='Ver detalhes'
                      />
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>

        {
          list.length === 0 &&
          <div className={styles.emptyListMessage}>
            <img
              src='/icons/emptyList.svg'
              alt='Icone de Lista Vazia'
            />

            <div>
              <h1>Não encontrado!</h1>

              <h2>Não foi possível localizar o cooperado.<br />
                Verifique os dados digitados e tente novamente. </h2>
            </div>

          </div>
        }

      </div>

      <Pagination
        isOpen={openDropDown}
        setIsOpen={setOpenDropDown}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  )
}