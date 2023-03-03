import { privacyPolicyContent } from "./PrivacyPolicyContent";
import "./PrivacyPolicyPage.scss";

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy__title">
        TechAboard Privacy Policy
      </h1>

      <p className="privacy-policy__updated">
        Last updated: February 20, 2023
      </p>
      <div
        className="privacy-policy__content"
        dangerouslySetInnerHTML={{ __html: privacyPolicyContent }}
      />
    </div>
  );
};
