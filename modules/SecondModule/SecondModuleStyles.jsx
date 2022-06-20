import styled from 'styled-components'

export const Hero = styled.div`
  padding: 2rem 0;
  @media screen and (min-width: 768px) {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    flex-direction: row;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: column;
    }
    p {
      padding: 1rem 0 0 0;
    }
  }

  @media screen and (min-width: 768px) {
    border-top: 0.2rem solid ${props => props.theme.color.white};
    position: absolute;
    width: 50%;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);

    div {
      flex-direction: row;
      padding: 1rem 0;
      p {
        padding: 0 1.5rem 0 0;
      }
    }
  }
`

export const HeroImage = styled.div`
  background: linear-gradient(0deg, rgba(23, 25, 35, 0.7), rgba(23, 25, 35, 0.7)), url('./imageAxel.jpg') center center / cover;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    width: 65%;
    height: 100%;
  }
`

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 1200px) {
    display: grid;
    align-items: baseline;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
