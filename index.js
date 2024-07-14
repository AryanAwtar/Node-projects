import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL= "https://v2.jokeapi.dev/joke"
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/Any");
    res.render("Jokes-APP/index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});