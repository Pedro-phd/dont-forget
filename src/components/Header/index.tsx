import { ReactNode } from 'react'

import { Container, LoginButton, LoginLabel, WrapperLogin } from './styles'

import Logo from '../logo/index'

import { signIn, signOut, useSession } from 'next-auth/client'

function Header() {
  const [session] = useSession()
  return (
    <Container>
      <div>
        <Logo size={36} />
      </div>
      <div>
        {!session && (
          <>
            <LoginButton onClick={() => signIn('google')}>Login</LoginButton>
          </>
        )}
        {session && (
          <WrapperLogin>
            <LoginLabel>Olá, {session.user.name}</LoginLabel> <br />
            <LoginButton onClick={() => signOut()}>Sair</LoginButton>
          </WrapperLogin>
        )}
      </div>
    </Container>
  )
}

export default Header
