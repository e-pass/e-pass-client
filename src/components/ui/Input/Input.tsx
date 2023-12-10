import React, { ComponentProps, FC, LegacyRef } from 'react'
import './dynamic-label.css';
import { cn } from '../../../utils/cn.ts'
import { Control, Controller } from 'react-hook-form';
import { ErrorIcon } from '../Icons';
import { useIMask } from 'react-imask';
import { maskPropType } from '../../../utils/imask.ts';

export interface InputProps extends ComponentProps<'input'> {
  name: string;
  control: Control<any>;
  validationOptions?: Record<string, any>;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  icon?: React.ReactNode;
  onIconClick?: () => void;
  width?: number | string;
  mask?: maskPropType;
  className?: string;
}

const Input: FC<InputProps> = (
  {
    name,
    validationOptions = {},
    label = '',
    type = 'text',
    width = 343,
    mask = {mask: /[\S\s]/},
    control,
    className,
  }) => {

  const {ref: maskRef, unmaskedValue} = useIMask(mask);

  return (
    <Controller
      name={name}
      control={control}
      rules={validationOptions}
      render={({field, fieldState}) => {
        const errorMessage = fieldState.error?.message;

        return (
          <div className={cn('flex flex-col gap-2', className)} style={{maxWidth: width}}>
            <label className={cn('relative')}>
              {!!errorMessage && <ErrorIcon className={cn('absolute top-2/4 right-4 translate-y-[-50%]')}/>}
              <input
                className={cn(`input w-full px-4 pt-7 pb-3 border rounded-xl normal-text-17 outline-blue
                  placeholder:text-[rgba(0,0,0,0)] ${errorMessage ? 'border-error text-error' : 'border-gray-80'}`)}
                name={field.name}
                onBlur={field.onBlur}
                defaultValue={field.value}
                type={type}
                ref={maskRef as LegacyRef<HTMLInputElement>}
                placeholder="placeholder"
                onChange={() =>
                  field.onChange({
                    target: {value: unmaskedValue},
                  })
                }/>

              <span className={cn(`
                label normal-text-17 text-text opacity-50 absolute top-2/4 left-[17px]
                translate-y-[-50%] transition-[transform,font-size]`)}>
                {label}
              </span>

            </label>
            {errorMessage && (
              <span className={cn('normal-text-13 text-error ml-4')}>{errorMessage}</span>
            )
            }
          </div>
        )
      }}
    />
  )
}

export default Input;
