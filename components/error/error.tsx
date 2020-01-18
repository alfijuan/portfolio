import Link from 'next/link'

import {
  StyledError,
  Row,
  TextContainer,
  Title,
  Text,
  ContactLink,
  LinkText,
} from './error.styles'


import { Container } from '../layout/layout.styles'

export const Error = () => {
  return (
    <StyledError>
      <Container>
        <Row>
          <TextContainer>
            <Title title="Error 404">Ops! 404</Title>
            <Text>The page you are trying to access was not found</Text>
            <Link href="/">
              <ContactLink data-hover="Go root">
                <LinkText>Go root</LinkText>
              </ContactLink>
            </Link>
          </TextContainer>
        </Row>
      </Container>
    </StyledError>
  )
}