import "./AboutPage.scss";

export const AboutPage: React.FC = () => {
  return (
    <div className="about">
      <h1 className="about__title">About Us</h1>

      <div className="about__text">
        Top99CAs is India's No. advertisement spot for Chartered Accountants
        that provides local search related services to users across India
        through multiple platforms such as website, mobile website, Apps
        (Android, iOS). The organisation also aims to make communication between
        users and businesses seamless through its Real Time Chat Messenger.
      </div>

      <h1 className="about__title">Top99CAs's Mission</h1>

      <div className="about__text">
        To provide fast, free, reliable, and comprehensive information to our
        users and enable discovery and transactions for your services and
        provide the marketing platform.
      </div>
    </div>
  );
};
