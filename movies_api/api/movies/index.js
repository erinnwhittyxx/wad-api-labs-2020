import express from 'express';
import movieModel from './movieModel';
import upcomingModel from './upcomingModel';
import popularModel from './popularModel'
import nowplayingModel from './nowplayingModel';

const router = express.Router();

router.get('/nowplaying', (req, res, next) => {
  nowplayingModel.find().then(nowplaying => res.status(200).send(nowplaying)).catch(next);
});

router.get('/popular', (req, res, next) => {
  popularModel.find().then(popular => res.status(200).send(popular)).catch(next);
});

router.post('/popular', async (req, res, next) => {
  const newPopular = req.body.id;
  const movie = await movieModel.findByMovieDBId(newPopular);
  if (popular.indexOf(movie._id) == -1) {
      await popular.push(movie._id);
      res.status(201).json();
  } else {
      res.status(401).json({
          code: 401,
          msg: 'Duplicate Movie Error'
      });
}});

router.get('/upcoming', (req, res, next) => {
  upcomingModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});


export default router;