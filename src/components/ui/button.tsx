import { ComponentProps } from 'react'
import { cn } from '../../utils/cn'

interface Props extends ComponentProps<'button'> {
  className?: string
}

export default function Button({ className }: Props) {
  return <button className={cn('', className)}></button>
}
