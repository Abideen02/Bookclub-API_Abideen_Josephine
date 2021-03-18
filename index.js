import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

dotenv.config()

<<<<<<< HEAD
const port = process.env.PORT || 5090;
=======
const port = process.env.PORT || 5000;
>>>>>>> 17b6d005eb31d02f83d10aefbff964753772f84e

app.get('/', (req, res) => {
    res.send('Up and running :)')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);


app.listen(port, () => {
    console.log(`Our Book Club API is now available on port ${port}`)
})
