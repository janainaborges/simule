import LoginForm from './components/LoginForm';

import styles from "./styles/style.module.scss";

export default function App() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
