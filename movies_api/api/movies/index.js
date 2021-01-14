import express from 'express';
import movieModel from './movieModel';
import upcomingModel from './upcomingModel';
import popularModel from './popularModel'

const router = express.Router();

router.get('/popular', (req, res, next) => {
  popularModel.find().then(popular => res.status(200).send(popular)).catch(next);
});

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