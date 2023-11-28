import { ComponentProps } from 'react'
import { cn } from '../../utils/cn'

interface Props extends ComponentProps<'input'> {
  className?: string
}

export default function Input({ className }: Props) {
  return <input className={cn('', className)}></input>
}
