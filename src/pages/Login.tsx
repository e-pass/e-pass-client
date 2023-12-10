import LoginForm from '../components/forms/LoginForm.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TLoginValues } from '../types/formTypes.ts';
import { cn } from '../utils/cn.ts';
import { useState } from 'react';
import ConfirmPasswordForm from '../components/forms/ConfirmPasswordForm.tsx';

const Login = () => {
  const { handleSubmit, control, formState: {isValid, isDirty}, getValues } = useForm<TLoginValues>({
    defaultValues: {
      phone: '',
      otp: '',
    },
  })

  const onSubmit: SubmitHandler<TLoginValues> = (data) => console.log(data);

  const [step, setStep] = useState(0);

  const onBack = () => setStep(0);

  const onNextStep = () => setStep(1);

  return (
    <main className={cn('px-4')}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn('max-w-[343px] mx-auto')}>
        {step === 0 && <LoginForm control={control} onClick={onNextStep} isButtonDisabled={!isValid || !isDirty}/>}
        {step === 1 && <ConfirmPasswordForm control={control} onBackClick={onBack} phone={getValues("phone")}/>}
      </form>
    </main>
  );
};

export default Login;