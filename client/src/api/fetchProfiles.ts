import { Profile } from "../types/Profile";

const BASE_URL = `${process.env.BACKEND_URL}`;

export const getProfiles = (url: string): Promise<Profile[]> => {
  return fetch(`${BASE_URL}/${url}`).then((res) => res.json());
};
