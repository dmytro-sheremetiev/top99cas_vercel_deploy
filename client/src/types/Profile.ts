export interface PersonInfo {
  id: string;
  fullName: string;
  company: string;
  specialization: string;
  site: string;
  phone: string;
  imgURL: string;
  GridId: number;
}

export interface Profile {
  id: string;
  position: number;
  Person: PersonInfo;
}