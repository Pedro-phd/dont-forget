import { gql } from '@apollo/client'

export const GET_USER = gql`
  query MyQuery($email: String) {
    users(where: { email: { _eq: $email } }) {
      email
      todos
    }
  }
`
export const CREATE_TODO = gql`
  mutation MyMutation {
    insert_todo(objects: {}) {
      returning {
        uuid
      }
    }
  }
`

export const CREATE_USER = gql`
  mutation MyMutation($email: String, $todo: _text) {
    insert_users_one(object: { email: $email, todos: $todo }) {
      email
      todos
    }
  }
`
