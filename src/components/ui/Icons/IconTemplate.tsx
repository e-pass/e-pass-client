import React, { FC } from 'react';
import { cn } from '../../../utils/cn.ts';

interface Props extends React.ComponentProps<'img'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const IconTemplate: FC<Props> = (
  {src, alt, width = 24, height = 24, className = '', ...rest}
) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(`w-[${width}px] h-[${height}px] `, className)}
      {...rest} />
  );
};

export default IconTemplate;