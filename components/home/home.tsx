import Link from 'next/link'

import {
  HomeStyled,
  Row,
  TextContainer,
  Title,
  Subtitle,
  Divisor,
  Text,
  Break,
  ContactLink,
  LinkText,
} from './home.styles'

import { Container } from '../layout/layout.styles'

export const Home = () => {
  return (
    <HomeStyled>
      <Container>
        <Row>
          <TextContainer>
            <Title title="My name is Juan Cruz!">Hello, I'm Juan Cruz!</Title>
            <Subtitle>a web developer.</Subtitle>
            <Divisor />
            <Text>
              I'm a FullStack Developer based in Buenos Aires, Argentina.
              <Break>React & Django are my ❤️</Break>
              ¿Have a project where I can fit? 
              <ContactLink href="mailto:alfieri.juan@gmail.com" target="_blank" data-hover="Let me know">
                <LinkText>Let me know</LinkText>
              </ContactLink>
            </Text>
          </TextContainer>
        </Row>
      </Container>
    </HomeStyled>
  )
}