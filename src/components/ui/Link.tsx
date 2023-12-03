import { Link as RouterLink } from 'react-router-dom';
import { ComponentProps, FC } from 'react';
import { cn } from '../../utils/cn.ts';

interface Props extends ComponentProps<'a'> {
  to: string;
}

const Link: FC<Props> = ({ to, children }) => {
  return (
    <RouterLink to={to} className={cn('medium-text-15 text-blue underline')}>{children}</RouterLink>
  );
};

export default Link;