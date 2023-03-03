import { Profile as ProfileType } from "../../types/Profile";
import Profile from "../Profile";
import "./Grid.scss";

type Props = {
  profiles: ProfileType[];
};

export const Grid: React.FC<Props> = ({ profiles }) => (
  <div className="grid">
    {profiles.map((profile) => (
      <Profile profile={profile} key={profile.id} />
    ))}
  </div>
);
