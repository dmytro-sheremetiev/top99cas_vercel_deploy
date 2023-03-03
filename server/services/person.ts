import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../db/sequlize.js";

export class Person extends Model<
  InferAttributes<Person>,
  InferCreationAttributes<Person>
> {
  declare id: CreationOptional<number>;
  declare fullName: string;
  declare company: string;
  declare specialization: string;
  declare site: string | null;
  declare phone: string | null;
  declare imgURL: string;
  declare GridId: CreationOptional<number>;
}

Person.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imgURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GridId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: false, sequelize, tableName: "Persons" }
);
