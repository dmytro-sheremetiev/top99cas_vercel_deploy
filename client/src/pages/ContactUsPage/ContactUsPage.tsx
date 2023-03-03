import "./ContactUsPage.scss";

export const ContactUsPage: React.FC = () => {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact Us</h1>

      <div className="contact__info">
        <a
          href="https://goo.gl/maps/oQjQfmiAoo4eKJ7D6"
          target="_blank"
          rel="noreferrer"
          className="contact__info--block"
        >
          <div className="contact__icon">
            <img
              src="assets/img/addressIcon.svg"
              alt="address"
              className="contact__icon--img"
            />
          </div>
          <div className="contact__text">
            <span className="contact__text--bold">Address:</span> Techaboard
            Digi Solutions Private Limited
            <br />
            303, The Platinum Mall, Jawahar Road, Ghatkopar East, Mumbai 400077
          </div>
        </a>

        <a className="contact__info--block" href="tel:9137404807">
          <div className="contact__icon">
            <img
              src="assets/img/phoneIcon.svg"
              alt="phone"
              className="contact__icon--img"
            />
          </div>
          <div className="contact__text">
            <span className="contact__text--bold">Phone:</span> 9137404807
          </div>
        </a>

        <a className="contact__info--block" href="mailto:support@aboard.tech">
          <div className="contact__icon">
            <img
              src="assets/img/emailIcon.svg"
              alt="email"
              className="contact__icon--img"
            />
          </div>
          <div className="contact__text">
            <span className="contact__text--bold">E-mail:</span>{" "}
            support@aboard.tech
          </div>
        </a>
      </div>
    </div>
  );
};
