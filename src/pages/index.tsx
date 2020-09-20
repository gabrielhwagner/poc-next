import React, { useState, FormEvent } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { Container, Form, Input, Button } from '../styles/pages/Home'

const Home: React.FC = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  function handleSignUpToNewsletter(event: FormEvent) {
    event.preventDefault()
    axios.post('/api/subscribe', {
      email,
      name
    })
  }

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Hello</h1>
      <p>Poc Next-react</p>

      <Form onSubmit={handleSignUpToNewsletter}>
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  )
}

export default Home
