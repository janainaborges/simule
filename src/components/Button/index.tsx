import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...rest }: Props) {
  return (
    <button {...rest} className={styles.buttonLogin}>
      {title}
    </button>
  );
}
