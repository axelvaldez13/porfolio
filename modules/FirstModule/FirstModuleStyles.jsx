import styled from 'styled-components'

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  position: relative;

  :not(HeroImage) {
    padding: 0 1.5rem;
  }

  h1 {
    margin: 1.5rem 0;
    width: 75%;
    z-index: 2;

    @media screen and (min-width: 1600px) {
      width: 60%;
    }
  }
`
export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  button {
    margin-right: 1rem;
    position: relative;
    z-index: 2;
  }
`
export const HeroImage = styled.div`
  position: absolute;
  z-index: 0;
  right: 0;
  background: linear-gradient(0deg, rgba(23, 25, 35, 0.7), rgba(23, 25, 35, 0.7)), url('./hero.jpg') center center / cover;
  top: 50%;
  transform: translateY(-50%);
  height: 90%;
  width: 80%;

  @media screen and (min-width: 1024px) {
    width: 90%;
  }
  @media screen and (min-width: 1366px) {
    width: 95%;
  }
`
export const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 1.5rem;

  > div {
    margin: 0.5rem 0;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    > div {
      margin: 0;
    }

    div:last-child {
      width: 40%;
      text-align: right;
    }
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    align-items: baseline;
    grid-template-columns: 1fr 1fr 3fr;

    div:last-child {
      justify-self: end;
    }
  }
`
