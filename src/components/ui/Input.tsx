import { ComponentProps } from 'react'

interface Props extends ComponentProps<'input'> {
  className?: string
}

export default function Input({ className }: Props) {
  return <input className=""></input>
}
