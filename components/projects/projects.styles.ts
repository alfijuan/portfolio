import styled from '@emotion/styled'

import { Container as LayoutContainer } from '../layout/layout.styles'

export const StyledProjects = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
`;

export const Container = styled(LayoutContainer)`
  height: calc(100% - 80px);
  overflow: auto;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
`;

export const ProjectList = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

export const ProjectItem = styled.div`
  --mCalc: calc(((100% - 1200px) / 4 )/ 2);
  width: 300px;
  height: 300px;
  border: 1px solid red;
  background: white;
  margin: var(--mCalc);

`;