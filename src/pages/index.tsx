import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Hello</h1>
      <p>Poc Next-react</p>
    </Container>
  )
}

export default Home
