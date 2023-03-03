import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Profile as ProfileType } from "../../types/Profile";

import "./ProfileModal.scss";

type Props = {
  profile: ProfileType;
  closeModal: () => void;
};

export const ProfileModal: React.FC<Props> = ({ profile, closeModal }) => {
  const ref = useOutsideClick(closeModal);
  
  return (
    <>
      <div className="modal" ref={ref}>
        <img
          src={profile.Person.imgURL}
          alt="person"
          className="modal__photo"
        />

        <div className="modal__info">
          <div className="modal__heading">
            <h1 className="modal__text modal__text--title">
              {profile.Person.fullName}
            </h1>

            <img
              src="assets/img/modalClose.svg"
              alt="close"
              className="modal__close"
              onClick={closeModal}
            />
          </div>

          <div className="modal__text modal__text--company">
            {profile.Person.company}
          </div>

          <div className="modal__text modal__text--specialization">
            {`Specialization: ${profile.Person.specialization}`}
          </div>

          <a
            className="modal__text modal__text--link"
            href={profile.Person.site}
          >
            {profile.Person.site}
          </a>

          <a
            className="modal__text modal__text--link"
            href={`tel:${profile.Person.phone}`}
          >
            {profile.Person.phone}
          </a>
        </div>
      </div>
    </>
  );
};
