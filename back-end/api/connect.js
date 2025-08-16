import { MongoClient } from "mongodb";

const URI ="mongodb+srv://meuUser:00000000@cluster0.kowqzc4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client =new MongoClient(URI);

export const db= client.db("spotifyAula");

//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);

