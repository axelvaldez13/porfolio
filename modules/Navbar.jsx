import React from 'react'
import styled from 'styled-components'
import { Dribbble, Github, Instagram, Linkedin } from '@sharedComponents/Icons'
import Logo from '@sharedComponents/logo'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      padding: 0 0.5rem;
      list-style: none;

      svg {
        fill: ${props => props.theme.color.white};
      }
    }
  }
`
const socialMedia = [
  { id: 0, icon: <Linkedin />, href: 'http://google.com' },
  { id: 1, icon: <Instagram />, href: 'http://google.com' },
  { id: 2, icon: <Dribbble />, href: 'http://google.com' },
  { id: 3, icon: <Github />, href: 'http://google.com' }
]

const Navbar = () => {
  return (
    <Nav>
      <a>
        <Logo />
      </a>
      <ul>
        {socialMedia.map(media => {
          return (
            <li key={media.id}>
              <a href={media.href}> {media.icon} </a>
            </li>
          )
        })}
      </ul>
    </Nav>
  )
}

export default Navbar
