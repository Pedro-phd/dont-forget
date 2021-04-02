import { ReactNode } from 'react'

import { LogoTitle } from './styles'

interface LogoProps {
  children: ReactNode
  size: number
}

function Logo({ size }: LogoProps) {
  return (
    <>
      <LogoTitle size={size}>Don't</LogoTitle>
      <LogoTitle size={size} sub={true}>
        Forget
      </LogoTitle>
    </>
  )
}

export default Logo
