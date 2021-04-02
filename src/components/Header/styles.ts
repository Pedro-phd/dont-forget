import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
`
export const LoginButton = styled.button`
  padding: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  text-decoration-color: #f90a8b;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #f90a8b;
    text-decoration-thickness: 2px;
  }
  &:focus {
    color: #f90a8b;
  }
`
export const LoginLabel = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: underline;
  text-decoration-color: #f90a8b;
`
export const WrapperLogin = styled.div`
  display: flex;
  align-items: center;
`
