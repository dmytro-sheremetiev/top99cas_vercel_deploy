import { terms } from "./TermsPageContent";
import "./TermsPage.scss";

export const TermsPage: React.FC = () => (
  <div className="terms">
    <div
        className="terms__content"
        dangerouslySetInnerHTML={{ __html: terms }}
      />
  </div>
)