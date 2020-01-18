import styled from '@emotion/styled'

export const Nav = styled.nav`
  width: 100%;
  padding: 30px 0;
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
`;

export const NavRow = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LinkStyled = styled.a`
  width: 200px;
  color: #C87C37;
  cursor: pointer;
  text-decoration: none!important;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavListItem = styled.li`
  width: 180px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const NavItemText = styled.span`
  display: inline-flex;
  transition: transform 0.3s;
  text-decoration: none;
  position: relative;
  &:before{
    color: #FFFFFF;
    content: attr(data-hover);
    font-weight: 700;
    transform: translate3d(0,0,0);
    position: absolute;
    top: 100%;
  }
`;

export const NavItemLink = styled.a`
  height: 22px;
  color: #C87C37;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  overflow: hidden;
  text-transform: uppercase;
  &:hover{
    ${NavItemText}{
      transform: translateY(-100%);
    }
  }
`