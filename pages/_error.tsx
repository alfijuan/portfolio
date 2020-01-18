import Head from 'next/head'

import { Layout } from '../components/layout'
import { Error as ErrorContent } from '../components/error'

const Error = ({error}: {error: any}) => (
  <>
    <Head>
      <title>404 not found</title>
    </Head>
    <Layout>
      <ErrorContent />
    </Layout>
  </>
);

export default Error;