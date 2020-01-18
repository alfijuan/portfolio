import { Global } from '@emotion/core'
import Head from 'next/head'

import { Header } from '../header';
import { Footer } from '../footer';

import {
  StyledLayout,
  LinesWrapper,
  Lines,
  MainLayout,
  GlobalStyles,
  ResetStyles
} from './layout.styles'


interface Props {
  children: any;
}



export const Layout = ({children}: Props) => {
  return (
    <>
      <Head>
        <meta key="description" name="description" content="I'm a software developer that loves React, Typescript and Django!" />
        <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta key="robots" name="robots" content="index,follow" />
        <meta property="og:type" content="Website" />
        <meta property="og:site_name" content="Juan Alfieri" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@alfijuan" />
        <meta name="twitter:creator" content="@alfijuan" />
        <meta property="og:url" content="https://juanalfieri.com" />
        
        <meta property="og:title" content="Juan Cruz Alfieri" />
        <meta property="og:description" content="Web Developer - React, Typescript & Django" />
      </Head> 
      <Global styles={GlobalStyles} />
      <Global styles={ResetStyles} />
      <StyledLayout>
        <LinesWrapper>
          <Lines />
          <Lines />
          <Lines />
          <Lines />
          <Lines />
        </LinesWrapper>
        <Header />
        <MainLayout>
          {children}
        </MainLayout>
        <Footer />
      </StyledLayout>
    </>
  )
} 