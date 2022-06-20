import React from 'react'
import { Paragraph, SpanParagraph, Title } from '@sharedComponents/Fonts'
import { SectionTitle } from '@sharedComponents/Headings'
import { Container } from '@sharedComponents/Layout'
import { HeroImage, Hero, HeroContent, SkillsGrid } from './SecondModuleStyles'

const handleTrips = [
  { id: 0, title: 'Favourite city', text: 'Toronto, ON, Canada' },
  { id: 1, title: 'Last trip', text: 'Bariloche, Argentina' }
]

const handleSkills = [
  {
    id: 0,
    title: 'UI design experience',
    text: 'Creating a design system with AD. Prototyping and designing interfaces in Figma for landing pages, webapps or mobile native apps. '
  },
  {
    id: 1,
    title: 'Frontend Development',
    text: 'Basics: HTML, CSS, JavaScript.  Styled Components, TypeScript, Control versions with GIT, ReactJs (Next.Js), RESTAPI, Redux, Mithril.Js, etc.'
  },
  {
    id: 2,
    title: 'Favourite activities',
    text: 'Knowing airports & spotting airplanes, tourism, landscape photography,  editing photos with Lightroom and Photoshop, practicing new code technologies.'
  },
  {
    id: 3,
    title: 'Clients who i worked',
    text: 'Circular, Kia Motors,  Dolce Gusto, Nespresso, Dow Chow, Cat Chow, Club Atletico River Plate, Fundacion River, Santander, Bancolombia, Cinzano, etc. '
  }
]

const FirstModule = () => {
  return (
    <Container>
      <SectionTitle section="About me" title="helloAxel />" />
      <Hero>
        <HeroImage />
        <HeroContent>
          <Title>
            Welcome aboard. <br />
            My name is Axel Hernan Valdez, an argentinian developer & designer based in Buenos Aires looking for new aventures and challenges.
          </Title>
          <div>
            {handleTrips.map(trip => {
              return (
                <Paragraph key={trip.id} bold={true}>
                  {trip.title}
                  <SpanParagraph color="primary500">{trip.text}</SpanParagraph>
                </Paragraph>
              )
            })}
          </div>
        </HeroContent>
      </Hero>
      <SkillsGrid>
        {handleSkills.map(trip => {
          return (
            <div key={trip.id}>
              <Paragraph bold={true}>{trip.title}</Paragraph>
              <Paragraph color="primary500">{trip.text}</Paragraph>
            </div>
          )
        })}
      </SkillsGrid>
    </Container>
  )
}

export default FirstModule
