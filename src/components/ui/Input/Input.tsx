import React, { ComponentProps, FC, ReactNode } from 'react'
import './dynamic-label.css';
import { cn } from '../../../utils/cn.ts'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ErrorIcon } from '../Icons';

interface Props extends ComponentProps<'input'> {
  name: string;
  register: UseFormRegister<any>;
  validationOptions?: Record<string, any>;
  errors: FieldErrors<any>;
  label?: string;
  type?: 'text' | 'password' | 'email';
  icon?: React.ReactNode;
  onIconClick?: () => void;
  width?: number | string;
}

const Input: FC<Props> = (
  { name,
    validationOptions,
    register,
    errors,
    label = '',
    type = 'text',
    width = 343,
  }) => {
  return (
    <div className={cn('flex flex-col gap-2')} style={{ maxWidth: width }}>
      <label className={cn('relative')}>
        {!!errors[name] && <ErrorIcon className={cn('absolute top-2/4 right-4 translate-y-[-50%]')} />}
        <input
          className={cn(`
            input w-full px-4 pt-7 pb-3 border rounded-xl normal-text-17 placeholder:text-[rgba(0,0,0,0)]
            ${errors[name] ? 'border-error text-error' :'border-gray-80'} outline-blue`)}
          type={type}
          placeholder='placeholder'
          {...register}
          {...register(name, validationOptions)} />

        <span className={cn(`
          label normal-text-17 text-text opacity-50 absolute top-2/4 left-[17px] 
          translate-y-[-50%] transition-[transform,font-size]`)}>
          {label}
        </span>

      </label>
      {errors[name] && (
        <span className={cn('normal-text-13 text-error ml-4')}>
          {errors[name]?.message as ReactNode}
        </span>)
      }
    </div>
  )
}

export default Input;
