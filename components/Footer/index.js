const Footer = () => {
  return (
    <footer className="container mx-auto px-6 footer">
      <p className="text-center text-white text-md mb-4">
        Design & built by Ujen Basi
      </p>
      <div className="flex justify-center">
        <ul className="flex gap-4 items-center justify-center mx-auto">
          <button className="text-white">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ujen5173"
            >
              <i className="uil uil-github text-2xl"></i>
            </a>
          </button>
          <button className="text-white">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ujen-basi-167a4522a/"
            >
              <i className="uil uil-linkedin text-2xl"></i>
            </a>
          </button>
          <button className="text-white">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ujen.basi.54/"
            >
              <i className="uil uil-facebook text-2xl"></i>
            </a>
          </button>
          <button className="text-white">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ujen_basi/?hl=en"
            >
              <i className="uil uil-instagram text-2xl"></i>
            </a>
          </button>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
