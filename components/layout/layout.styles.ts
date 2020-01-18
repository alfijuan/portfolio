import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const StyledLayout = styled.div`
  width: 100%;
  height: 100vh;
`

export const Container = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: auto;
`;


export const LinesWrapper = styled.div`
  width: 90vw;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`

export const Lines = styled.div`
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 50%;
  &:after{
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: run 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }
  &:nth-of-type(1){
    margin-left: -25%;
    &:after{
      animation-delay: 2s;
    }
  }
  &:nth-of-type(3){
    margin-left: 25%;
    &:after{
      animation-delay: 2.5s;
    }
  }
  &:nth-of-type(4){
    margin-left: -50%;
    &:after{
      animation-delay: .5s;
    }
  }
  &:nth-of-type(5){
    margin-left: 50%;
    &:after{
      animation-delay: 1s;
    }
  }
`

export const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;

`


export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Space+Mono:400,700&display=swap');
  body {
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #071832;
    * {
      box-sizing: border-box;
      font-family: Space Mono, monospace;
      font-weight: 400;
    }
    @keyframes run{
      0%{
        top: -50%
      }
      100%{
        top: 110%
      }
    }

  }
`

export const ResetStyles = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline; }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block; }

  body {
    line-height: 1;
    max-width: 100%; }

  ol, ul {
    list-style: none; }

  blockquote, q {
    quotes: none; }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none; }

  table {
    border-collapse: collapse;
    border-spacing: 0; }

  input,
  button {
    border: 0 none; outline: none;}

  button {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;}

  select {
    border: none; }

  input[type="email"],
  input[type="text"],
  input[type="button"],
  input[type="submit"] {
    border: medium none;
    border-radius: 0;
    color: #fff;
    font-size: initial;
    font-weight: normal;
    margin: 0;
    padding: 0;
    opacity: 1;
    height: auto;
    width: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;}

  input[type="checkbox"]:before,
  input[type="radio"]:before {
    border: medium none;
    background: none;
    border-radius: 0;
    color: #fff;
    font-size: initial;
    font-weight: normal;
    margin: 0;
    padding: 0;
    opacity: 1;
    height: auto;
    width: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;}

  a{
    box-shadow: none;
    text-decoration: none;}

  body {
    overflow-x: hidden;
    overflow-y: auto;}

`;