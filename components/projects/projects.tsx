
import {
  StyledProjects,
  Row,
  Container,
  ProjectList,
  ProjectItem as ProjectItemStyled,
} from './projects.styles'

export const ProjectItem = () => {
}

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <Row>
          <ProjectList>
            <ProjectItemStyled></ProjectItemStyled>
          </ProjectList>
        </Row>

      </Container>
    </StyledProjects>
  )
}