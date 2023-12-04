import { FC } from 'react';
import { cn } from '../../utils/cn.ts';
import { useForm } from 'react-hook-form';
import OtpCode from '../ui/OtpCode/OtpCode.tsx';
import Timer from '../Timer.tsx';
import TextButton from '../ui/TextButton.tsx';
import { ArrowIcon } from '../ui/Icons';

interface Props {
  phone?: number;
}

const ConfirmPasswordForm: FC<Props> = ({phone = 71234567890}) => {

  const formatPhone = (phone: number) => {
    const phoneStr = phone.toString();

    return `+${phoneStr[0]} ${phoneStr.slice(1, 4)} ${phoneStr.slice(4, 7)} ${phoneStr.slice(7, 9)} ${phoneStr.slice(8, -1)}`;
  }

  const {control} = useForm({
    defaultValues: {
      otp: ''
    }
  });

  return (
    <section className={cn('px-4')}>
      <TextButton onClick={() => {
      }} icon={<ArrowIcon/>}> Назад </TextButton>

      <h1 className={cn('main-h1')}>Подтвердите номер телефона</h1>
      <p className={cn('normal-text-15 mt-3 mb-[42px]')}>
        Мы отправили код на номер {formatPhone(phone)}
      </p>

      <OtpCode control={control}/>

      <Timer className="mt-6"/>

    </section>
  );
};

export default ConfirmPasswordForm;