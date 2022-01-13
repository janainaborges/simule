import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ListHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function ListHeader({ title, subtitle, children }: ListHeaderProps) {
  return (
    <header className={styles.listHeader}>
      <div className={styles.title}>
        <h1>{title}</h1>

        {subtitle &&
          <h2>{subtitle}</h2>
        }
      </div>

      {children}
    </header>
  )
}