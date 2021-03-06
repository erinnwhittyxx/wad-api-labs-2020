import userModel from '../api/users/userModel';
import movieModel from '../api/movies/movieModel';
import upcomingModel from '../api/movies/upcomingModel';
import popularModel from '../api/movies/popularModel';
import nowplayingModel from '../api/movies/nowplayingModel';
import {movies} from './movies.js';
import {upcoming} from './upcoming.js';
import { popular } from './popular';
import { nowplaying } from './nowplaying';

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

// deletes all user documents in collection and inserts test data
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
};

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadUpcoming() {
  console.log('load upcoming');
  console.log(upcoming.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load upcoming Data: ${err}`);
  }
}

export async function loadPopular() {
  console.log('load popular');
  console.log(popular.length);
  try {
    await popularModel.deleteMany();
    await popularModel.collection.insertMany(popular);
    console.info(`${popular.length} Popular movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load popular Data: ${err}`);
  }
}

export async function loadNowPlaying() {
  console.log('load now playing');
  console.log(nowplaying.length);
  try {
    await nowplayingModel.deleteMany();
    await nowplayingModel.collection.insertMany(nowplaying);
    console.info(`${nowplaying.length} Now Playing movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load now playing Data: ${err}`);
  }
}