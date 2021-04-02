/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../components/Header/index'
import { session, useSession } from 'next-auth/client'

import { useLazyQuery, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'

import { GET_USER, CREATE_TODO, CREATE_USER } from '../graphql/queries'

export default function Home() {
  const [session] = useSession()

  const [getUser, user] = useLazyQuery(GET_USER)
  const [createUser, responseCreateUser] = useMutation(CREATE_USER)
  const [createTodo, responseCreateTodo] = useMutation(CREATE_TODO)

  useEffect(() => {
    getUser({ variables: { email: session?.user.email } })
    if (!user?.data?.users) {
      notUser()
    } else {
      console.log('não caiu na função')
    }
  }, [session])

  const notUser = async () => {
    console.log('função not user')
    const responseCreateTodo = await createTodo()
    const responseCreateUser = await createUser({
      variables: {
        email: session?.user.email,
        todo: `{'${responseCreateTodo.data.insert_todo.returning[0].uuid}'}`
      }
    })
    console.log(responseCreateUser)
  }
  return (
    <>
      <Header />
      <h1>Olá</h1>
    </>
  )
}
