import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  border: 1px solid ${props => props.theme.color.white};
  background: none;
  color: ${props => props.theme.color.white};
  text-align: center;
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
  font: 600 1rem/1.5rem -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
`

export const Anchor = styled.a`
  font: 400 1rem/1.5rem -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  color: ${props => props.theme.color.primary[400]};

  &hover:: {
    color: ${props => props.theme.color.primary[600]};
  }
`
