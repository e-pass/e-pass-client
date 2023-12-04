import Button from './ui/Button.tsx';
import Input from './ui/Input/Input.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextButton from './ui/TextButton.tsx';
import { ArrowIcon } from './ui/Icons';
import OtpCode from './ui/OtpCode/OtpCode.tsx';
import Link from './ui/Link.tsx';
import { validateNumber } from '../zod/schemes.ts';

export interface FormValues {
  test: string;
  otp: string;
}

const Test = () => {
  const {
    register, handleSubmit, formState: {errors, isValid, isDirty}, control, // reset,
  } = useForm<FormValues>({
    defaultValues: {
      test: '',
      otp: '',
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
        label="Имя"
        name="test"
        register={register}
        errors={errors}
        validationOptions={{
          validate: (value: string) => validateNumber(value) || 'Ошибка! доступные символы - цифры',
          required: 'Поле обязательно для заполнения',
        }}/>

      <OtpCode control={control}/>

      <p>Соглашаюсь с <Link to='/'>Политикой обработки персональных данных</Link></p>
    </form>
  );
};

export default Test;