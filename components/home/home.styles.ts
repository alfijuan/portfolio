import styled from '@emotion/styled'

export const HomeStyled = styled.div`
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 76px;
  line-height: 84px;
  font-weight: 600;
  @media screen and (max-width: 1024px){
    font-size: 70px;
    line-height: 78px;
  }
  @media screen and (max-width: 768px){
    font-size: 60px;
    line-height: 68px;
  }
  @media screen and (max-width: 600px){
    font-size: 30px;
    line-height: 38px;
  }
  @media screen and (max-height: 500px){
    @media screen and (max-width: 900px){
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

export const Subtitle = styled.h3`
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 76px;
  line-height: 84px;
  font-weight: 600;
  @media screen and (max-width: 1024px){
    font-size: 70px;
    line-height: 78px;
  }
  @media screen and (max-width: 768px){
    font-size: 60px;
    line-height: 68px;
  }
  @media screen and (max-width: 600px){
    font-size: 30px;
    line-height: 38px;
  }
  @media screen and (max-height: 500px){
    @media screen and (max-width: 900px){
      font-size: 40px;
      line-height: 48px;
    }
  }
`;

export const Divisor = styled.hr`
  width: 150px;
  height: 5px;
  background-color: #C87C37;
  border: 0;
  margin: 0;
  margin-top: 25px;
  @media screen and (max-width: 600px){
    width: 75px;
    margin-top: 20px;
  }
  @media screen and (max-height: 500px){
    @media screen and (max-width: 900px){
      margin-top: 20px;
    }
  }
`;

export const Text = styled.p`
  color: #F4FEFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  line-height: 27px;
  font-weight: 400;
  padding-top: 40px;
  @media screen and (max-width: 768px){
    font-size: 22px;
    line-height: 36px;
  }
  @media screen and (max-width: 600px){
    font-size: 11px;
    line-height: 18px;
    padding-top: 20px;
  }
  @media screen and (max-height: 500px){
    @media screen and (max-width: 900px){
      font-size: 14px;
      line-height: 22px;
      padding-top: 20px;
    }
  }
`;

export const Break = styled.span`
  display: block;
  font-family: 'Montserrat', sans-serif;
`;

export const LinkText = styled.span`
  background-color: #071832;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  display: inline-flex;
  padding: 0 6px;
  transition: transform 0.3s;
  @media screen and (max-width: 768px){
    font-size: 20px;
  }
  @media screen and (max-width: 600px){
    font-size: 13px;
  }
`;

export const ContactLink = styled.a`
  display: inline-flex;
  color: #F4FEFF;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.8px;
  outline: none;
  overflow: hidden;
  margin: 0 10px;
  text-decoration: none;
  text-shadow: 0 0 1px rgba(255,255,255,0.3);
  text-transform: uppercase;
  position: relative;
  &:hover{
    &:before{
      transform: translateX(0%);
    }
    ${LinkText}{
      transform: translateX(100%);
    }
  }
  &:before{
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-sizing: border-box;
    color: #071832;
    content: attr(data-hover);
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 0 6px;
    transition: transform 0.3s;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    @media screen and (max-width: 600px){
      font-size: 13px;
    }
  }
  @media screen and (max-width: 340px){
    margin: 0;
  }
`;
