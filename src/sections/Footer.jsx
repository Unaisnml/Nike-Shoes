import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>
          <p>
            Thank you for visiting our website! At XYZ Company, we're dedicated
            to providing top-notch products and excellent customer service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
