import express, { Application } from "express";
import { gridRouter } from "./routes/gridRoutes";
import cors from "cors";
import { sequelize } from "./db/sequlize";
import { genarate99Persons } from "./generateData";
import { Grid } from "./services/grid";
import { Person } from "./services/person";

const PORT = process.env.PORT || 3000;

const server: Application = express();
server.use(cors())

server.use("/grid", express.json(), gridRouter);

server.use("/setup", async (req, res) => {

  await sequelize.sync({ force: true });
  await Grid.hasOne(Person);
  await Person.belongsTo(Grid);

  await genarate99Persons();
  
  res.statusCode = 200;
})

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT} port`);
});
