import Link from 'next/link'

import {
  Nav,
  NavRow,
  LinkStyled,
  NavList,
  NavListItem,
  NavItemLink,
  NavItemText,
} from './header.styles'

import { Container } from '../layout/layout.styles'

export const Header = () => {
  return (
    <Nav>
      <Container>
        <NavRow>
          <Link href="/">
            <LinkStyled>Logo</LinkStyled>
          </Link>
          <NavList>
            {/* <NavListItem>
              <Link href="/projects">
                <NavItemLink>
                  <NavItemText data-hover="Projects">
                    Projects
                  </NavItemText>
                </NavItemLink>
              </Link>
            </NavListItem> */}
            <NavListItem>
              <NavItemLink href="mailto://alfieri.juan@gmail.com" target="_blank">
                <NavItemText data-hover="Contact">
                  Contact
                </NavItemText>
              </NavItemLink>
            </NavListItem>
          </NavList>
        </NavRow>
      </Container>
    </Nav>
  )
} 