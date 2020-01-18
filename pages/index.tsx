import Head from 'next/head'

import { Layout } from '../components/layout'
import { Home } from '../components/home'

const Index = () => (
  <>
    <Head>
      <title>Juan Cruz Alfieri - Web Developer</title>
    </Head>
    <Layout>
      <Home />
    </Layout>
  </>
);

export default Index;