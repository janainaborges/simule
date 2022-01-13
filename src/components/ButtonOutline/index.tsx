import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface ButtonOutlineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string
  title: string
  amount?: number
}

export default function ButtonOutline({ icon, title, amount, ...rest }: ButtonOutlineProps) {
  return (
    <button
      {...rest}
      className={styles.buttonOutline}
    >

      {
        icon &&
        <img src={icon} alt={`Icone do ${title}`} />
      }

      <p>{title}</p>

      {
        amount &&
        <div className={styles.amount}>
          {amount}
        </div>
      }
    </button>
  )
}