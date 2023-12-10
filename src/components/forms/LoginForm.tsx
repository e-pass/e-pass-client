import { cn } from '../../utils/cn.ts';
import Link from '../ui/Link.tsx';
import Input from '../ui/Input/Input.tsx';
import { Control } from 'react-hook-form';
import { TLoginValues } from '../../types/formTypes.ts';
import { FC } from 'react';
import { phoneMask } from '../../utils/imask.ts';
import Button from '../ui/Button.tsx';

interface Props {
  control: Control<TLoginValues>;
  onClick: () => void;
  isButtonDisabled: boolean;
}

const LoginForm: FC<Props> = ({control, onClick, isButtonDisabled}) => {
  return (
    <section>

      <h1 className={cn('main-h1')}>Вход в систему</h1>
      <p className={cn('inline-flex gap-2 normal-text-15 pt-3')}>
        Нет аккаунта?
        <Link to='/register'>Зарегистрироваться</Link>
      </p>

      <Input
        name='phone'
        control={control}
        label='Номер телефона'
        mask={phoneMask}
        validationOptions={{
          required: true,
          minLength: 11,
        }}
        className='pt-[42px] pb-9'/>

      <Button type='submit' onClick={onClick} disabled={isButtonDisabled}>
        Войти
      </Button>

    </section>
  );
};

export default LoginForm;