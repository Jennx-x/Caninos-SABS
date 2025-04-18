import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-3 mb-4">🐾 ¡Bienvenidos al Paraíso Canino de Caninos SABS! 🐾</h1>
          <p className="lead mb-4">
            Descubre un universo de soluciones integrales pensadas para el bienestar y la alegría de tu fiel compañero en la hermosa Copacabana y más allá. En Caninos SABS, nuestro amor por los animales es la fuerza que guía cada uno de nuestros productos y servicios.
          </p>
          <hr className="my-4 border-light" />
          <p className="mb-4">
            Explora nuestra esmerada selección de alimentos nutritivos, juguetes que estimulan su mente y cuerpo, accesorios esenciales para su día a día y servicios profesionales de peluquería y cuidado con el cariño que se merecen. Nos comprometemos a ofrecerte solo lo excepcional para tu peludo amigo.
          </p>
          <div>
            <Link to="/productos" className="btn btn-warning btn-lg mr-3">
              <i className="bi bi-basket-fill mr-2"></i> Ver Nuestros Productos
            </Link>
            
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <div className="bg-light p-4 rounded shadow-sm">
              <i className="bi bi-award-fill text-info display-4 mb-3"></i>
              <h3 className="text-info">🏆 Calidad y Confianza Garantizada</h3>
              <p className="text-muted">Nos dedicamos a ofrecer productos de marcas reconocidas y servicios profesionales ejecutados por expertos apasionados por el cuidado canino, asegurando la salud y el bienestar de tu preciada mascota.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <div className="bg-light p-4 rounded shadow-sm">
              <i className="bi bi-heart-pulse-fill text-danger display-4 mb-3"></i>
              <h3 className="text-danger">❤️ Nuestro Amor por los Caninos es Real</h3>
              <p className="text-muted">En Caninos SABS, comprendemos el lazo único que compartes con tu perro. Nuestro equipo comparte esta profunda conexión y se entrega a brindarles el trato y la atención más afectuosos.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <div className="bg-light p-4 rounded shadow-sm">
              <i className="bi bi-shop-window text-success display-4 mb-3"></i>
              <h3 className="text-success">🏡 Tu Destino Integral para Consentirlos</h3>
              <p className="text-muted">Desde la nutrición óptima hasta el entretenimiento más divertido y el cuidado estético que los hace brillar, Caninos SABS es tu solución completa para todas las necesidades de tu consentido en Copacabana.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-md-8 text-center">
            <p className="font-italic text-secondary mb-3">
              Descubre cómo Caninos SABS puede enriquecer la vida de tu mejor amigo, brindándole la felicidad y la salud que tanto merecen. ¡Te invitamos a explorar nuestro sitio y a conocernos un poco más!
            </p>
            <Link to="/quienes-somos" className="btn btn-outline-info btn-lg mt-2">
              <i className="bi bi-info-circle-fill mr-2"></i> Conoce Nuestra Historia
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
