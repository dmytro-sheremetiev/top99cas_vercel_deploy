import { useEffect, useState } from "react";
import { getProfiles } from "../../api/fetchProfiles";
import Grid from "../../components/Grid";
import { Profile } from "../../types/Profile";

export const HomePage: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>();

  useEffect(() => {
    getProfiles("grid").then(setProfiles);
  }, []);

  return (
    <div className="home">
      {profiles && (
        <>
          <Grid profiles={profiles} />

          <div className="App__year">2023</div>
        </>
      )}
    </div>
  );
};
