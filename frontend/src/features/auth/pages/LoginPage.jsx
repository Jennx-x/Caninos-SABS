import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { login } from '../services/auth.service';

export const LoginPage = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const credentials = {
        email: email, 
        password: password,
      };
      console.log('Credenciales enviadas');
      const response = await login(credentials);
      localStorage.setItem('token', response.token);
      navigate('/admin');
    } catch (err) {
      setError('Usuario o contraseña incorrectos'); 
      console.error('Error de inicio de sesión:', err);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Acceder</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail"> 
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email" 
            placeholder="Ingrese su correo electrónico"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </Container>
  );
};