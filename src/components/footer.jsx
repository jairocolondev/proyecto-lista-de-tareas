const Footer = () => {
  return (
    <footer className="footer">
      <p className="parrafoFooter">
        © {new Date().getFullYear()} | Creado por{" "}
        <a
          className="linkJairoColon"
          href="https://jairocolon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jairo Colón | Creative Design
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
