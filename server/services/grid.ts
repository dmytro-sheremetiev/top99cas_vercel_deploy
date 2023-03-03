import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../db/sequlize";
import { genarate99Persons } from "../generateData";
import { Person } from "./person";

export class Grid extends Model<
  InferAttributes<Grid>,
  InferCreationAttributes<Grid>
> {
  declare id: CreationOptional<number>;
  declare position: number;
}

Grid.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize,
  }
);

export const getAllPersons = async () => {
  return await Grid.findAll({
    include: {
      model: Person,
    },
    order: [["id", "ASC"]],
  });
};

// await Person.create({
//   fullName: "Hideo Kodzima",
//   company: "Kodzima Games",
//   specialization: "Founder",
//   site: "http://google.com",
//   phone: "+0564 833 64 533",
//   imgURL:
//     "https://picsum.photos/200",
//   GridId: 3,
// });

// console.log(await Person.findAll())

// (async () => {
//   await Grid.create({
//     position: 3,
//   })
// })();

// genarate99Persons()
