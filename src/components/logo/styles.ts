import styled from 'styled-components'

export const LogoTitle = styled.p`
  font-size: ${(props) => props.size}px;
  font-weight: 700;
  color: ${(props) => (props.sub ? '#FFFFFF' : '#F90A8B')};
  display: inline-block;
`
