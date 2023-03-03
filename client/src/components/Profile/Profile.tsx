import { useCallback, useEffect, useState } from "react";
import { Profile as ProfileType } from "../../types/Profile";
import ProfileModal from "../ProfileModal";
import "./Profile.scss";

type Props = {
  profile: ProfileType;
};

export const Profile: React.FC<Props> = ({ profile }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setIsModalVisible((prev) => !prev);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  useEffect(() => {
    if (isModalVisible) {
      document.body.classList.add("modal__visible");
    } else {
      document.body.classList.remove("modal__visible");
    }
  }, [isModalVisible]);

  return (
    <div className="profile">
      {profile.Person ? (
        <img
          className="profile__photo"
          src={profile.Person.imgURL}
          alt="profileImg"
          onClick={toggleModal}
        />
      ) : (
        <img
          src="assets/img/addPerson.svg"
          alt="add"
          className="profile__add"
        />
      )}

      {isModalVisible && (
        <>
          <div className="profile__modal">
            <ProfileModal profile={profile} closeModal={closeModal} />
          </div>

          <div className="modal__blured-background" />
        </>
      )}
    </div>
  );
};
