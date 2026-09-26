import riosDeVidaLogo from "../../assets/logoRiosdevida.png";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="baptism-footer">
      {/* Decoración de agua */}
      <div className="footer-water-symbol" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      {/* Logo de Ríos de Vida */}
      <div className="footer-logo-wrapper">
        <img
          className="footer-logo"
          src={riosDeVidaLogo}
          alt="Ríos de Vida"
        />
      </div>

      <h3>
        Ríos de Vida
      </h3>

      <p className="footer-description">
        Una iglesia que cree en Jesús,
        en las personas y en las nuevas historias.
      </p>

      {/* Redes sociales */}
      <div className="footer-socials">
        <a
          href="https://www.instagram.com/riosdevidamonteros/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Ríos de Vida"
        >
          <InstagramIcon />
          <span>Ríos de Vida</span>
        </a>

        <a
          href="https://www.instagram.com/jovenes.rdv_of/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Jóvenes"
        >
          <InstagramIcon />
          <span>Jóvenes</span>
        </a>
      </div>

      {/* Separador */}
      <div className="footer-divider" />

      {/* Copyright */}
      <p className="copyright">
        © 2026 Ríos de Vida
      </p>

      <p className="rights">
        Todos los derechos reservados
      </p>

      {/* Desarrollador */}
      <p className="footer-credit">
        Desarrollado por{" "}
        <a
          href="https://www.instagram.com/elroisystems/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de ElroiSystems"
        >
          ElroiSystems
        </a>
      </p>
    </footer>
  );
}