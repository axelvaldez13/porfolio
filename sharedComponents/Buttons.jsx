import styled from 'styled-components'

export const Button = styled.button`
  display: inline-flex;
  border: 1px solid ${props => props.theme.color.white};
  background: none;
  color: ${props => props.theme.color.white};
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
  font: 600 1rem/1.5rem -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
`
