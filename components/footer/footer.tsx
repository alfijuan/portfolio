
import {
  FooterStyled,
  FooterRow,
  FooterLinkedin,
  FooterNext,
  NextLink,
  LinkText,
} from './footer.styles'

import { Container } from '../layout/layout.styles'

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterRow>
          <FooterLinkedin href="https://www.linkedin.com/in/juanalfieri/" target="_blank">Linkedin</FooterLinkedin>
          <FooterNext>
            Built with {` `}
            <NextLink href="https://nextjs.org/" target="_blank">
              <LinkText data-hover="Gatsby">Next.js</LinkText>
            </NextLink>
          </FooterNext>
        </FooterRow>
      </Container>
    </FooterStyled>
  )
}