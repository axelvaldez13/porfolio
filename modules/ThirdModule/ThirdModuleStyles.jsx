import styled from 'styled-components'

export const HeroImage = styled.div`
  background: linear-gradient(0deg, rgba(23, 25, 35, 0.7), rgba(23, 25, 35, 0.7)), url('./imageAxel.jpg') center center / cover;
  margin: 2rem 0;
  height: 100%;
  display: flex;
`

export const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 1200px) {
    display: grid;
    align-items: baseline;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
