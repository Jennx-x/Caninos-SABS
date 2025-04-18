import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
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
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '400px' }} className="shadow-lg border-0">
        <Card.Body className="p-4">
          <h2 className="text-center mb-4 text-primary">Acceder</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control-lg"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control-lg"
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" className="btn-lg fw-bold">
                Ingresar
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};