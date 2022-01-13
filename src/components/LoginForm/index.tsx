import React from 'react';
import styles from './styles.module.scss';
import Button from '../Button';

import { useForm } from 'react-hook-form';

interface LoginFormProps {
  email: string;
  password: string;
}

const FormLogin: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<LoginFormProps>({mode:"onChange"});

  async function onSubmit(data: LoginFormProps) {
    console.log(data);
  }


  return (
    <div className={styles.container}>
      <section className={styles.box} id="login">
        <div className={styles.containerLogin}>
          <h1 className={styles.containerTitle}>Acessar conta</h1>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputForm}>
              <div>
                <label>
                  <h3 className={styles.labelForm}>Nome do usuário</h3>
                </label>
                <input
                  {...register('email', { required: 'Campo obrigatório' })}
                  placeholder="Digite seu usuário"
                  className={styles.placeInput}
                  type="email"
                />
                {errors.email && <span>{errors.email?.message}</span>}

                <label htmlFor="password">
                  <h3 className={styles.labelForm}>Senha</h3>
                </label>
                <input
                  {...register('password', { required: 'Campo obrigatório' })}
                  type="password"
                  placeholder="Digite sua senha"
                  className={styles.placeInput}

                />
                {errors.password && <span>{errors.password?.message}</span>}
              </div>
            </div>
            <div>
              <div>
                <div className={styles.forgotPassword}>
                    <h3>Esqueceu sua senha?</h3>
                </div>
              </div>
              <div>
                <Button className="btn" title="Entrar" type="submit" disabled={ (watch("email")?.length >= 1 || watch("password")?.length >= 1) && !isValid} />
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className={styles.loginImage}></div>
    </div>
  );
};

export default FormLogin;
