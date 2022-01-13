import styles from './styles.module.scss'

interface SearchBoxProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBox({ search, setSearch }: SearchBoxProps) {
  return (
    <div className={styles.searchBox}>
      <img src="/icons/search.svg" alt="Icone de busca" />

      <input
        type="text"
        placeholder='Buscar'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />

      <img
        src="/icons/Cancel.svg"
        alt="Icone de limpar busca"
        className={`${styles.cancelButton} ${search ? styles.visible : ''}`}
        title='Limpar busca'
        onClick={() => setSearch('')}
      />
    </div>
  )
}