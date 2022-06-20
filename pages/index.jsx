import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Navbar from '../modules/Navbar'
// import FirstModuleView from '../modules/FirstModule/FirstModuleView'
import SecondModuleView from '../modules/SecondModule/SecondModuleView'
import { Wrapper } from '../sharedComponents/Layout'
import { Paragraph } from '../sharedComponents/Fonts'
import { ChevronDown, ChevronUp } from '../sharedComponents/Icons'

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 1em;
  justify-content: space-between;
  height: 100%;
  padding: 2rem 1.5em;

  p {
    padding: 1rem 0;
    margin: 1rem 0;
    transform: rotate(-90deg);
  }

  button {
    padding: 1rem;
    background: none;
    border: ${props => `0.1rem solid ${props.theme.color.white} `};
    border-radius: 50%;
  }
`

const BarProgress = styled.div`
  background: ${props => props.theme.color.primary[600]};
  height: 100%;
  display: flex;
  width: 0.2rem;

  ::before {
    content: ' ';
    white-space: pre;
    padding: 0.1rem 0;
    background: ${props => props.theme.color.white};
    border-radius: 0.1rem;
    width: 0.2rem;
    height: 20%;
  }
`

const Home = () => {
  return (
    <>
      <Head>
        <title>Axel valdez - Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <SideNav>
          <div>
            <button>
              <ChevronUp />
            </button>
            <Paragraph bold={true}>01/02</Paragraph>
          </div>
          <BarProgress />
          <div>
            <Paragraph bold={true}>Home</Paragraph>
            <button>
              <ChevronDown />
            </button>
          </div>
        </SideNav>
        <Wrapper>
          <Navbar />
          {/*  <FirstModuleView /> */}
          <SecondModuleView />
        </Wrapper>
      </>
    </>
  )
}

export default Home
