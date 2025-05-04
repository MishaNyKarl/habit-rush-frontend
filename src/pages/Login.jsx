import { Button, Card, Field, Input, Stack } from "@chakra-ui/react"
import { useState } from 'react';
import API from '../api/axios';

export default function Login({ onLogin }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSignIn = async () => {
    try {
      await API.post('/auth/login', {
        email,
        password,
      });
      const res = await API.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      onLogin();
    } catch (err) {
      
        console.log(err)
    }
  };



  return (
    <Card.Root maxW="sm">
    <Card.Header>
      <Card.Title>Регистрация</Card.Title>
      <Card.Description>
        Fill in the form below to create an account
      </Card.Description>
    </Card.Header>
    <Card.Body>
      <Stack gap="4" w="full">
        <Field.Root>
          <Field.Label>First Name</Field.Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field.Root>
        <Field.Root>
          <Field.Label>Last Name</Field.Label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Field.Root>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <Button variant="outline">Cancel</Button>
      <Button variant="solid" onClick={handlerSignIn}>Sign in</Button>
    </Card.Footer>
  </Card.Root>
  );
}
