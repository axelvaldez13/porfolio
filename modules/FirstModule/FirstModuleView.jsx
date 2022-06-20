import React from 'react'
import { Button } from '@sharedComponents/Buttons'
import { Hero, HeroContent, HeroImage, StyledGrid } from './FirstModuleStyles'
import { Paragraph, Heading } from '@sharedComponents/Fonts'

const handleText = [
  { id: 0, title: 'Current work', body: { text: 'Circular Argentina', color: 'primary500' } },
  { id: 1, title: 'Next destination', body: { text: 'El Calafate, Argentina', color: 'primary500' } },
  { id: 2, body: { text: 'Hey ! welcome to my personal portfolio. Please fasten your seatbeat while you’re scrolling.', color: 'white' } }
]

const FirstModule = () => {
  const textColor = 'white'
  return (
    <Hero>
      <HeroContent>
        <Heading>UI designer, frontend developer and maybe frequent flyer.</Heading>
        <HeroImage />
        <div>
          <Button>check (in) my works</Button>
          <Button>book an appointment</Button>
        </div>
      </HeroContent>
      <StyledGrid>
        {handleText.map(text => {
          return (
            <div key={text.id}>
              {text.title && (
                <Paragraph bold={true} color={textColor}>
                  {text.title}
                </Paragraph>
              )}
              <Paragraph color={text.body.color}> {text.body.text} </Paragraph>
            </div>
          )
        })}
      </StyledGrid>
    </Hero>
  )
}

export default FirstModule
