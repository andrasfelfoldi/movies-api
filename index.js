import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import moviesRoutes from './src/routes/moviesRoutes';

const app = express();
const PORT=3000;

mongoose.connect('mongodb://localhost:27017' ,{ useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

moviesRoutes(app);

app.get("/", (req, res) => {
    res.send(`Movies API has the following routes:\n
    movies`)
});

app.listen(PORT, () => {
    console.log("Movies API is running!")
})