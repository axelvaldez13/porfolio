import React from 'react'
import styled from 'styled-components'
import { Paragraph, Subheading } from './Fonts'
import { Button } from './Buttons'

const HeadingWrapper = styled.div`
  p {
    margin-right: 1rem;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: end;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const SectionTitle = ({ title, section, textButton, handleClick }) => {
  return (
    <HeadingContainer>
      <HeadingWrapper>
        <Paragraph bold={true}>{section}</Paragraph>
        <Subheading>{title}</Subheading>
      </HeadingWrapper>
      {textButton && <Button onClick={handleClick}>{textButton}</Button>}
    </HeadingContainer>
  )
}
