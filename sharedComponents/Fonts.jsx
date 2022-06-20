import styled from 'styled-components'

export const Paragraph = styled.p`
  font: ${props => (props.bold ? 600 : 400)} 1rem/1.5rem -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${props => {
    const getColor = {
      white: props.theme.color.white,
      black: props.theme.color.black,
      primary100: props.theme.color.primary[100],
      primary500: props.theme.color.primary[500]
    }
    return props.color ? getColor[props.color] : props.theme.color.white
  }};
`
export const SpanParagraph = styled.span`
  font: ${props => (props.bold ? 600 : 400)} 1rem/1.5rem -apple-system, BlinkMacSystemFont, sans-serif;
  display: block;
  color: ${props => {
    const getColor = {
      white: props.theme.color.white,
      black: props.theme.color.black,
      primary100: props.theme.color.primary[100],
      primary500: props.theme.color.primary[500]
    }
    return props.color ? getColor[props.color] : props.theme.color.white
  }};
`

export const Heading = styled.h1`
  font: 600 3rem/3.5rem -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${props => props.theme.color.white};

  @media screen and (min-width: 1366px) {
    font: 600 3.5rem/3.875rem -apple-system, BlinkMacSystemFont, sans-serif;
  }
`

export const Subheading = styled.h2`
  font: 600 2.5rem/3rem -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${props => props.theme.color.white};
`

export const Title = styled.h3`
  font: 600 1.5rem/2rem -apple-system, BlinkMacSystemFont, sans-serif;
  color: ${props => props.theme.color.white};
`
