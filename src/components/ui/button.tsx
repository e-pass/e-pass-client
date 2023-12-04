import React, { ComponentProps, FC, useMemo } from 'react'
import { cn } from '../../utils/cn'

type ButtonStyles = 'orange';

interface Props extends ComponentProps<'button'> {
  onClick: () => void;
  type?: 'button' | 'submit';
  icon?: React.ReactNode;
  isIconAtEnd?: boolean;
  buttonStyle?: ButtonStyles;
  width?: number | string;
  className?: string;
}

const Button: FC<Props> = (
  {
    onClick,
    type = 'button',
    icon = null,
    isIconAtEnd = false,
    className = '',
    buttonStyle = 'orange',
    width = 343,
    children,
    ...rest
  }) => {
  const buttonClass = useMemo(() => {
    const styles: Record<ButtonStyles, string> = {
      orange: 'orange-btn',
    };
    return styles[buttonStyle];
  }, [buttonStyle]);

  return (
    <button
      className={cn(`
      flex gap-1 w-full p-4 items-center justify-center bold-text-17 rounded-xl
      active:opacity-80 hover:opacity-90 ${buttonClass}`, className)}
      style={{maxWidth: width}}
      onClick={onClick}
      type={type}
      {...rest}>

      {!isIconAtEnd && icon}
      {children}
      {isIconAtEnd && icon}

    </button>
  )
};

export default Button;
