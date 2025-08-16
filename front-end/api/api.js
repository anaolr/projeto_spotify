import axios from "axios";
import "dotenv/config";

//const {NODE_ENV} = process.env;
//const URL= NODE_ENV === 'development'? "http://localhost:3001/api" : "/api";
const URL= "https://projeto-spotify-7822.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

