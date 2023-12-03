import React, { ComponentProps, FC, useMemo } from 'react'
import { cn } from '../../utils/cn'

type ButtonStyles = 'black' | 'blue';

interface Props extends ComponentProps<'button'> {
  onClick: () => void;
  icon?: React.ReactNode;
  isIconAtEnd?: boolean;
  buttonStyle?: ButtonStyles;
  className?: string;
}

const TextButton: FC<Props> = (
  {
    onClick,
    icon = null,
    isIconAtEnd = false,
    className = '',
    buttonStyle = 'black',
    children,
    ...rest
  }) => {
  const buttonClass = useMemo(() => {
    const styles: Record<ButtonStyles, string> = {
      black: 'black-text-btn',
      blue: 'blue-text-btn',
    };
    return styles[buttonStyle];
  }, [buttonStyle]);

  return (
    <button
      className={cn(`inline-flex gap-1 items-center normal-text-15 ${buttonClass}`, className)}
      onClick={onClick}
      type='button'
      {...rest}>

      {!isIconAtEnd && icon}
      {children}
      {isIconAtEnd && icon}

    </button>
  )
};

export default TextButton;
