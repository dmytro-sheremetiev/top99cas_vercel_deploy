import { Person } from "./services/person";
import { Grid } from "./services/grid";

const photos = [
  "https://static8.depositphotos.com/1011030/822/i/950/depositphotos_8228328-stock-photo-morgan-freeman.jpg",
  "https://www.byrdie.com/thmb/RJcVfukdYM7aPMtVhje050P4MYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-911199570-c7347dab092841efac74925488146989.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/celebrities-cancer-1568667554.jpg?crop=0.490xw:0.981xh;0.502xw,0.00321xh&resize=640:*",
  "https://i.insider.com/5b2929c25e48ec43008b467e?width=1000&format=jpeg&auto=webp",
  "https://static8.depositphotos.com/1011030/822/i/950/depositphotos_8228328-stock-photo-morgan-freeman.jpg",
  "https://www.byrdie.com/thmb/RJcVfukdYM7aPMtVhje050P4MYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-911199570-c7347dab092841efac74925488146989.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/celebrities-cancer-1568667554.jpg?crop=0.490xw:0.981xh;0.502xw,0.00321xh&resize=640:*",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/celebrities-cancer-1568667554.jpg?crop=0.490xw:0.981xh;0.502xw,0.00321xh&resize=640:*",
  "https://i.insider.com/5b2929c25e48ec43008b467e?width=1000&format=jpeg&auto=webp",
  "https://i.insider.com/5b2929c25e48ec43008b467e?width=1000&format=jpeg&auto=webp",
  "https://i.insider.com/5b2929c25e48ec43008b467e?width=1000&format=jpeg&auto=webp",
];

export const genarate99Persons = async () => {
  for (let i = 1; i <= 99; i++) {
    const GridId = Math.random() > 0.5 ? i : undefined;
    const image = photos[Math.round(Math.random() * 10)];

    await Grid.create({
      position: i,
    });
    
    await Person.create({
      fullName: "Hideo Kodzima",
      company: "Kodzima Games",
      specialization: "Founder",
      site: "http://google.com",
      phone: "+0564 833 64 533",
      imgURL: image,
      GridId: GridId,
    });
  }
};
