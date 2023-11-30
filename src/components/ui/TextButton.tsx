import React, { ComponentProps, FC } from 'react'
import { cn } from '../../utils/cn'

interface Props extends ComponentProps<'button'> {
  onClick: () => void;
  icon?: React.ReactNode;
  isIconAtEnd?: boolean;
  textColor?: string;
  className?: string;
}

const TextButton: FC<Props> = (
  {
    onClick,
    icon = null,
    isIconAtEnd = false,
    className = '',
    textColor = 'text', // colors from tailwind.config.js or hex in format [#000000]
    children,
    ...rest
  }) => {
  return (
    <button
      className={cn(`inline-flex gap-1 items-center main-text-14 text-${textColor}`, className)}
      onClick={onClick}
      {...rest}>

      {!isIconAtEnd && icon}
      {children}
      {isIconAtEnd && icon}

    </button>
  )
};

export default TextButton;
