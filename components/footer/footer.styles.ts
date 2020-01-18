import styled from '@emotion/styled'

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px 0;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;

`;

export const FooterRow = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;

`;

export const FooterLinkedin = styled.a`
  color: #FFFFFF;
`;

export const FooterNext = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;

`;

export const NextLink = styled.a`
  height: 14px;
  color: #FFFFFF;
  &:hover{
    .link--text{
      transform: translateY(-100%);
    }
  }
`;

export const LinkText = styled.span`
  display: inline-flex;
  transition: transform 0.3s;
  position: relative;
  &:before{
    color: #C87C37;
    content: attr(data-hover);
    transform: translate3d(0,0,0);
    position: absolute;
    top: 100%;
  }

`;