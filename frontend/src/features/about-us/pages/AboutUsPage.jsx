import React from 'react';

export const AboutUsPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 display-3 text-info">🐾 Nuestra Historia y Pasión Canina 🦴</h1>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <section className="p-5 mb-4 bg-white shadow rounded border-start border-4 border-info">
            <h2 className="text-success text-center mb-3">
              <i className="bi bi-house-fill me-2"></i> Nuestros Orígenes en Copacabana
            </h2>
            <p className="lead text-secondary">
              En el corazón de <span className="fw-bold text-primary">Copacabana, Antioquia</span>, donde la naturaleza y el amor por los animales convergen, nació <span className="fw-bold text-primary">Caninos SABS</span>.
            </p>
            <p className="text-muted">
              Impulsados por una profunda conexión con los caninos y la visión de un cuidado superior, nuestra fundación por [Nombre del Fundador/Grupo de Fundadores] marcó el inicio de un hermoso viaje.
            </p>
            <blockquote className="blockquote text-center my-4">
              <p className="fst-italic text-primary">"Un compromiso inquebrantable con el bienestar de cada peludo amigo."</p>
              <footer className="blockquote-footer"><cite title="Fundadores de Caninos SABS">Fundadores de Caninos SABS</cite></footer>
            </blockquote>
            <p className="text-muted">
              Desde una modesta tienda local, nuestra meta fue clara: ofrecer productos de alta calidad y un equipo que realmente comparte el amor por las mascotas. La calidad y la atención al cliente fueron nuestras bases.
            </p>
          </section>

          <div className="row g-4">
            <div className="col-md-6">
              <section className="p-4 bg-light rounded shadow border-start border-4 border-success">
                <h3 className="text-center text-success mb-3">
                  <i className="bi bi-binoculars-fill me-2"></i> Nuestra Misión: Enriquecer Vidas Caninas
                </h3>
                <p className="text-info">
                  En <span className="fw-bold text-primary">Caninos SABS</span>, nuestra misión es clara: enriquecer la vida de los caninos y fortalecer su vínculo con sus dueños, ofreciendo productos y servicios de calidad con amor y conocimiento.
                </p>
              </section>
            </div>

            <div className="col-md-6">
              <section className="p-4 bg-light rounded shadow border-start border-4 border-warning">
                <h3 className="text-center text-warning mb-3">
                  <i className="bi bi-values me-2"></i> Nuestros Valores Clave
                </h3>
                <ul className="list-unstyled text-secondary">
                  <li><i className="bi bi-heart-fill text-danger me-2"></i> Amor y Respeto Animal</li>
                  <li><i className="bi bi-gem text-success me-2"></i> Calidad Superior</li>
                  <li><i className="bi bi-community-fill text-info me-2"></i> Compromiso Comunitario</li>
                  <li><i className="bi bi-handshake-fill text-primary me-2"></i> Integridad y Transparencia</li>
                  <li><i className="bi bi-rocket-fill text-warning me-2"></i> Innovación Continua</li>
                  <li><i className="bi bi-person-heart text-success me-2"></i> Atención Personalizada</li>
                </ul>
              </section>
            </div>
          </div>

          <section className="p-4 bg-light rounded shadow mt-4 border-start border-4 border-primary">
            <h3 className="text-center text-primary mb-3">
              <i className="bi bi-people-fill me-2"></i> Nuestro Equipo: Pasión en Acción
            </h3>
            <p className="text-secondary">
              Detrás de <span className="fw-bold text-info">Caninos SABS</span> hay un equipo dedicado de amantes de los animales. Expertos en nutrición, comportamiento, groomers y personal de atención al cliente trabajando con un compromiso común.
            </p>
            <blockquote className="blockquote text-center my-4">
              <p className="fst-italic text-success">"Dedicación y experiencia unidas por un amor genuino por los caninos."</p>
              <footer className="blockquote-footer"><cite title="Equipo de Caninos SABS">El Equipo de Caninos SABS</cite></footer>
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
};
