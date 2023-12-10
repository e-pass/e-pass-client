import { FC } from 'react';
import { cn } from '../../utils/cn.ts';
import { Control } from 'react-hook-form';
import OtpCode from '../ui/OtpCode/OtpCode.tsx';
import Timer from '../Timer.tsx';
import TextButton from '../ui/TextButton.tsx';
import { ArrowIcon } from '../ui/Icons';
import { TLoginValues, TRegisterValues } from '../../types/formTypes.ts';

interface Props {
  control: Control<TLoginValues> | Control<TRegisterValues>;
  onBackClick: () => void;
  phone: string;
}

const ConfirmPasswordForm: FC<Props> = ({control, onBackClick, phone}) => {

  const formatPhone = (phone: string) => {
    return `+${phone[0]} ${phone.slice(1, 4)} ${phone.slice(4, 7)} ${phone.slice(7, 9)} ${phone.slice(8, -1)}`;
  }

  return (
    <section>
      <TextButton onClick={onBackClick} icon={<ArrowIcon/>}>Назад</TextButton>

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