import styles from './styles.module.scss'

interface DropDownProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

  itemsPerPage: number
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>
}

export function Pagination({
  isOpen,
  setIsOpen,
  itemsPerPage,
  setItemsPerPage
}:
  DropDownProps) {

  function setItensPerPageDropDown(amount: number) {
    setItemsPerPage(amount)
    setIsOpen(false)
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.view}>
        <strong>Exibindo: </strong>

        <div className={styles.dropdownPagination}>
          <div
            className={styles.openDropDown}
            onClick={() => setIsOpen(true)}
          >
            <strong>{itemsPerPage}</strong>

            <img src="/icons/arrowDropDown.svg" alt="Icone do dropdown" />
          </div>

          <div className={`${styles.options} ${isOpen ? styles.isOpen : ''}`}>
            <div
              className={styles.currentOption}
              onClick={() => setIsOpen(false)}
            >
              <strong>{itemsPerPage}</strong>
              <img src="/icons/arrowDropDown.svg" alt="Icone do dropdown" />
            </div>

            <div
              className={`${styles.option} ${itemsPerPage !== 15 ? styles.notSelected : ''}`}
              onClick={itemsPerPage !== 15 ? () => setItensPerPageDropDown(15) : () => { }}
            >
              <strong>15</strong>
            </div>

            <div
              className={`${styles.option} ${itemsPerPage !== 25 ? styles.notSelected : ''}`}
              onClick={itemsPerPage !== 25 ? () => setItensPerPageDropDown(25) : () => { }}
            >
              <strong>25</strong>
            </div>

            <div
              className={`${styles.option} ${itemsPerPage !== 50 ? styles.notSelected : ''}`}
              onClick={itemsPerPage !== 50 ? () => setItensPerPageDropDown(50) : () => { }}
            >
              <strong>50</strong>
            </div>
          </div>
        </div>

        <strong className={styles.lightColor}>de 50</strong>
      </div>

      <div className={styles.pageSelector}>
        <button>&#8249;</button>

        <div className={styles.setPage}>
          <div className={styles.currentPage}>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
          <div>
            5
          </div>
        </div>

        <button>&#8250;</button>
      </div>
    </div>
  )
}