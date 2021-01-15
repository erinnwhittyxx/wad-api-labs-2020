import {loadUsers, loadMovies, loadUpcoming, loadPopular, loadNowPlaying} from './seedData';
import session from 'express-session';
import passport from './authenticate';
import './db';
import usersRouter from './api/users';
import moviesRouter from './api/movies';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';

dotenv.config();

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadUpcoming();
  loadPopular();
  loadNowPlaying();
}

const errHandler = (err, req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/upcoming',moviesRouter);
app.use('/api/popular',moviesRouter);
app.use('/api/nowplaying',moviesRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});