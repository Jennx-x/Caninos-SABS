// src/features/about-us/pages/AboutUsPage.jsx
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

function AboutUsPage() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Quiénes Somos</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="mb-3">Nuestra Historia</Card.Title>
              <Card.Text>
                En Caninos SABS, nuestra pasión por los animales nos impulsa a ofrecer productos y servicios excepcionales para el cuidado y bienestar de tus mascotas.
                Fundada en [Año de Fundación] por [Nombre del Fundador/Motivación], nuestra empresa nació con la visión de [Declaración de la Visión Inicial].
              </Card.Text>
              <Card.Text>
                A lo largo de los años, hemos crecido y evolucionado, siempre manteniendo nuestro compromiso con la calidad, la innovación y, sobre todo, el amor por los caninos y otras mascotas.
                Nuestro equipo está formado por profesionales dedicados que comparten esta misma pasión y trabajan arduamente para brindarte lo mejor.
              </Card.Text>
              {/* Puedes agregar más párrafos sobre la historia, hitos importantes, etc. */}
            </Card.Body>
          </Card>

          <Row className="mt-4">
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-3">Nuestra Misión</Card.Title>
                  <Card.Text>
                    Nuestra misión es mejorar la calidad de vida de las mascotas y fortalecer el vínculo entre ellas y sus dueños, proporcionando productos de alta calidad, servicios confiables y un conocimiento experto que contribuya a su salud y felicidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-3">Nuestros Valores</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item><strong>Calidad:</strong> Nos esforzamos por ofrecer productos y servicios que cumplan con los más altos estándares.</ListGroup.Item>
                    <ListGroup.Item><strong>Compromiso:</strong> Estamos dedicados a satisfacer las necesidades de nuestros clientes y sus mascotas.</ListGroup.Item>
                    <ListGroup.Item><strong>Pasión:</strong> Nuestro amor por los animales es el motor que impulsa todo lo que hacemos.</ListGroup.Item>
                    <ListGroup.Item><strong>Confianza:</strong> Buscamos construir relaciones duraderas basadas en la honestidad y la transparencia.</ListGroup.Item>
                    {/* Agrega los valores específicos de tu empresa como ListGroup.Item */}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Puedes agregar más secciones como "Nuestro Equipo" o "Nuestra Visión" aquí utilizando más componentes de Card y Row/Col */}
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsPage;