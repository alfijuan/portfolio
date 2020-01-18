import styled from '@emotion/styled'

export const StyledError = styled.div`
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
  align-items: center;
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
`;

export const Text = styled.p`
  color: #F4FEFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  line-height: 27px;
  font-weight: 400;
  padding-top: 40px;
`;

export const LinkText = styled.span`
  background-color: #071832;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
  display: inline-flex;
  padding: 6px;
  transition: transform 0.3s;
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
  margin: 20px 10px;
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
    padding: 6px;
    transition: transform 0.3s;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
  }
`;