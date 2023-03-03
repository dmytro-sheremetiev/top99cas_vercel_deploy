import { Optional } from "sequelize";

export interface PersonAttributes {
  id: number,
  fullName: string,
  company: string,
  specialization: string,
  site: string | null,
  phone: string | null,
  imgURL: string,
}

export interface PersonCreationAttributees extends Optional<PersonAttributes, "id"> {}
export interface PersonOutput extends Required<PersonAttributes> {}