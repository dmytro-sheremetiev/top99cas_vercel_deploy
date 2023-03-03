import { Profile } from "../types/Profile";

const BASE_URL = "http://localhost:9000";

export const getProfiles = (url: string): Promise<Profile[]> => {
  return fetch(`${BASE_URL}/${url}`).then((res) => res.json());
};
