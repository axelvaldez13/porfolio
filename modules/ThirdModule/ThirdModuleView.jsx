import React from 'react'
import { Paragraph } from '@sharedComponents/Fonts'
import { SectionTitle } from '@sharedComponents/Headings'
import { Anchor } from '@sharedComponents/Buttons'
import { Container } from '@sharedComponents/Layout'
import { HeroImage, ContactGrid } from './ThirdModuleStyles'

const socialMedia = [
  { id: 0, rrss: 'Instagram', handleText: '/axelvaaldez', handleClick: 'asdasda' },
  { id: 1, rrss: 'Dribbble', handleText: '/axelvaldez', handleClick: 'asdasda' },
  { id: 2, rrss: 'Github', handleText: '/axelvaldez13', handleClick: 'asdasda' },
  { id: 3, rrss: 'Linkedin', handleText: 'Axel Hernan Valdez', handleClick: 'asdasda' }
]

const FirstModule = () => {
  return (
    <Container>
      <SectionTitle section="Contact" title="Book an appointment />" textButton="check (in) my resume" />
      <HeroImage />
      <ContactGrid>
        <Paragraph>Let’s wait our delayed flight talking about our new project and make our goals come true</Paragraph>
        {socialMedia.map(social => {
          return (
            <div key={social.id}>
              <Paragraph bold={true}>{social.rrss}</Paragraph>
              <Anchor href={social.handleClick}>{social.handleText}</Anchor>
            </div>
          )
        })}
      </ContactGrid>
    </Container>
  )
}

export default FirstModule
