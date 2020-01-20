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
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

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