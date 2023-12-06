import Button from './ui/Button.tsx';
import Input from './ui/Input/Input.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextButton from './ui/TextButton.tsx';
import { ArrowIcon } from './ui/Icons';
import OtpCode from './ui/OtpCode/OtpCode.tsx';
import Link from './ui/Link.tsx';
import { validateNumber } from '../zod/schemes.ts';
import { dateMask, phoneMask } from '../utils/imask.ts';

export interface FormValues {
  test: string;
  otp: string;
  phone: string;
  birthday: string;
}

const Test = () => {
  const {
    handleSubmit, formState: {isValid, isDirty}, control,  // reset,
  } = useForm<FormValues>({
    defaultValues: {
      test: '222',
      otp: '',
      phone: '',
      birthday: '',
    },
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!isValid || !isDirty) {
      return;
    }
    console.log('form submit', data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextButton onClick={() => {}} icon={<ArrowIcon/>}>Назад</TextButton>

      <p>
        Не пришел код?&nbsp;
        <TextButton onClick={() => {}} buttonStyle='blue'>Запросить код еще раз.</TextButton>
      </p>

      <Button type="submit" onClick={() => {}}>
        Зарегистрироваться
      </Button>

      <Input
        control={control}
        label="Имя"
        name="test"
        validationOptions={{
          validate: (value: string) => validateNumber(value) || 'Ошибка! доступные символы - цифры',
          required: 'Поле обязательно для заполнения',
        }}/>

      <Input
        control={control}
        label="Телефон"
        name="phone"
        mask={phoneMask}
        validationOptions={{
          validate: (value: string) => validateNumber(value) || 'Ошибка! доступные символы - цифры',
          required: 'Поле обязательно для заполнения',
        }}/>

      <Input
        control={control}
        label="Дата рождения"
        name="birthday"
        mask={dateMask}
        validationOptions={{
          // validate: (value: string) => validateNumber(value) || 'Ошибка! доступные символы - цифры',
          required: 'Поле обязательно для заполнения',
        }}/>

      <OtpCode control={control}/>

      <p>Соглашаюсь с <Link to='/'>Политикой обработки персональных данных</Link></p>
    </form>
  );
};

export default Test;